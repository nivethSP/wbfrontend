import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HydrologicDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class HydrologicalresponseService {

  constructor(private http: HttpClient) { }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterbodysurveyresponse';
  }

  createHydrologicalResponse(detail: HydrologicDetail) : Observable<HydrologicDetail> {
    return this.http.post<HydrologicDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyhydrologicresponse/`, detail);
  }
  updateHydrologicalResponse(id: string, detail: HydrologicDetail) : Observable<HydrologicDetail> {
    console.log(detail)
    return this.http.patch<HydrologicDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyhydrologicresponse/${id}/`, detail);
  }
}
