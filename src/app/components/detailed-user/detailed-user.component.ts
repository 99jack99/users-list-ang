import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.scss']
})
export class DetailedUserComponent {

  constructor(private route: ActivatedRoute) {
  }
  
  id:any = 0;
  user:Array<any> = [];

   get_user = (id:any) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res);
        this.user = res.data.data;
        JSON.stringify(this.user)
        console.log(this.user);
        
      })  
      .catch((error) => {
        console.log(error);
      });
  };

 

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

   this.get_user(this.id)
  }

}
