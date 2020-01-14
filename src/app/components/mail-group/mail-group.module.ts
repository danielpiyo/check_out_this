import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailGroupRoutingModule } from './mail-group-routing.module';
import { MailGroupComponent } from './mail-group.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [MailGroupComponent],
  imports: [
    CommonModule,
    MailGroupRoutingModule,
    MaterialModule
  ]
})
export class MailGroupModule { }
