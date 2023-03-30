import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignProjectComponent } from '../assign-project/assign-project.component';
import { CreateProjectComponent } from '../create-project/create-project.component';

const routes: Routes = [
  {
    path:'',
    component:CreateProjectComponent
  },
  {
    path:'assign',
    component:AssignProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFeatureRoutingModule { }
