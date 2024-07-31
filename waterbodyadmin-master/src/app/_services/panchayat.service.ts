import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Panchayat } from '../_model/Panchayat';
import { ResourceService } from './resource.service';
import { handleError } from '../_utils/errorhandler';
@Injectable({
  providedIn: 'root'
})
export class PanchayatService extends ResourceService<Panchayat> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/panchayats';
  }

  getDictionaryByBlock(blockId:string): Observable<Panchayat[]> {
    console.log(`${environment.apiUrl + this.getResourceUrl()}/AllPanchayatsByBlockId/?blockId=${blockId}`)
    return this.httpClient.get<Panchayat[]>(`${environment.apiUrl + this.getResourceUrl()}/AllPanchayatsByBlockId/?blockId=${blockId}`)
      .pipe(
        catchError(handleError<Panchayat[]>('getDictionaryByBlock'))
      );
  }
}
