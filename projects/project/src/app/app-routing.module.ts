import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {
    path:'',
    component:CreateProjectComponent
  },
  {
    path:'employee',
    loadChildren: () => import('employee/EmployeeFeatureModule').then(m => m.EmployeeFeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
