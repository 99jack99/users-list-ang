import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from "axios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userEmail:String = "";
  userPassword:String = "";

  login(email:String, pwd:String){
    axios.post('https://reqres.in/api/login',{
      "email" : email,
      "password": pwd
    })
    .then((res)=>{
      console.log(res);
    })
  }

}
