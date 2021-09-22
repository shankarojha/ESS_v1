import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

import { PolicyComponent } from './policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [{ path: '', component: PolicyComponent },
{ path: 'disclaimer', component: DisclaimerComponent },
{ path: 'terms-of-use', component: TermsOfUseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
