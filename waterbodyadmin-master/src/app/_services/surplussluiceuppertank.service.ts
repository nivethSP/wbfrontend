import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SurplusSluiceDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class SurplussluiceUppertankService {

  constructor(private http: HttpClient) { }
  createSurplusSluiceResponse(detail: SurplusSluiceDetail) : Observable<SurplusSluiceDetail> {
    return this.http.post<SurplusSluiceDetail>(`${environment.apiUrl}/waterBodyAdmin/waterBodysurplussluiceUppertankresponse/`, detail);
  }
  updateSurplusSluiceResponse(id: string, detail: SurplusSluiceDetail) : Observable<SurplusSluiceDetail> {
    console.log(detail)
    return this.http.patch<SurplusSluiceDetail>(`${environment.apiUrl}/waterBodyAdmin/waterBodysurplussluiceUppertankresponse/${id}/`, detail);
  }
}
