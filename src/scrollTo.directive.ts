import { Directive, HostListener, Inject, Input, OnInit } from '@angular/core';
import { ScrollToService } from './scrollTo.service';
import { DEFAULT_CONFIG, Ng2DefaultConfiguration, Ng2ScrollToConfiguration } from './scrollTo.config';

@Directive({
    selector: '[scrollTo]',
})
export class ScrollToDirective implements OnInit {

	// tslint:disable-next-line:no-input-rename
    @Input('scrollTo') to: any;
	// tslint:disable-next-line:no-input-rename
    @Input('scrollDuration') duration: number;
	// tslint:disable-next-line:no-input-rename
    @Input('scrollOffset') offset: number;

    constructor(private scrollToService: ScrollToService,
				@Inject(DEFAULT_CONFIG) protected config: Ng2ScrollToConfiguration) {}

    ngOnInit(): void {
    	const opts: Ng2ScrollToConfiguration = {
    		duration: this.duration > -1 ? this.duration : this.config.duration,
    		offset: this.offset > -1 ? this.offset : this.config.offset,
		};
        this.duration = opts.duration;
        this.offset = opts.offset;
    }

    @HostListener('click', ['$event'])
    onMouseClick($event?: MouseEvent) {
        this.scrollToService.scrollTo(this.to, this.duration, this.offset);
    }
}
