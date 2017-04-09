import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '../src';

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        BrowserModule,
        ScrollToModule.forRoot()
    ],
    bootstrap: [
        DemoComponent
    ]
})
export class DemoModule{

}