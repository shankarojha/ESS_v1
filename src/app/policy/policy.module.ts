import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PolicyComponent, DisclaimerComponent, TermsOfUseComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    SharedModule
  ]
})
export class PolicyModule { }
