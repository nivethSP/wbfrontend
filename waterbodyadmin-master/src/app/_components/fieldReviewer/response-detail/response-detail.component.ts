import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WaterbodyfieldreviewerresponseService } from 'src/app/_services/waterbodyfieldreviewerresponse.service';
import { Location } from '@angular/common';
import { bundDetail, embankmentDetails, encroachmentDetails, fenceParameter, freeCatchment, functionalParameters, futureActivities, ghatDetail, GpsCordinates, inletParameter, irrigationCanal, legalParameters, NoWaterBody, outletParameter, presenceOfWUA, renovationDetails, retainingWallParameters, riverStream, sluiceParamteres, sourceParameters, spring, subsurfaceFlow, surplsFromUpperTank, surplusCoarseParameters, surplusWeirParameters, uniquenessParameters, upperTankSluice, WaterBody, WaterBodyParameter } from 'src/app/_model/FieldReviewerSurveyResponse';
import { MatAccordion } from '@angular/material/expansion';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import { WaterbodyFileUploadService } from 'src/app/_services/waterbodyfileupload.service';
import { SliderImage } from 'src/app/_model/presentation/sliderimage';
import { VerifyResponse } from 'src/app/_model/presentation/VerifyResponse';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Form8GhatsData } from '../Response/form8-ghats/form8-ghats.interface';
@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.css']
})
export class ResponseDetailComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  waterBodyid: string;
  imgCollection: SliderImage[] = [];
  waterParamsobject: any;
  private map: L.Map;
  mapView: any;
  maduraiTile: any;
  latitude: any;
  longitude: any;
  surveyResponse: WaterBody
  hydrologicalSources: any[] = [];
  gpsCorrdinates: GpsCordinates[]
  waterParams: WaterBodyParameter
  noWaterBody: NoWaterBody
  waterbodyNotAvailable: boolean
  freeCatchment: freeCatchment
  riverStream: riverStream
  surplsFromUpperTank: surplsFromUpperTank
  upperTankSluice: upperTankSluice
  irrigationCanal: irrigationCanal
  spring: spring;
  bundDetail: bundDetail
  embankmentDetail: embankmentDetails
  inletParameter: inletParameter
  outletParameter: outletParameter
  subsurfaceFlow: subsurfaceFlow
  sluiceParamter: sluiceParamteres
  surplusWeirParameter: surplusWeirParameters
  surplusCoarseParameter: surplusCoarseParameters
  retainingwallParameter: retainingWallParameters
  fencingParameter: fenceParameter
  functionalParameter: functionalParameters
  uniquenessParameter: uniquenessParameters
  legalIssueParameter: legalParameters
  ghatDetail:ghatDetail
  encroachmentDetail: encroachmentDetails
  presenceOfWUA: presenceOfWUA
  renovationDetail: renovationDetails
  form8GhatsData: Form8GhatsData
  futureActivity: futureActivities
  user: Session;
  private dialogConfig: any;
  waterSpreadAreaIssues: any[] = [];
  waterSpreadInvasiveSpecies: any[] = [];
  percentageOfSpread: string = '';
  
  presenceOfTempleAdmin: string; // Add this line
  nameOfTempleAdministration: string;
  personForIncharge: string;
  designation: string;
  contactNo: number;
  ghatsParametersSelected: string = '';
  ghatsParameter: string = '';
  needForGhats: string = '';
  ghatsCount: string = '';
  ghatsList: any[] = [];

  
  public tankMetaData$: Observable<WaterBody>;


 

  constructor(private waterbodyfieldreviewerresponseS: WaterbodyfieldreviewerresponseService,
    private waterbodyUploadS: WaterbodyFileUploadService,
    private authService: AuthenticationService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private router: Router,
    private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
    this.waterBodyid = this.activeRoute.snapshot.params['id'];
    this.tankMetaData$ = this.waterbodyfieldreviewerresponseS.getById(this.waterBodyid);
  }
  ngAfterViewInit(): void {
    this.tankMetaData$.subscribe(tankMetaData => {
      this.surveyResponse = tankMetaData
      console.log("Surver response data")
      console.log(this.surveyResponse.verify_status);
      this.waterParams = JSON.parse(tankMetaData.waterParams)
      console.log(this.waterParams)
      tankMetaData.images.forEach(image => {
        let newresource: SliderImage = {
          image: image.image,
          thumbImage: image.image,
          alt: image.description,
          title: image.description
        }
        this.imgCollection.push(newresource)
      });
      if (this.waterParams.existingStructure) {
        return;
      }
      console.log("Before hydrological parameters")
      if (this.waterParams.hydrologicParamaters) {
        console.log(this.waterParams.hydrologicParamaters)
        if (this.waterParams.hydrologicParamaters.sourcesOfSupply) {
          this.hydrologicalSources = JSON.parse(this.waterParams.hydrologicParamaters.sourcesOfSupply)
        }
        if (this.waterParams.hydrologicParamaters.sources) {
          this.freeCatchment = this.waterParams.hydrologicParamaters.sources.freeCatchment
          this.riverStream = this.waterParams.hydrologicParamaters.sources.riverStream
          this.surplsFromUpperTank = this.waterParams.hydrologicParamaters.sources.surplusFromUpperTank
          this.upperTankSluice = this.waterParams.hydrologicParamaters.sources.upperTankSluice
          this.irrigationCanal = this.waterParams.hydrologicParamaters.sources.irrigationCanal
          this.spring = this.waterParams.hydrologicParamaters.sources.springs
          this.subsurfaceFlow = this.waterParams.hydrologicParamaters.sources.subsurfaceFlow
        }
      }

      if (this.waterParams.waterSpreadAreaDetails) {
        if (this.waterParams.waterSpreadAreaDetails.issuesInWaterSpreadArea) {
          this.waterSpreadAreaIssues = JSON.parse(this.waterParams.waterSpreadAreaDetails.issuesInWaterSpreadArea);
        }
        if (this.waterParams.waterSpreadAreaDetails.invasiveSpecies) {
          this.waterSpreadInvasiveSpecies = JSON.parse(this.waterParams.waterSpreadAreaDetails.invasiveSpecies);
        }
        if (this.waterParams.waterSpreadAreaDetails.percentageOfSpread) {
          this.percentageOfSpread = this.waterParams.waterSpreadAreaDetails.percentageOfSpread;
        }
      }

      if (this.waterParams.ghatsParameterDetails) {
        if (this.waterParams.ghatsParameterDetails.ghatsParameter) {
          this.ghatsParameter = this.waterParams.ghatsParameterDetails.ghatsParameter;
        }
        if (this.waterParams.ghatsParameterDetails.needForGhats) {
          this.needForGhats = this.waterParams.ghatsParameterDetails.needForGhats;
        }
        if (this.waterParams.ghatsParameterDetails.ghatsCount) {
          this.ghatsCount = this.waterParams.ghatsParameterDetails.ghatsCount;
        }
        if (this.waterParams.ghatsParameterDetails.ghatsList) {
          this.ghatsList = JSON.parse(this.waterParams.ghatsParameterDetails.ghatsList);
        }
      }
      
      // Ensure these properties are properly populated
      console.log('Water Spread Area Issues:', this.waterSpreadAreaIssues);
      console.log('Water Spread Invasive Species:', this.waterSpreadInvasiveSpecies);
      console.log('Percentage of Spread:', this.percentageOfSpread);
    
      console.log('Ghat', this.needForGhats);

      if (this.waterParams.bundDetails)
        this.bundDetail = this.waterParams.bundDetails
      if (this.waterParams.sluiceParameters)
        this.sluiceParamter = this.waterParams.sluiceParameters
      if (this.waterParams.surplusWeirParameters)
        this.surplusWeirParameter = this.waterParams.surplusWeirParameters
      if (this.waterParams.surplusCoarseParameters)
        this.surplusCoarseParameter = this.waterParams.surplusCoarseParameters
      if (this.waterParams.retainingWallParameters)
        this.retainingwallParameter = this.waterParams.retainingWallParameters
      if (this.waterParams.functionalParameters)
        this.functionalParameter = this.waterParams.functionalParameters
      if (this.waterParams.uniquenessParameters)
        this.uniquenessParameter = this.waterParams.uniquenessParameters
      if (this.waterParams.legalParameters)
        this.legalIssueParameter = this.waterParams.legalParameters
      if (this.waterParams.presenceOfWUA)
        this.presenceOfWUA = this.waterParams.presenceOfWUA
      if (this.waterParams.renovationDetails)
        this.renovationDetail = this.waterParams.renovationDetails
      if (this.waterParams.futureActivities)
        this.futureActivity = this.waterParams.futureActivities
      if (this.waterParams.embankmentDetails) {
        console.log('Embankment details')
        this.embankmentDetail = this.waterParams.embankmentDetails
        console.log(this.embankmentDetail)
      }
      if (this.waterParams.inletParameters)
        this.inletParameter = this.waterParams.inletParameters
      if (this.waterParams.outletParameters)
        this.outletParameter = this.waterParams.outletParameters
      if (this.waterParams.fencingParameters)
        this.fencingParameter = this.waterParams.fencingParameters
      if (this.waterParams.encroachmentDetails){
        console.log('Encraoachmentdetail')
      
        this.encroachmentDetail = this.waterParams.encroachmentDetails
        console.log(this.encroachmentDetail)
      }


      if (tankMetaData.gpsCordinates) {
        this.gpsCorrdinates = JSON.parse(tankMetaData.gpsCordinates)
        console.log(this.gpsCorrdinates);
        if (this.gpsCorrdinates.length > 0) {
          console.log("GPS Cordinate Availble in Survey Response")
          this.longitude = this.gpsCorrdinates[0].long;
          this.latitude = this.gpsCorrdinates[0].lat;
          this.initMap(this.gpsCorrdinates);
        }
        else {
          console.log("GPS Cordinate not found in Survey Response")
          this.waterbodyUploadS.getByWaterBodyId(tankMetaData.waterbodyId)
            .subscribe(fileMetaData => {
              if (fileMetaData) {
                console.log("GPS Cordinate From Govt Waterbody Found")
                this.longitude = fileMetaData.Longitude;
                this.latitude = fileMetaData.Latitude;
                this.initMapWithoutCordinates();
              }
            });
        }
      }
      else {
        console.log("GPS Cordinate not found in Survey Response")
        this.waterbodyUploadS.getByWaterBodyId(tankMetaData.waterbodyId)
          .subscribe(fileMetaData => {
            if (fileMetaData) {
              console.log("GPS Cordinate From Govt Waterbody Found")
              this.longitude = fileMetaData.Longitude;
              this.latitude = fileMetaData.Latitude;
              this.initMapWithoutCordinates();
            }
          });
      }
      // if (tankMetaData.waterBodyAvailability) {
      //   console.log("Waterbody is available");
      //   this.waterbodyUploadS.getByWaterBodyId(tankMetaData.waterbodyId)
      //     .subscribe(fileMetaData => {
      //       this.longitude = fileMetaData.Longitude;
      //       this.latitude = fileMetaData.Latitude;
      //       console.log(this.longitude);
      //       console.log(this.latitude);
      //       if (this.isgpsCoordinatesCheck(tankMetaData.gpsCordinates)) {
      //         if (tankMetaData.gpsCordinates && tankMetaData.gpsCordinates.length > 0) {
      //           this.gpsCorrdinates = JSON.parse(tankMetaData.gpsCordinates)
      //           this.initMap(this.gpsCorrdinates);
      //         }
      //         else {
      //           console.log(this.longitude);
      //           console.log(this.latitude);
      //           this.initMapWithoutCordinates();
      //         }
      //       }
      //       else {
      //         console.log(this.longitude);
      //         console.log(this.latitude);
      //         this.initMapWithoutCordinates();
      //       }
      //     })
      // }
      // else {
      //   console.log("No Waterbody is available");
      //   if (this.isgpsCoordinatesCheck(tankMetaData.gpsCordinates)) {
      //     if (tankMetaData.gpsCordinates && tankMetaData.gpsCordinates.length > 0) {
      //       this.gpsCorrdinates = JSON.parse(tankMetaData.gpsCordinates)
      //       this.longitude = this.gpsCorrdinates[0].long;
      //       this.latitude = this.gpsCorrdinates[0].lat;
      //       this.initMap(this.gpsCorrdinates);
      //     }
      //   }

      // }
    });


  }
  form3IssueToEncroachers(arg0: string, form3IssueToEncroachers: any) {
    throw new Error('Method not implemented.');
  }
  isgpsCoordinatesCheck(gpsCoordinates?: string): boolean {
    if (gpsCoordinates != 'undefined' && gpsCoordinates) {
      return true;
    }
    return false;
  }
  private initMap(gpscoordinates: GpsCordinates[]) {
    this.map = L.map('map', {
      center: L.latLng(this.latitude, this.longitude),
      zoom: 11
    });

    var openStreetLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 18,
      attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> '
    });
    openStreetLayer.addTo(this.map);
    this.addGeoJSonMarker();
    this.addGeoJsonFeatures(gpscoordinates);
  }
  private initMapWithoutCordinates() {
    this.map = L.map('map', {
      center: L.latLng(this.latitude, this.longitude),
      zoom: 11
    });

    var openStreetLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 18,
      attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> '
    });
    openStreetLayer.addTo(this.map);
    this.addGeoJSonMarker();
  }
  ngOnInit(): void {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }
  addGeoJSonMarker() {
    var icon = L.icon({
      iconUrl: 'assets/leaf-red.png',
      shadowUrl: 'assets/leaf-shadow.png',
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var geojsonPoint: geojson.Point = {
      type: "Point",
      coordinates: [this.longitude, this.latitude],
    };
    var marker = L.geoJSON(geojsonPoint, {
      pointToLayer: (point, latlon) => {
        return L.marker(latlon, { icon: icon })
      }
    });
    // marker.bindPopup("Parceque TOULON !");
    marker.addTo(this.map);
  }

  addGeoJsonFeatures(gpscoordinates: GpsCordinates[]) {
    console.log("Inside add Geo Json Features")
    var polygonCordinates = []
    for (let i = 0; i < gpscoordinates.length; i++) {
      polygonCordinates.push([gpscoordinates[i].long, gpscoordinates[i].lat])
    }

    var geoJsonFeatures: geojson.FeatureCollection = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              polygonCordinates
            ]
          }
        }
      ]
    };
    console.log('geoJsonFeatures')
    console.log(geoJsonFeatures)
    L.geoJSON(geoJsonFeatures).addTo(this.map);
  }

  public onCancel = () => {
    this.location.back();
  }
  public updateSurveyResponse() {
    console.log("even firing")
    this.router.navigate((['/', 'questionresponse', 'edit', this.waterBodyid]))
  }
  public updateResponse() {
    let response: VerifyResponse = {
      verify_status: "1",
      lastModifiedBy: this.user.username
    }
    this.waterbodyfieldreviewerresponseS.updateVerifyResponseStatus(this.waterBodyid, response)
      .subscribe({
        next: () => {
          let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
          dialogRef.afterClosed()
            .subscribe(result => {
              this.location.back();
            });

        },
        error: error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
        }
      });
  }
}
