import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { GetUserService } from './service/getUser.service';
import { AddNewUser } from './service/addNewUser.service';
import { HttpClientModule } from '@angular/common/http';
import { TableDataComponent } from './table-data/table-data.component';
import { MoneyFormatPipe } from './money-format-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    TableDataComponent,
    MoneyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GetUserService,
    AddNewUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
