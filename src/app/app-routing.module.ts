import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JitsiComponent } from './jitsi/jitsi.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: ThankYouComponent,
  },
  {
    path: 'jitsi',
    component: JitsiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
