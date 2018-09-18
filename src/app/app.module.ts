import { NgModule, Type, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatTabsModule,
  MatToolbarModule, MatGridListModule, MatTooltipModule } from '@angular/material';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule, TdLoadingService } from '@covalent/core/loading';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import {  CovalentMenuModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';
import { CourseComponent } from './course/course.component';
import { InternalDocsService } from '../services';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,LoginComponent, CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    // material modules


    MatIconModule,

    MatDividerModule,
    MatInputModule,

    MatButtonModule,
    MatListModule,

    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatTooltipModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    // external modules
    NgxChartsModule,
    // routes
  
  ], // modules needed to run this module
  providers: [

    TdLoadingService,
    InternalDocsService, 


    httpInterceptorProviders,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
