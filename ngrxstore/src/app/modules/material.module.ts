import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





const data = [MatToolbarModule,MatButtonModule,MatCardModule,MatMenuModule,
  MatFormFieldModule,MatInputModule,MatDialogModule,MatProgressSpinnerModule]
@NgModule({
  declarations: [],
  imports: data,
  exports:data
})
export class material{}