import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserEditorDComponent } from 'src/app/components/dialog/user-editor/user-editor.component';
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
  newUser =false;
  usersSubscription!: Subscription;
  showTable:boolean =true;
  usersData!: User[];
  constructor (
private accountService:AccountService,
public dialog:MatDialog
){ }
ngOnInit(): void {
  this.loadData();
}
  loadData() {
    this.usersSubscription =
    this.accountService.getUsers().subscribe(response =>{
      this.dataSource = new MatTableDataSource(response.model)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.usersData = response.model;
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
openModalNew(){
  this.newUser=true;
}
onCloseHandled(dataModal:any){
this.rowSelected =undefined;
this.newUser=false;
if(dataModal.refreshData){
  this.usersSubscription.unsubscribe();
  this.loadData();
}
}
openDialog(row: User){
  const dialogRef = this.dialog.open(UserEditorDComponent, {
    width:'600px',
    data: row,
    disableClose:true,
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    if(!!result.refreshData){
      this.usersSubscription.unsubscribe();
      this.loadData();
    }
  });
}

changeView(){
  this.showTable = !this.showTable;
}
getIniciales(usr : User){
  return ((usr.firstName).charAt(0) + (usr.lastName).charAt(0)).toUpperCase();
}
}
