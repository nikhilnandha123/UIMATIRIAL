import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  // student no array ahi past karvano
  stud:any[]=[
    // {id:1,img:'assets/img/me.png',name:'Jay',rollno:42,branch:'MCA'},
    // {id:2,img:'assets/img/me.png',name:'Fenil',rollno:2,branch:'MCA'},
    // {id:3,img:'assets/img/me.png',name:'Akshay',rollno:55,branch:'MCA'},
    // {id:4,img:'assets/img/me.png',name:'Kishan',rollno:47,branch:'MCA'},
    // {id:5,img:'assets/img/me.png',name:'Devang',rollno:1,branch:'MCA'},
    {id:1,img:'assets/img/me.png',Enrollment_no:'21SOECA21043',Name:'jay',branch:'MCA'},
    {id:2,img:'assets/img/me.png',Enrollment_no:'21SOECA21002',Name:'Fenil',branch:'MCA'},
    {id:4,img:'assets/img/me.png',Enrollment_no:'21SOECA21048',Name:'Kishan',branch:'MCA'},
    {id:5,img:'assets/img/me.png',Enrollment_no:'21SOECA21001',Name:'Devang',branch:'MCA'},

  ]
  //empty array banavano
  student:any;
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    //pachi param variabal banavano
    this._activatedRoute.params.subscribe(param=>{
      this.student = this.stud[param['id']]
    })
  }

}
