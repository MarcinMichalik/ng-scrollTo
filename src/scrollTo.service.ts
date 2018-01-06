import { Inject, Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ScrollToService {
    // TODO:         @Inject(WINDOW) private _window: Window consider injecting a window service
    constructor(
        @Inject(DOCUMENT) private _document: any,
        public ngZone: NgZone
    ) {}

    public scrollTo(element: string | HTMLElement, duration: number = 500, offset: number = 0, container: string = null): Observable<any> {
		let subject: Subject<any> = new Subject<any>();
        if (typeof element === 'string') {
            let el = <HTMLElement>this._document.querySelector(`#${element}`);
            this.scrollToElement(el, duration, offset, container, subject);
        }else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset, container, subject);
        }else {
			subject.error('I don\'t find element');
        }
        return subject;
    }

    private scrollToElement(el: HTMLElement, duration: number, offset: number, container, subject) {
        if (el) {
			const viewportOffset = el.getBoundingClientRect();
			const offsetTop = isNullOrUndefined(container) ? viewportOffset.top + window.pageYOffset
                : this._document.querySelector('#layout_container').scrollTop + viewportOffset.top;
            this.doScrolling(offsetTop + offset, duration, container, subject);
        } else {
        	subject.error('I don\'t find element');
        }
        return subject;
    }

    private doScrolling(elementY, duration, container, subject: Subject<any>) {
        const _document = this._document;
        const startingY = isNullOrUndefined(container) ? window.pageYOffset : _document.querySelector(container).scrollTop;
        const diff = elementY - startingY;
        let start;

        this.ngZone.runOutsideAngular( () => {
            requestAnimationFrame( function step(timestamp) {
                start = (!start) ? timestamp : start;

                const time = timestamp - start;
                const percent = Math.min(time / duration, 1);

                if (!isNullOrUndefined(container)) {
                 _document.querySelector('#layout_container').scrollTop = startingY + diff * percent;
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
