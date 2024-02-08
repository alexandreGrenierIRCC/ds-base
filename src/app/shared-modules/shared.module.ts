import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IrccDsAngularBannerModule,
  IrccDsAngularComponentsSharedModule,
  IrccDsAngularFormComponentsModule,
  IrccDsAngularHeaderFooterModule
} from 'ircc-ds-angular-component-library';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    IrccDsAngularComponentsSharedModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularBannerModule,
    IrccDsAngularFormComponentsModule,
    TranslateModule
  ],
  exports: [
    IrccDsAngularComponentsSharedModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularBannerModule,
    IrccDsAngularFormComponentsModule,
    TranslateModule
  ]
})
export class SharedModule {}
