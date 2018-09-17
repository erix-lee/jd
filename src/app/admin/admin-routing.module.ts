import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { TechersComponent } from './techers/techers.component';
import { StudentsComponent } from './students/students.component';
import { NoticeComponent } from './notice/notice.component';
import { StaffComponent } from './staff/staff.component';
import { SettingComponent } from './setting/setting.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const adminRoutes: Routes = [{

  component: AdminComponent,
  path: 'admin',
  children: [{
    component: AdminHomeComponent,
    path: '',
  }, {
    component: TechersComponent,
    path: 'techers',
  }, {
    component: StudentsComponent,
    path: 'students',
  }, {
    component: NoticeComponent,
    path: 'notice',
  },
  {
    component: StaffComponent,
    path: 'staff',
  },
  {
    component: SettingComponent,
    path: 'setting',
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
