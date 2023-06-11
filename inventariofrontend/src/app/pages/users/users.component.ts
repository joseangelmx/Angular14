import { Component, OnInit, ViewChild } from '@angular/core';
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
constructor (
private accountService:AccountService
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
  console.log('Row Selected',row)
  this.display ="block";
}
onCloseHandled(){
  this.display = "none"
}
}
