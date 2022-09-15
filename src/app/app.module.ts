import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { JitsiComponent } from './jitsi/jitsi.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SidenavResponsive } from './side-nav/sidenav-responsive';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JitsiService } from './services/jitsi.service';

@NgModule({
  providers: [JitsiService],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    JitsiComponent,
    ThankYouComponent,
    SidenavResponsive,
  ],
  bootstrap: [SidenavResponsive],
})
export class AppModule {}
