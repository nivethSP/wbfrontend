import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Source1SupplyDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class Source1supplyService {

  constructor(private http: HttpClient) { }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterbodysupplysource1response';
  }

  createSource1SupplyResponse(detail: Source1SupplyDetail) : Observable<Source1SupplyDetail> {
    return this.http.post<Source1SupplyDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodysupplysource1response/`, detail);
  }
  updateSource1SupplyResponse(id: string, detail: Source1SupplyDetail) : Observable<Source1SupplyDetail> {
    console.log(detail)
    return this.http.patch<Source1SupplyDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodysupplysource1response/${id}/`, detail);
  }
}
