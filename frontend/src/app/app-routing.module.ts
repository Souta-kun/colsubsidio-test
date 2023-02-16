import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';

const routes: Routes = [
  { path: '', component: NewUserComponent },
  { path: 'list', component: ListUserComponent },
  { path: '**', redirectTo: './', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
