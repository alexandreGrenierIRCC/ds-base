import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from '../pages/overview/overview.component';
import { SharedModule } from './shared.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShellComponent } from '../shell/shell.component';



@NgModule({
  declarations: [
    OverviewComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClipboardModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ],
})
export class PageModule {}
