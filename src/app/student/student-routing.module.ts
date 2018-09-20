import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CourseComponent } from '../course/course.component';



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
      path: 'course',
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
