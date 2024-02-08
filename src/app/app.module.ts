import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './shared-modules/pages.module';
import { SharedModule } from './shared-modules/shared.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    AppRoutingModule,
    SharedModule,
     // ngx-translate and the loader module
     HttpClientModule,
     TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: createTranslateLoader,
         deps: [HttpClient]
       }
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
