import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '../src/scrollTo.module';

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        BrowserModule,
        ScrollToModule.forRoot({
			duration: 1000,
			offset: 200,
		}),
    ],
    bootstrap: [
        DemoComponent
    ]
})
export class DemoModule {

}
