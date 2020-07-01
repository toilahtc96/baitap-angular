import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponentComponent } from './search-component/search-component.component';
const routeConfig: Routes = [
  { path: '', component: SearchComponentComponent },
  { path: 'addNew', component: AddNewComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routeConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [
    AddNewComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
