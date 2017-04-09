import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToDirective } from './scrollTo.directive';
import { ScrollToService } from './scrollTo.service';

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
        ScrollToService
    ]
})
export class ScrollToModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ScrollToModule
        };
    }
}