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
      path: 'course/:type',
    } ,

    {
      component: DetailComponent,
      path: 'course/:type/view',
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(directorRoutes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
