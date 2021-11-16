import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const routes: Routes = [
  { component: Step1Component, path: '' },
  { component: Step3Component, path: 'page2' },
  { component: Step3Component, path: 'page3' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
