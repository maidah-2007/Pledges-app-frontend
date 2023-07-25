import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:"",
    redirectTo:"pledges",
    pathMatch:"full"
  },
  {
    path:"pledges",
    loadChildren: ()=> import('./pledges-app/pledges-app.module').then(m=>m.PledgesAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
