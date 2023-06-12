import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'email',
    'firstName',
    'lastName',
    'phoneNumber',
    'status'
  ];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  display: string = 'none';
rowSelected: User | undefined;
  constructor (
private accountService:AccountService,
public dialog:MatDialog
){ }
ngOnInit(): void {
  this.accountService.getUsers().subscribe(response =>{
    this.dataSource = new MatTableDataSource(response.model)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
openModal(row:User){

  this.rowSelected= row;
}
onCloseHandled(){
this.rowSelected =undefined;
}
animal: string | undefined;
name: string | undefined;
openDialog(row: User){
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    data: {name: this.name, animal: this.animal},
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    console.log('The dialog was closed');
    this.animal = result;
  });

}
}

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'userDialogBoorame.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
