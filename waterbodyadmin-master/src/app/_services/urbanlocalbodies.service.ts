import { Ward } from './../_model/Resource';
import { NResource, Resource } from 'src/app/_model/Resource';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urbanlocalbody } from '../_model/Urbanlocalbody';
import { ResourceService } from './resource.service';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { handleError } from '../_utils/errorhandler';
@Injectable({
  providedIn: 'root'
})
export class UrbanlocalbodiesService extends ResourceService<Urbanlocalbody> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterBodyUrbanLocalBodies';
  }

  getUrbanLocalBodyByType(typeCode: string): Observable<NResource[]> {
    console.log(`${environment.apiUrl + this.getResourceUrl()}/AllUrbanLocalBodyByType/?typeCode=${typeCode}`)
    return this.httpClient.get<NResource[]>(`${environment.apiUrl + this.getResourceUrl()}/AllUrbanLocalBodyByType/?typeCode=${typeCode}`)
      .pipe(
        catchError(handleError<NResource[]>('getUrbanLocalBodyByType'))
      );
  }
  getWardsByName(name: string): Observable<Ward[]> {
    console.log(`${environment.apiUrl + this.getResourceUrl()}/AllWardsByName/?name=${name}`)
    return this.httpClient.get<Ward[]>(`${environment.apiUrl + this.getResourceUrl()}/AllWardsByName/?name=${name}`)
      .pipe(
        catchError(handleError<Ward[]>('getWardsByName'))
      );
  }
}
