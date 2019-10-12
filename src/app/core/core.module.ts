import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { SvgatorComponent } from './home/svgator/svgator.component';

@NgModule({
    declarations: [
        HomeComponent,
        SvgatorComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HomeComponent
    ]
})
export class CoreModule {}