import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignProjectComponent } from '../assign-project/assign-project.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

const routes: Routes = [
  {
    path:'',
    component:CreateEmployeeComponent
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
export class EmployeeFeatureRoutingModule { }
