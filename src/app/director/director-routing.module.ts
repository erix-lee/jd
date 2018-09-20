import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorComponent } from './director.component';
import { DirectorHomeComponent } from './director-home/director-home.component';
import { CourseComponent } from '../course/course.component';
import { EditComponent } from '../course/edit/edit.component';
import { DetailComponent } from '../course/detail/detail.component';






const directorRoutes: Routes = [{

  component: DirectorComponent,
  path: 'director',
  children: [
     {
      component: DirectorHomeComponent,
      path: '',
    } ,
    {
      component: CourseComponent,
      path: 'course',
    } ,
    {
      component: EditComponent,
      path: 'course/edit',
    } 
    ,
    {
      component: DetailComponent,
      path: 'course/view',
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(directorRoutes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
