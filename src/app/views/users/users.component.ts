import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  /* users:Array<T>= "hola";  */

  /* hola = "asd" */

  ngOnInit(): void {
    
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
      console.log(res);
    })

    .catch((res)=>{
      console.log(res);
    })
  }
}
