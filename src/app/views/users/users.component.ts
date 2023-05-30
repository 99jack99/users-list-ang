import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  

usersList:Array<any>= [{}];  

 delete_user(id:Number) {
  axios.delete(`https://reqres.in/api/users/${id}`)
    .then(() => {
      this.usersList = this.usersList.filter((x) => x.id !== id);
    })
    .catch((error) => {
      console.log(error.message);
      /* toast to warn error */
    });
};

  get_users(){
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
      console.log(res.data.data);
      this.usersList = res.data.data;
    })
    .catch((res)=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.get_users()
  }
}
