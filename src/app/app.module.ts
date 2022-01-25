import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { ListModule } from './pages/employees/list/list.module';
import { ListComponent } from './pages/employees/list/list.component';
import { NewModule } from './pages/employees/new/new.module';
import { NewComponent } from './pages/employees/new/new.component';
import { DetailsModule } from './pages/employees/details/details.module';
import { DetailsComponent } from './pages/employees/details/details.component';
import { EditModule } from './pages/employees/edit/edit.module';
import { EditComponent } from './pages/employees/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    NewComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule,
    ListModule,
    NewModule,
    DetailsModule,
    EditModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
