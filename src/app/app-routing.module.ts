import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
{path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule), data: { preload: true}},
{path: 'dashboard', component: DashboardComponent, children: [
  {path: '', component: HomeComponent},
  {path: 'mail-group', loadChildren: () => import('./components/mail-group/mail-group.module').then(m => m.MailGroupModule)
  , data: {preload: true}}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
