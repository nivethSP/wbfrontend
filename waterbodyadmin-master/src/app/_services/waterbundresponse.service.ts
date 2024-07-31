import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WaterBundDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class WaterbundresponseService {

  constructor(private http: HttpClient) { }
  createWaterBundDetailResponse(detail: WaterBundDetail) : Observable<WaterBundDetail> {
    return this.http.post<WaterBundDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodybundresponse/`, detail);
  }
  updateWaterBundDetailResponse(id: string, detail: WaterBundDetail) : Observable<WaterBundDetail> {
    console.log(detail)
    return this.http.patch<WaterBundDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodybundresponse/${id}/`, detail);
  }
}
