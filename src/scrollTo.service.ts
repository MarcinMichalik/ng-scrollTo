import { Inject, Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ScrollToService {

    constructor(
        @Inject(DOCUMENT) private _document: any,
        public ngZone: NgZone
    ) {}

    /**
     * Determine which element we need to scroll to
     * @param {string | HTMLElement} element
     * @param {number} duration
     * @param {number} offset
     * @param {string} container
     * @returns {Observable<any>}
     */
    public scrollTo(element: string | HTMLElement, duration: number = 500, offset: number = 0, container: string = null): Observable<any> {
		let subject: Subject<any> = new Subject<any>();
        if (typeof element === 'string') {
            let el = <HTMLElement>this._document.querySelector(element);
            this.scrollToElement(el, duration, offset, container, subject);
        }else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset, container, subject);
        }else {
			subject.error(`I don't find element`);
        }
        return subject;
    }

    /**
     * Determine the scrolling distance to a specified element
     * @param {HTMLElement} el
     * @param {number} duration
     * @param {number} offset
     * @param container
     * @param subject
     * @returns {any}
     */
    private scrollToElement(el: HTMLElement, duration: number, offset: number, container, subject) {
        if (el) {
			const viewportOffset = el.getBoundingClientRect();
			const offsetTop = isNullOrUndefined(container) ? viewportOffset.top + window.pageYOffset
                : this._document.querySelector(container).scrollTop + viewportOffset.top;
            this.doScrolling(offsetTop + offset, duration, container, subject);
        } else {
        	subject.error(`I don't find element`);
        }
        return subject;
    }

    /**
     * Scroll to the specified element either in the window for a specified container
     * @param elementY
     * @param duration
     * @param container
     * @param {Subject<any>} subject
     */
    private doScrolling(elementY, duration, container, subject: Subject<any>) {
        const _document = this._document; // we need access to a constant instance of the body to use outside the ngZone
        const startingY = isNullOrUndefined(container) ? window.pageYOffset : _document.querySelector(container).scrollTop;
        const diff = elementY - startingY;
        let start;

        this.ngZone.runOutsideAngular( () => {
            requestAnimationFrame( function step(timestamp) {
                start = (!start) ? timestamp : start;

                const time = timestamp - start;
                const percent = Math.min(time / duration, 1);

                if (!isNullOrUndefined(container)) {
                 _document.querySelector(container).scrollTop = startingY + diff * percent;
                } else {
                    window.scrollTo(0, startingY + diff * percent);
                }
                if (time < duration) {
                    requestAnimationFrame(step);
                    subject.next({});
                } else {
                    subject.complete();
                }
            });
        });
    }
}
