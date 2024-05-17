import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './Login/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyIntern';

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(AboutComponent);
  }
}
