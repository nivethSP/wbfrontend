import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TankService } from 'src/app/_services/tank.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { TankMetaData } from 'src/app/_model/presentation/TankMetaData';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults } from 'ol/control';
import { fromLonLat, transform } from 'ol/proj';
import Tile from 'ol/layer/Tile';
import MultiPoint from 'ol/geom/MultiPoint';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from 'ol/style';
import { Point, Polygon } from 'ol/geom';
import Feature from 'ol/Feature';
import Vector from 'ol/source/Vector';
import VectorImageLayer from 'ol/layer/VectorImage';
import * as L from 'leaflet';
import * as geojson from 'geojson';

@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css']
})
export class TankDetailComponent implements OnInit, AfterViewInit {
  public tankMetaData$: Observable<TankMetaData>;
  private map: L.Map;
  mapView: any;
  maduraiTile: any;
  latitude: any;
  longitude: any;
  geoJson: any;
  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private tankService: TankService,
    private location: Location) {
    let tankId: string = this.activeRoute.snapshot.params['id'];
    this.tankMetaData$ = this.tankService.getById(tankId);

  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.tankMetaData$.subscribe(tankMetaData => {
      this.longitude = tankMetaData.Longitude;
      this.latitude = tankMetaData.Latitude;
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
      this.addGeoJsonFeatures();
    });


  }
  public onCancel = () => {
    this.location.back();
  }

  // Creating a GeoJson from database
  public createGeoJson() {
    this.geoJson['type'] = "FeatureCollection"
    var features = []
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
      pointToLayer: (point,latlon)=> {
        return L.marker(latlon, {icon: icon})
      }
    });
    // marker.bindPopup("Parceque TOULON !");
    marker.addTo(this.map);
  }

  addGeoJsonFeatures() {
    var arr1 = [77.91928768157959, 9.679043406684146];
    var arr2 = [77.91922330856322, 9.678789579914623];
    var arr3 = [77.91928768157959, 9.678472296183033];
    var arr4 = [77.91939496994019, 9.679043406684146];
    var arr5 = [77.91928768157959,  9.678197316706585];
    var arr6 = [77.91948080062866, 9.67802809845539];
    var arr7 = [77.91971683502197, 9.677774270918768];
    var arr8 = [77.92014598846436, 9.677499290871017];
    var arr9 = [77.92115449905396, 9.677330072268244];
    var arr10 = [77.92203426361084, 9.677435833904969];

    var arr11 = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10]
   
    var geoJsonFeatures: geojson.FeatureCollection = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [            
              arr11
            ]
          }
        }
      ]
    };
    console.log(geoJsonFeatures)
    L.geoJSON(geoJsonFeatures).addTo(this.map);
  }


}
