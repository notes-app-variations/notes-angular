import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../../api/authActions';

type User = {
  userID: string;
  email: string;
  username: string;
  password: string;
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  currentTab = 'Login';
  loading = false;
  alert = '';
  user: User;

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit() {}

  register(e, data) {
    e.preventDefault();
    console.log(data);
    alert('register');
  }

  async login(e, data) {
    e.preventDefault();
    this.loading = true;
    try {
      await login({ email: data.email, password: data.password });
      console.log(data);
      await this.router.navigate(['/notes']).then((e) => {
        if (e) {
          console.log('Navigation is successful!');
        } else {
          console.log('Navigation has failed!');
        }
      });
    } catch (e) {
      this.alert = e;
      this.loading = false;
    }
  }
}
