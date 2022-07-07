import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stud:any[]=[
    {id:1,img:'assets/img/me.png',Enrollment_no:'21SOECA21043',Name:'jay',branch:'MCA'},
    {id:2,img:'assets/img/me.png',Enrollment_no:'21SOECA21002',Name:'Fenil',branch:'MCA'},
    {id:4,img:'assets/img/me.png',Enrollment_no:'21SOECA21048',Name:'Kishan',branch:'MCA'},
    {id:5,img:'assets/img/me.png',Enrollment_no:'21SOECA21001',Name:'Devang',branch:'MCA'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  
}
