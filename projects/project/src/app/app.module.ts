import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    AssignProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
