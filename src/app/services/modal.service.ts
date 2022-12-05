import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {  Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  animal!: string;
  name!: string;
  date1: any;
  date2: any
  constructor(public dialog: MatDialog) { }
 /* openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(PupupFormComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal, date1: this.date1, date2: this.date2 }
    });

    return dialogRef.afterClosed();
  }*/


}
