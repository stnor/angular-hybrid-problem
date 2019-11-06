import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {helloState, hiState} from "./hello.states";
import {HelloComponent} from "./hello.component";
import {HiComponent} from "./hi.component";
import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";

export let HELLO_STATES = [helloState, hiState];

@NgModule({
    imports: [
        CommonModule,
        UIRouterUpgradeModule.forChild({ states: HELLO_STATES }),
    ],
    declarations: [HelloComponent, HiComponent]
})
class HelloModule {
    constructor() {
        console.log("Hello module constructor")
    }

}

export {HelloModule};
