import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { State } from '../../admin/staff/staff.component';
import { startWith } from 'rxjs/operators';
import { map } from 'jquery';

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrls: ['./clazz.component.sass']
})
export class ClazzComponent implements OnInit {
 

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  rows = [];
  
  animal: string;
  name: string;


  constructor(public snackBar: MatSnackBar,public dialog: MatDialog) {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(ClassMemberDialog, {
      width: '800px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}

@Component({
  selector: 'clazz-member-dialog',
  templateUrl: 'clazz-member-dialog.html',
})
export class ClassMemberDialog {
  rows = [];
  selected = [];
  constructor(
    public dialogRef: MatDialogRef<ClassMemberDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.fetch((data) => {
        this.rows = data.splice(0, 5);
      });
     }
     fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/company.json`);
  
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
  
      req.send();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

}