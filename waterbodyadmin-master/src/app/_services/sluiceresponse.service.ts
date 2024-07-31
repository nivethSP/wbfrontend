import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WaterBodySluiceDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class SluiceresponseService {

  constructor(private http: HttpClient) { }
  createSluiceDetailResponse(detail: WaterBodySluiceDetail) : Observable<WaterBodySluiceDetail> {
    return this.http.post<WaterBodySluiceDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodysluiceresponse/`, detail);
  }
  updateSluiceResponse(id: string, detail: WaterBodySluiceDetail) : Observable<WaterBodySluiceDetail> {
    console.log(detail)
    return this.http.patch<WaterBodySluiceDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodysluiceresponse/${id}/`, detail);
  }
}
