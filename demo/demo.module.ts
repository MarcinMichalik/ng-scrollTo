import {NgModule} from '@angular/core';
import {DemoComponent} from './demo.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        DemoComponent
    ]
})
export class DemoModule{

}