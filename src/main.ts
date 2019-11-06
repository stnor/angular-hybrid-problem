import * as angular from 'angular';
import {setAngularJSGlobal} from "@angular/upgrade/static";
setAngularJSGlobal(angular);

import 'zone.js';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {UrlService} from "@uirouter/core";
import {getUIRouter} from "@uirouter/angular-hybrid";
import {enableProdMode, NgZone} from "@angular/core";
import {AppModule} from "./app/app.module";
// @ts-ignore
import ng1App from "./ng1app/ng1app";

ng1App.config(['$urlServiceProvider', ($urlService: UrlService) => {
    $urlService.deferIntercept()
}]);

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const urlService: UrlService = getUIRouter(platformRef.injector).urlService;

    function startUIRouter() {
        console.log("Start UI-router")
        urlService.listen();
        urlService.sync();
    }

    const ngZone: NgZone = platformRef.injector.get(NgZone);
    ngZone.run(startUIRouter);
});
