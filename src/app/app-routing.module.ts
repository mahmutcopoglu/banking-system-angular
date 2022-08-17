import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/components/login/login.component';
import { RegisterComponent } from './pages/register/components/register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: AppMainComponent,
      children: [
        // {
        //   path: 'register',
        //   loadChildren: () =>
        //     import('../app/pages/register/register.module').then(
        //       (m) => m.RegisterModule
        //     )
        // }
    ]

    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
