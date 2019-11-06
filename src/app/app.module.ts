import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {HelloModule} from "./hello/hello.module";

@NgModule({
    imports: [BrowserModule, UpgradeModule, UIRouterUpgradeModule.forRoot({ states: []}), HelloModule]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {}
    ngDoBootstrap() {
        console.log('**** ngDoBootstrap');
        this.upgrade.bootstrap(document.body, ['nomp'], {strictDi: false});
    }
}
