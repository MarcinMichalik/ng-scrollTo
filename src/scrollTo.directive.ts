import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { ScrollToService } from './scrollTo.service';

@Directive({
    selector: '[scrollTo]'
})
export class ScrollToDirective implements OnInit {

    @Input('scrollTo') scrollTo: any;
    @Input('scrollDuration') scrollDuration: number;
    @Input('scrollOffset') scrollOffset: number;
    @Input('container') container: string;

    constructor(private scrollToService: ScrollToService) {}

    ngOnInit(): void {
        this.scrollDuration = (!this.scrollDuration) ? 500 : this.scrollDuration;
        this.scrollOffset = (!this.scrollOffset) ? 0 : this.scrollOffset;
    }

    @HostListener('mousedown')
    onMouseClick() {
        this.scrollToService.scrollTo(this.scrollTo, this.scrollDuration, this.scrollOffset, this.container);
    }
}