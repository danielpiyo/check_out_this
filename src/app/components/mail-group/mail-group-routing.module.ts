import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailGroupComponent } from './mail-group.component';


const routes: Routes = [
  {path: '', component: MailGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailGroupRoutingModule { }
