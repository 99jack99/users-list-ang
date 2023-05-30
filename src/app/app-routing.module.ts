import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UsersComponent } from './views/users/users.component';
import { DetailedUserComponent } from './components/detailed-user/detailed-user.component';

const routes: Routes = [
  { path: '', 
    component: LoginComponent },

  { path: 'register', 
    component: RegisterComponent },

  { path: 'users', 
    component: UsersComponent, 
    children: [
      {
        path:'user/:id', component: DetailedUserComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
