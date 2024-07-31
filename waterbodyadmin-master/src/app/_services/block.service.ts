import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Block } from '../_model/Block';
import { Resource } from '../_model/Resource';
import { handleError } from '../_utils/errorhandler';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class BlockService extends ResourceService<Block> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/blocks';
  }
  getDictionaryByDistrict(districtId:string): Observable<Block[]> {
    console.log(`${environment.apiUrl + this.getResourceUrl()}/AllBlocksByDistrictId/?districtId=${districtId}`)
    return this.httpClient.get<Block[]>(`${environment.apiUrl + this.getResourceUrl()}/AllBlocksByDistrictId/?districtId=${districtId}`)
      .pipe(
        catchError(handleError<Block[]>('getDictionaryByDistrict'))
      );
  }
}
