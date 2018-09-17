import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiefComponent } from './chief.component';
import { ChiefHomeComponent } from './chief-home/chief-home.component';

const chiefRoutes: Routes = [{

  component: ChiefComponent,
  path: 'chief',
  children: [
    {
      component: ChiefHomeComponent,
      path: '',
    } 
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(chiefRoutes)],
  exports: [RouterModule]
})
export class ChiefRoutingModule { }
