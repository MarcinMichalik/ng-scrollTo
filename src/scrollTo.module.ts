import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToDirective } from './scrollTo.directive';
import { ScrollToService } from './scrollTo.service';
import { DEFAULT_CONFIG, Ng2DefaultConfiguration, Ng2ScrollToConfiguration } from './scrollTo.config';

@NgModule({
    declarations: [
        ScrollToDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ScrollToDirective
    ],
    providers: [
        ScrollToService,
		{provide: DEFAULT_CONFIG, useValue: new Ng2DefaultConfiguration()},
    ],
})
export class ScrollToModule {
    static forRoot(config?: Ng2ScrollToConfiguration): ModuleWithProviders {
        return {
            ngModule: ScrollToModule,
			providers: [{
				provide: DEFAULT_CONFIG, useValue: config || new Ng2DefaultConfiguration(),
			}],
        };
    }
}
