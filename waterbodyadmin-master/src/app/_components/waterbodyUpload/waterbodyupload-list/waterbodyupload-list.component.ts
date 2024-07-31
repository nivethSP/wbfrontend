import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { map, merge, Observable, startWith, tap } from 'rxjs';
import { Resource } from 'src/app/_model/Resource';
import { BlockService } from 'src/app/_services/block.service';
import { DistrictService } from 'src/app/_services/district.service';
import { PanchayatService } from 'src/app/_services/panchayat.service';
import { TalukService } from 'src/app/_services/taluk.service';
import { WaterbodyFileUploadService } from 'src/app/_services/waterbodyfileupload.service';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { WaterBodyFileUploadDataSource } from './waterbodyupload-datasource';

@Component({
  selector: 'app-waterbodyupload-list',
  templateUrl: './waterbodyupload-list.component.html',
  styleUrls: ['./waterbodyupload-list.component.css']
})
export class WaterbodyuploadListComponent implements OnInit {
  districts: Resource[];

  districtfilteredOptions: Observable<Resource[]>;

  talukfilteredOptions: Observable<Resource[]>;

  blockfilteredOptions: Observable<Resource[]>;

  villagefilteredOptions: Observable<Resource[]>;

  taluks: Resource[] = [];
  blocks: Resource[];
  panchayats: Resource[];
  dataSource: WaterBodyFileUploadDataSource;
  district: string;
  taluk: string;
  block: string;
  village: string;
  displayedColumns = ["district","taluk","block","village","waterbodytypename",
  "waterbodyId","waterbodyName","filename","detail", "delete"];
  dataLength: number
  private dialogConfig: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  private filterValue: string = '';

  myControl = new FormControl();

  talukControl = new FormControl();

  blockControl = new FormControl();

  villageControl = new FormControl();

  constructor(private waterbodyFileUploadService: WaterbodyFileUploadService,
    private router: Router,
    private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private districtS: DistrictService,
    private talukS: TalukService,
    private blockS: BlockService,
    private panchayatS: PanchayatService,) {
      this.LoadMasterData();
      this.district = 'All'
      this.taluk = 'All'
      this.block = 'All'
      this.village = 'All'
     }

  ngOnInit(): void {
    this.dataSource = new WaterBodyFileUploadDataSource(this.waterbodyFileUploadService);
    this.dataSource.fetchWaterBodies(this.district,
      this.taluk,
      this.block,
      this.village,'waterbodyName', 'asc', '');
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
        tap(() => this.BindWaterBodies())
      )
      .subscribe();
  }
  private _districtfilter(name: string): Resource[] {
    const filterValue = name.toLowerCase();

    return this.districts.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  private _blockfilter(name: string): Resource[] {
    const filterValue = name.toLowerCase();

    return this.blocks.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  private _villagefilter(name: string): Resource[] {
    const filterValue = name.toLowerCase();

    return this.panchayats.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  private _talukfilter(name: string): Resource[] {
    const filterValue = name.toLowerCase();

    return this.taluks.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  displayname(resource: Resource): string {
    return resource && resource.name ? resource.name : '';
  }
  ondistrictSelectionChanged(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value.id);
    this.district = event.option.value.id;
    this.blockS.getDictionaryByDistrict(this.district)
      .subscribe(results => {
        this.blocks = results
        this.addDefault(this.blocks)
        this.blockfilteredOptions = this.blockControl.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.name)),
          //map(name => (name ? this._blockfilter(name) : this.blocks.slice())),

          map(name => {
            if (name)
              return this._blockfilter(name)
            else {
              this.block = 'All'
              console.log(this.block);
              return this.blocks.slice()
            }
          }),
        );
      });
    this.talukS.getDictionaryByDistrict(this.district)
      .subscribe(results => {
        this.taluks = results
        this.addDefault(this.taluks)

        this.talukfilteredOptions = this.talukControl.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.name)),
          //map(name => (name ? this._talukfilter(name) : this.taluks.slice())),
          map(name => {
            if (name)
              return this._talukfilter(name)
            else {
              this.taluk = 'All'
              console.log(this.taluk);
              return this.taluks.slice()
            }
          }),
        );
      });
  }
  ontalukSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.taluk = event.option.value.id
  }
  onblockSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.block = event.option.value.id
    this.panchayatS.getDictionaryByBlock(this.block)
      .subscribe(results => {
        this.panchayats = results;
        this.addDefault(this.panchayats);
        this.villagefilteredOptions = this.villageControl.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.name)),
          //map(name => (name ? this._villagefilter(name) : this.panchayats.slice())),
          map(name => {
            if (name)
              return this._villagefilter(name)
            else {
              this.village = 'All'
              console.log(this.village);
              return this.panchayats.slice()
            }
          }),
        );
      });
  }
  onvillageSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.village = event.option.value.id
  }
  private addDefault(resources: Resource[])
  {
    let defaultAll = new Resource();
    defaultAll.name = "All";
    defaultAll.id = "All";
    resources.splice(0,0, defaultAll);
  }
  private LoadMasterData() {
    this.districtS.getDictionary()
      .subscribe(results => {
        this.districts = results
        this.addDefault(this.districts)
        this.districtfilteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.name)),
          //map(name => (name ? this._districtfilter(name) : this.districts.slice())),
          map(name => {
            if (name)
              return this._districtfilter(name)
            else {
              this.district = 'All'
              console.log(this.district);
              return this.districts.slice()
            }
          }),
        );
      });
  }
  ontalukchange(value: string) {
    this.taluk = value
  }
  onvillagechange(value: string) {
    this.village = value
  }
  onblockchange(value: string) {
    this.block = value
    this.panchayatS.getDictionaryByBlock(value)
      .subscribe(results => {
        this.panchayats = results
      });
  }
  BindWaterBodies() {
    console.log(this.filterValue);
    this.dataSource.fetchWaterBodies(
      this.district,
      this.taluk,
      this.block,
      this.village,
      this.sort.active,
      this.sort.direction,
      this.filterValue,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
  public filter()
  {
      console.log(this.district);
      console.log(this.taluk);
      console.log(this.block);
      console.log(this.village);

      this.BindWaterBodies()
  }
  public redirectToDetails = (id: string) => {
    let url: string = `/waterbodyupload/detail/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/waterbodyupload/edit/${id}`;
    this.router.navigate([url]);
  }
  public redirectToDetail = (id: string) => {
    let url: string = `/waterbodyupload/detail/${id}`;
    this.router.navigate([url]);
  }


  public delete = (id: number) => {
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
        this.waterbodyFileUploadService.deleteWaterBodyInfo(id).subscribe({
          next: () => {
            this.paginator.pageIndex = 0;
            this.BindWaterBodies();
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
