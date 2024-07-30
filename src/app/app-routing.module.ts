import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { HomeComponent } from './Components/Productos/home/home.component';
import { authGuard } from './guards/auth.guard';
import { CarritoComponent } from './Components/Productos/carrito/carrito.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent, canActivate: [authGuard]},
  {path:'carrito', component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
