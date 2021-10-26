import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routingproject';

  _couList!: Course[];

  ngOnInt()
  {
    this.getCourse();
  }

  getCourse()
{
  this._couList=[
    
    {id:1,cname:"java",isselected:false},
    {id:2,cname:"Advance-java",isselected:false},
    {id:3,cname:"PHP",isselected:false},
    {id:4,cname:"Salesforce",isselected:false},
    {id:5,cname:"Python",isselected:false}
    
  ]

  
}

onselect()
{
  console.log(this._couList)
}

}
   

  class Course {
    id!:number;
    cname!:string;
    isselected!:boolean

  }


