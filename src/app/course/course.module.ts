import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule, MatToolbarModule, MatTabsModule, MatTreeModule, MatTooltipModule, MatProgressBarModule, MatAutocompleteModule, MatChipsModule, MAT_DATE_LOCALE } from '@angular/material';
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule, CovalentSearchModule, CovalentPagingModule, CovalentFileModule, CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentJsonFormatterModule, CovalentDataTableModule, CovalentMessageModule, CovalentVirtualScrollModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxTimelineModule } from 'ngx-timeline';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    CommonModule,

    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,

    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatTreeModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatAutocompleteModule,
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

    CovalentMessageModule,
    CovalentVirtualScrollModule,
    CovalentSearchModule,
    NgxChartsModule,
    NgxTimelineModule,
    NgxDatatableModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'zh-CN'},
  ],
  declarations: [CourseComponent, DetailComponent, EditComponent]
})
export class CourseModule { }
