import {Component} from "@angular/core";

@Component({
    selector: 'hi',
    template: `
        <h1>Hi!</h1>
`})
export class HiComponent {
    constructor() {
        console.log("Hi COMPONENT constructor")
    }
}
