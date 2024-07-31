import { UrbanlocalbodiesService } from './../../../_services/urbanlocalbodies.service';
import { JurisdictionService } from './../../../_services/jurisdiction.service';
import { Jurisdiction } from 'src/app/_model/Jurisdiction';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { merge, tap } from 'rxjs';
import { NResource, Resource, Ward } from 'src/app/_model/Resource';
import { BlockService } from 'src/app/_services/block.service';
import { DistrictService } from 'src/app/_services/district.service';
import { PanchayatService } from 'src/app/_services/panchayat.service';
import { TalukService } from 'src/app/_services/taluk.service';
import { WaterbodyfieldreviewerresponseService } from 'src/app/_services/waterbodyfieldreviewerresponse.service';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { FieldReviewerResponseDataSource } from './fieldReviewerResponse-datasource';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {
  // Data arrays for filtering
  districts: Resource[];
  taluks: Resource[];
  blocks: Resource[];
  panchayats: Resource[];

  jurisdictions: Jurisdiction[];

  urbanlocaBodies: NResource[];

  wards: Ward[];
  dataSource: FieldReviewerResponseDataSource;
  district: string;
  taluk: string;
  block: string;
  village: string;

  ward: string;

  jurisdiction: string;

  name: string;

  waterbodyId: string;

  // Updated displayed columns excluding removed columns
  displayedColumns = [
    "waterbodyId",
    "waterbodyType",
   
    "waterbodyName",
    "draft_status",
    "verify_status",
    "detail",
    "update",
    "delete"
  ];

  dataLength: number;
  private dialogConfig: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  private filterValue: string = '';

  constructor(
    private waterbodyfieldreviewerresponseS: WaterbodyfieldreviewerresponseService,
    private router: Router,
    private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private districtS: DistrictService,
    private talukS: TalukService,
    private blockS: BlockService,
    private panchayatS: PanchayatService,
    private jurisdictionS: JurisdictionService,
    private urbanlocalbodiesS: UrbanlocalbodiesService
  ) {
    this.LoadMasterData();
    this.district = 'All';
    this.taluk = 'All';
    this.block = 'All';
    this.village = 'All';
    this.jurisdiction = 'All';
    this.ward = 'All';
    this.name = 'All';
    this.waterbodyId = 'All';
  }

  ngOnInit(): void {
    this.dataSource = new FieldReviewerResponseDataSource(this.waterbodyfieldreviewerresponseS);
    this.dataSource.fetchFieldReviewerResponses(
      this.waterbodyId,
      this.jurisdiction,
      this.name,
      this.ward,
      this.district,
      this.taluk,
      this.block,
      this.village,
      'createdDate',
      'desc',
      ''
    );
    this.dataSource.count$.subscribe((length: number) => this.dataLength = length);
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: false,
      data: {}
    };
  }

  ngAfterViewInit() {
    // Reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.BindReviews())
      )
      .subscribe();
  }

  private LoadMasterData() {
    this.districtS.getDictionary().subscribe(results => {
      this.districts = results;
    });
    this.jurisdictionS.getDictionary().subscribe(results => {
      this.jurisdictions = results;
    });
  }

  ondistrictchange(value: string) {
    this.district = value;
    this.blockS.getDictionaryByDistrict(value).subscribe(results => {
      this.blocks = results;
    });
    this.talukS.getDictionaryByDistrict(value).subscribe(results => {
      this.taluks = results;
    });
  }

  ontalukchange(value: string) {
    this.taluk = value;
  }

  onvillagechange(value: string) {
    this.village = value;
  }

  onwardchange(value: string) {
    this.ward = value;
  }

  onnamechange(value: string) {
    this.name = value;
    this.urbanlocalbodiesS.getWardsByName(value).subscribe(results => {
      this.wards = results;
      console.log(this.wards);
    });
  }

  onJurisdiction(value: string) {
    this.jurisdiction = value;
    this.urbanlocalbodiesS.getUrbanLocalBodyByType(value).subscribe(results => {
      this.urbanlocaBodies = results;
      this.wards = [];
    });
  }

  onblockchange(value: string) {
    this.block = value;
    this.panchayatS.getDictionaryByBlock(value).subscribe(results => {
      this.panchayats = results;
    });
  }

  applyFilter(event: any) {
    this.waterbodyId = event.target.value ? event.target.value : 'All';
    console.log(this.waterbodyId);
  }

  BindReviews() {
    console.log(this.filterValue);
    this.dataSource.fetchFieldReviewerResponses(
      this.waterbodyId,
      this.jurisdiction,
      this.name,
      this.ward,
      this.district,
      this.taluk,
      this.block,
      this.village,
      'createdBy',
      'desc',
      this.filterValue,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  public filter() {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.BindReviews();
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/review/detail/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/review/edit/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDetail = (id: string) => {
    let url: string = `/review/detail/${id}`;
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
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.waterbodyfieldreviewerresponseS.deleteReviewerResponse(id).subscribe({
          next: () => {
            this.paginator.pageIndex = 0;
            this.BindReviews();
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
