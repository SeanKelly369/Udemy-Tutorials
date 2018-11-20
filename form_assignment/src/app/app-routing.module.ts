import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // @ViewChild('f') signupForm:NgForm;
}

// onsubmit() {
//   this.mailAddress = this.mailAddress.value.userData.mailAddress;
// }
