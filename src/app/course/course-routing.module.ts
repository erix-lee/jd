import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';


const courseRoutes: Routes = [{

  component: CourseComponent,
  path: 'course',
  children: [
    
  ],
},{
  component: DetailComponent,
  path: 'courseview',
} ,
{
  component: EditComponent,
  path: 'courseedit',
} ];
@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
