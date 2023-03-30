import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {
    path: '',
    component: CreateEmployeeComponent,
  },
  {
    path: 'project',
    loadChildren: () =>
      import('project/ProjectFeatureModule').then(
        (m) => m.ProjectFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
