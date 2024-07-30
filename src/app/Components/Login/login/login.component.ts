import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../Services/Login/login.service';
import { User } from '../../../Modelos/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user: User = new User();
  errorMessage!: string;
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    if (this.loginForm.get('username')!.value=="admin", this.loginForm.get('password')!.value=="admin") {
      localStorage.setItem('token', 'admin');
      this.router.navigate(['/home']);
      console.log("Sedion iniciada");
    }
  }
}
