import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsService } from './contents.service';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { BranchesComponent } from './branches/branches.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    BranchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ContentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
