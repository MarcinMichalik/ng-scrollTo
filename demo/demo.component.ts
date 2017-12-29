import { Component } from '@angular/core';
import { ScrollToService } from '../src/scrollTo.service';

@Component({
    selector: 'demo-app',
    templateUrl: './demo.component.html'
})
export class DemoComponent {

    constructor(private scrollService: ScrollToService) {}

    scrollToTop(element) {
        this.scrollService.scrollTo(element).subscribe(data => {
        	console.log('next');
        	console.log(data);
		}, error => {
        	console.error('error');
        	console.log(error);
		}, () => {
        	console.log('complete');
		});
    }
}
