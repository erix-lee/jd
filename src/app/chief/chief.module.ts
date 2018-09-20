import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiefRoutingModule } from './chief-routing.module';
import { ChiefHomeComponent } from './chief-home/chief-home.component';
import { ChiefComponent } from './chief.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule, MatToolbarModule, MatTabsModule, MatTooltipModule, MatProgressBarModule, MatAutocompleteModule, MatTreeModule, MatCheckboxModule, MatSnackBar, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule, CovalentSearchModule, CovalentPagingModule, CovalentFileModule, CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentJsonFormatterModule, CovalentDataTableModule, CovalentMessageModule, CovalentVirtualScrollModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxTimelineModule } from 'ngx-timeline';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilesComponent } from './files/files.component';
import { ClazzComponent, ClassMemberDialog } from './clazz/clazz.component';
import { ExamComponent } from './exam/exam.component';

import { CourseModule } from '../course/course.module';

@NgModule({
  imports: [
    CommonModule,
    ChiefRoutingModule,
    FormsModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatSnackBarModule,
    MatDialogModule, 
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
    CourseModule,
    NgxChartsModule,
    NgxTimelineModule,
    NgxDatatableModule,
  ],
  declarations: [ChiefHomeComponent, ChiefComponent, FilesComponent, ClazzComponent, ExamComponent,ClassMemberDialog],
  entryComponents: [ClassMemberDialog],
})
export class ChiefModule { }
