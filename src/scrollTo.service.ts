import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScrollToService {

    constructor() {}

    public scrollTo(element: string | HTMLElement, duration: number = 500, offset: number = 0): Observable<any> {
		let subject: Subject<any> = new Subject<any>();
        if (typeof element === 'string') {
            let el = document.querySelector(element as string);
            this.scrollToElement(el as HTMLElement, duration, offset, subject);
        }else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset, subject);
        }else {
			subject.error('I don\'t find element');
        }
        return subject;
    }

    private scrollToElement(el: HTMLElement, duration: number, offset: number, subject) {
        if (el) {
			let viewportOffset = el.getBoundingClientRect();
			let offsetTop = viewportOffset.top + window.pageYOffset;
            this.doScrolling(offsetTop + offset, duration, subject);
        } else {
        	subject.error('I don\'t find element');
        }
        return subject;
    }

    private doScrolling(elementY, duration, subject: Subject<any>) {
        const startingY = window.pageYOffset;
        const diff = elementY - startingY;
        let start;

        window.requestAnimationFrame(function step(timestamp) {
            start = (!start) ? timestamp : start;

            const time = timestamp - start;
            let percent = Math.min(time / duration, 1);

            window.scrollTo(0, startingY + diff * percent);

            if (time < duration) {
                window.requestAnimationFrame(step);
                subject.next({});
            }else {
            	subject.complete();
			}
        });
    }
}
