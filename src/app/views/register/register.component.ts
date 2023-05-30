import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userEmail:String = "";
  userPwd:String = "";

  register(email:String, pwd:String) {
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: pwd,
      })
      .then((res) => {
        console.log(res);
        
      })
      .catch((error) =>{
        console.log(error);
      })
  }

}
