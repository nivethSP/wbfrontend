import { JurisdictionDataSource } from './../jurisdiction-datasource';
import { JurisdictionService } from './../../../_services/jurisdiction.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { merge, tap } from 'rxjs';
import { Resource } from 'src/app/_model/Resource';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';

@Component({
  selector: 'app-jurisdiction-list',
  templateUrl: './jurisdiction-list.component.html',
  styleUrls: ['./jurisdiction-list.component.css']
})
export class JurisdictionListComponent implements OnInit {
  dataSource: JurisdictionDataSource;
  displayedColumns = ["Code", "update", "delete"];
  dataLength: number
  private dialogConfig: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  private filterValue: string = '';
  constructor(private jurisdictionService: JurisdictionService, private router: Router, private dialog: MatDialog,
    private errorService: ErrorHandlerService) { }

  ngOnInit(): void {
    this.dataSource = new JurisdictionDataSource(this.jurisdictionService);
    this.dataSource.fetchJurisdictions('Code', 'asc', '');
    this.dataSource.count$.subscribe(
      (length: number) => this.dataLength = length
    )
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: false,
      data: {}
    }
  }
  ngAfterViewInit() {

    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.BindJurisdictions())
      )
      .subscribe();
  }
  applyFilter(event: any) {
    this.filterValue = event.target.value;
    this.paginator.pageIndex = 0;
    this.BindJurisdictions();
  }
  BindJurisdictions() {
    console.log(this.filterValue);
    this.dataSource.fetchJurisdictions(
      this.sort.active,
      this.sort.direction,
      this.filterValue,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
  public redirectToDetails = (id: string) => {
    let url: string = `/jurisdiction/details/${id}`;
    this.router.navigate([url]);
  }
  public redirectToUpdate = (id: string) => {
    let url: string = `/jurisdiction/edit/${id}`;
    this.router.navigate([url]);
  }

  public delete = (id: string) => {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    })

    //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.jurisdictionService.delete(id).subscribe({
          next: () => {
            this.paginator.pageIndex = 0;
            this.BindJurisdictions();
          },
          error: error => {
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
          }
        });
      }
    });

  }

}
