import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.scss']
})
export class DetailedUserComponent {

  
  
  id:any = 0;

 /*  user:Array<object> = []; */

  user = [];


   get_user = () => {

    axios
      .get(`https://reqres.in/api/users/${2}`)
      .then((res) => {
        console.log(res);
        this.user = res.data.data;
        console.log(this.user);
        
      })  
      .catch((error) => {
        console.log(error);
      });
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.get_user()
  }

}
