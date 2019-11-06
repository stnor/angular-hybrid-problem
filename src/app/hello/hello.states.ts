import {Ng2StateDeclaration} from "@uirouter/angular";
import {HelloComponent} from "./hello.component";
import {HiComponent} from "./hi.component";

export const helloState: Ng2StateDeclaration = {
    name: "ng2hello",
    url: "/ng2hello",
    resolve: {
        name: () => 'hello ng2'
    },
    component: HelloComponent
};

export const hiState: Ng2StateDeclaration = {
    name: "ng2hi",
    url: "/ng2hi",
    component: HiComponent
};
