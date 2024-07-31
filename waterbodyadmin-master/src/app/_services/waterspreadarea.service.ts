import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WaterSpreadAreaDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class WaterspreadareaService {

  constructor(private http: HttpClient) { }
  createWaterSpreadAreaResponse(detail: WaterSpreadAreaDetail) : Observable<WaterSpreadAreaDetail> {
    return this.http.post<WaterSpreadAreaDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyspreadresponse/`, detail);
  }
  updateWaterSpreadAreaResponse(id: string, detail: WaterSpreadAreaDetail) : Observable<WaterSpreadAreaDetail> {
    console.log(detail)
    return this.http.patch<WaterSpreadAreaDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyspreadresponse/${id}/`, detail);
  }
}
