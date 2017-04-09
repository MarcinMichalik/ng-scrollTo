import { Component } from '@angular/core';
import { ScrollToService } from '../src';

@Component({
    selector: 'demo-app',
    templateUrl: './demo.component.html'
})
export class DemoComponent {

    constructor(private scrollService: ScrollToService) {}

    scrollToTop(element) {
        this.scrollService.scrollTo(element);
    }
}