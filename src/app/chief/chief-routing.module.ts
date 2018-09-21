import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiefComponent } from './chief.component';
import { ChiefHomeComponent } from './chief-home/chief-home.component';
import { FilesComponent } from './files/files.component';
import { ClazzComponent } from './clazz/clazz.component';
import { CourseComponent } from '../course/course.component';
import { EditComponent } from '../course/edit/edit.component';
import { DetailComponent } from '../course/detail/detail.component';

const chiefRoutes: Routes = [{

  component: ChiefComponent,
  path: 'chief',
  children: [
    {
      component: ChiefHomeComponent,
      path: '',
    } ,
    {
      component: FilesComponent,
      path: 'files',
    } ,
    {
      component: ClazzComponent,
      path: 'class',
    } ,
    {
      component: CourseComponent,
      path: 'course/:type',
    } ,
    {
      component: EditComponent,
      path: 'course/:type/edit',
    } 
    ,
    {
      component: DetailComponent,
      path: 'course/:type/view',
    } 
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(chiefRoutes)],
  exports: [RouterModule]
})
export class ChiefRoutingModule { }
