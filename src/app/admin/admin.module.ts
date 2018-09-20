import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material';
import { MatButtonModule,MatRadioModule,MatDatepickerModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule, MatToolbarModule, MatTabsModule, MatTooltipModule, MatProgressBarModule, MatAutocompleteModule } from '@angular/material';
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule, CovalentSearchModule, CovalentPagingModule, CovalentFileModule, CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentJsonFormatterModule, CovalentDataTableModule, CovalentMessageModule, CovalentVirtualScrollModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TechersComponent } from './techers/techers.component';
import { StudentsComponent } from './students/students.component';
import { NoticeComponent } from './notice/notice.component';
import { StaffComponent, DialogOverviewExampleDialog } from './staff/staff.component';
import { SettingComponent } from './setting/setting.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,


    /** Angular Modules */

    FormsModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatDialogModule, 
    MatRadioModule,
    MatDatepickerModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentFileModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentChipsModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    MatNativeDateModule,
    CovalentMessageModule,
    CovalentVirtualScrollModule,

    NgxChartsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'zh-CN'},
  ],
  declarations: [AdminComponent, AdminHomeComponent, TechersComponent, StudentsComponent, NoticeComponent, StaffComponent, SettingComponent,DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog],
})
export class AdminModule { }
