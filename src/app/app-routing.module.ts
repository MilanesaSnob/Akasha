import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/employees/details/details.component';
import { EditComponent } from './pages/employees/edit/edit.component';


const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }