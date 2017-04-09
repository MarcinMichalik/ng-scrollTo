import { Injectable } from '@angular/core';

@Injectable()
export class ScrollToService {

    constructor() {}

    public scrollTo(element: string | HTMLElement, duration: number = 500, offset: number = 0) {
        if (typeof element === 'string') {
            let el = document.querySelector(element as string);
            this.scrollToElement(el as HTMLElement, duration, offset);
        }else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset);
        }else {
            throw new Error('I don\'t find element');
        }
    }

    private scrollToElement(el: HTMLElement, duration: number, offset: number) {
        if (el) {
            this.doScrolling(el.offsetTop + offset, duration);
        } else {
            throw new Error('I don\'t find element');
        }
    }

    private doScrolling(elementY, duration) {
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
            }
        });
    }
}