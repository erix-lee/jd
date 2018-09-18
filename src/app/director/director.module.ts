import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorComponent } from './director.component';
import { DirectorHomeComponent } from './director-home/director-home.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule, MatToolbarModule, MatTabsModule, MatTooltipModule, MatProgressBarModule, MatAutocompleteModule } from '@angular/material';
import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule, CovalentSearchModule, CovalentPagingModule, CovalentFileModule, CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentJsonFormatterModule, CovalentDataTableModule, CovalentMessageModule, CovalentVirtualScrollModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    DirectorRoutingModule,
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

    NgxChartsModule,
  ],
  declarations: [DirectorComponent, DirectorHomeComponent]
})
export class DirectorModule { }
