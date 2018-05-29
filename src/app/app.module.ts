import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsService } from './dogs.service';


@NgModule({
  declarations: [
    AppComponent,
    AddDogComponent,
    AddOwnerComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
