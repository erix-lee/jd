import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CourseComponent } from '../course/course.component';
import { DetailComponent } from '../course/detail/detail.component';



const studentRoutes: Routes = [{

  component: StudentComponent,
  path: 'student',
  children: [
    {
      component: StudentHomeComponent,
      path: '',
    } ,
    {
      component: CourseComponent,
      path: 'course/:type',
    } 
    ,
    {
      component: DetailComponent,
      path: 'course/:type/view',
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
