import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Taluk } from '../_model/Taluk';
import { ResourceService } from './resource.service';
import { handleError } from '../_utils/errorhandler';
@Injectable({
  providedIn: 'root'
})
export class TalukService extends ResourceService<Taluk> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/taluks';
  }
  getDictionaryByDistrict(districtId:string): Observable<Taluk[]> {
    console.log(`${environment.apiUrl + this.getResourceUrl()}/AllTaluksByDistrictId/?districtId=${districtId}`)
    return this.httpClient.get<Taluk[]>(`${environment.apiUrl + this.getResourceUrl()}/AllTaluksByDistrictId/?districtId=${districtId}`)
      .pipe(
        catchError(handleError<Taluk[]>('getDictionaryByDistrict'))
      );
  }
}
