import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './containers/account/users/user.component';
import { ProductComponent } from './containers/product/product.component';
import { SimpleCompoent } from './components/layouts/simple.component';
import { HomeCompoent } from './components/pages/home.component';

const routes: Routes = [
  {path:'home',component:HomeCompoent},
{path:'users',component:UsersComponent},
{path:'products',component:ProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
