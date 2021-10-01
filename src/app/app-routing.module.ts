import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from "./students/pages/students/students.component";

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: 'student', component: StudentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
