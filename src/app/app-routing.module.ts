import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {

    path: '', data: { preload: false, }, loadChildren: './admin/admin.module#AdminModule',
  } ,
  {

    path: '', data: { preload: false, }, loadChildren: './chief/chief.module#ChiefModule',
  } ,
  {

    path: '', data: { preload: false, }, loadChildren: './director/director.module#DirectorModule',
  } ,
  {

    path: '', data: { preload: false, }, loadChildren: './student/student.module#StudentModule',
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 