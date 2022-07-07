import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { StocksComponent } from './stocks/stocks.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'studentdetail',component:StudentDetailsComponent},
  {path:'stocks',component:StocksComponent},
  {path:'login',component:LoginComponent},
  {path:'post',component:PostComponent},
  {path:'card',component:CardComponent},
  //pachi studentdetails no path devano
  {path:'studentdetail/:id',component:StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
