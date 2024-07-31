import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TankService } from 'src/app/_services/tank.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import Tile from 'ol/layer/Tile';
import { FileMetaData } from 'src/app/_model/presentation/FileMetaData';
import { WaterbodyFileUploadService } from 'src/app/_services/waterbodyfileupload.service';
import { Point } from 'ol/geom';
import Feature from 'ol/Feature';
import { Icon, Style } from 'ol/style';
import Vector from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import * as L from 'leaflet';
import * as geojson from 'geojson';

@Component({
  selector: 'app-waterbodyupload-detail',
  templateUrl: './waterbodyupload-detail.component.html',
  styleUrls: ['./waterbodyupload-detail.component.css']
})
export class WaterbodyuploadDetailComponent implements OnInit {

  public fileMetaData$: Observable<FileMetaData>;
  map: any
  mapView: any;
  maduraiTile: any;
  latitude: any;
  longitude: any;
  constructor(private router: Router, private activeRoute: ActivatedRoute, 
    private fileUploadService: WaterbodyFileUploadService,
    private location: Location) {
    let tankId: string = this.activeRoute.snapshot.params['id'];
    this.fileMetaData$ = this.fileUploadService.getById(tankId);

  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.fileMetaData$.subscribe(fileMetaData => {
      this.longitude = fileMetaData.Longitude;
      this.latitude = fileMetaData.Latitude;
      console.log(this.longitude);
      console.log(this.latitude);
      this.initMap();
    //   var markerGeometry = new Point(pos);
    //   var markerFeature = new Feature({
    //     geometry: markerGeometry
    //   });
    //   var markerStyle = new Icon(({
    //     color: "#8959A8",
    //     crossOrigin: "anonymous",
    //     src: 'assets/images/openlayerMarker.png'
    //   }));
    //   markerFeature.setStyle(new Style({
    //     image: markerStyle,
    //   }));
    //   var vectorSource = new Vector({
    //     features: [markerFeature]
    //   });
    //   var markerLayer = new VectorLayer({
    //     visible: true,
    //     source: vectorSource
    //   });
    //   this.map = new Map({
    //     target: 'map',
    //     layers: [
    //       new Tile({
    //         source: new OSM()
    //       }),
    //       markerLayer
    //     ],
    //     view: new View({
    //       center: pos,
    //       zoom: 15
    //     })
    //   });
    });

  }
  private initMap() {
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
  public onCancel = () => {
    this.location.back();
  }

}
