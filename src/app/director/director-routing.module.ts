import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorComponent } from './director.component';
import { DirectorHomeComponent } from './director-home/director-home.component';






const directorRoutes: Routes = [{

  component: DirectorComponent,
  path: 'director',
  children: [
     {
      component: DirectorHomeComponent,
      path: '',
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(directorRoutes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
