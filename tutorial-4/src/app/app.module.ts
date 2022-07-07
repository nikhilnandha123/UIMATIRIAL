import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StocksComponent } from './stocks/stocks.component';
import { PostComponent } from './post/post.component';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ResultComponent,
    NevbarComponent,
    StudentDetailsComponent,
    StocksComponent,
    PostComponent,
    LoginComponent,
    CardComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
