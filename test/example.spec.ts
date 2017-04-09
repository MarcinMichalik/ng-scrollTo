import {
    inject,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { expect } from 'chai';

describe('example', () => {

    beforeEach(() => {
        // TestBed.configureTestingModule({
        //     imports: [
        //         <%- ngModuleName %>.forRoot()
        //     ]
        // });
    });

    it('should say hello world', () => {
        // const fixture: ComponentFixture<HelloWorldComponent> = TestBed.createComponent(HelloWorldComponent);
        // fixture.detectChanges();
        // expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the <%- projectTitle %> module!');
        expect("a", "a");
    });

});