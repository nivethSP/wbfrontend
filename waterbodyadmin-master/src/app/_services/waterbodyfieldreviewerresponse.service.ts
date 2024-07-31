import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WaterBody } from '../_model/FieldReviewerSurveyResponse';
import { VerifyResponse } from '../_model/presentation/VerifyResponse'
import { ConnectionTypeMap, FieldReviewerResponse, FieldReviewerResponseDetail, WaterParamsDictionary } from '../_model/presentation/FieldReviewerResponse';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class WaterbodyfieldreviewerresponseService {

  constructor(private http: HttpClient) { }

  getApprovedFieldReviewerResponses(waterbodyId: string, jurisdiction: string, name: string, ward: string,
    district: string, taluk: string, block: string,
    village: string, sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<FieldReviewerResponse> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', pageSize.toString())
      .set('search', filterValue.toString())
      .set('ordering', sortField.toString());
    console.log(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/getApprovedWaterBodies/${waterbodyId}/${jurisdiction}/${name}/${ward}/${district}/${taluk}/${block}/${village}?limit=${pageSize}&offset=${offset}&ordering=${sortField}`)
    return this.http.get<FieldReviewerResponse>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/getApprovedWaterBodies/${waterbodyId}/${jurisdiction}/${name}/${ward}/${district}/${taluk}/${block}/${village}?limit=${pageSize}&offset=${offset}&ordering=${sortField}`).pipe(
      catchError(handleError<FieldReviewerResponse>('getApprovedFieldReviewerResponses'))
    );
  }

  getFieldReviewerResponses(waterbodyId: string, jurisdiction: string, name: string, ward: string,
    district: string, taluk: string, block: string,
    village: string, sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<FieldReviewerResponse> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', pageSize.toString())
      .set('search', filterValue.toString())
      .set('ordering', sortField.toString());
    console.log(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/getWaterBodySearch/${waterbodyId}/${jurisdiction}/${name}/${ward}/${district}/${taluk}/${block}/${village}?limit=${pageSize}&offset=${offset}&ordering=${sortField}`)
    return this.http.get<FieldReviewerResponse>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/getWaterBodySearch/${waterbodyId}/${jurisdiction}/${name}/${ward}/${district}/${taluk}/${block}/${village}?limit=${pageSize}&offset=${offset}&ordering=${sortField}`).pipe(
      catchError(handleError<FieldReviewerResponse>('getFieldReviewerResponses'))
    );
  }
  getById(id: string): Observable<WaterBody> {
    console.log(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/${id}`);
    return this.http.get<WaterBody>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/${id}`).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }
  getWaterBodyDetail(id: string): Observable<WaterBody> {
    return this.http.get<WaterBody>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/getWaterBodyDetail/${id}`).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }
  getParamsById(id: string): Observable<ConnectionTypeMap> {
    return this.http.get<ConnectionTypeMap>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/getWaterBodyParamsDetail/${id}`).pipe(
      tap(response => {
        console.log("We got response from dictionary")
        console.log(response)
      })
    );
  }
  deleteReviewerResponse(id?: number) {
    return this.http.delete<FieldReviewerResponse>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/${id}/`);
  }
  updateVerifyResponseStatus(id: string, response: VerifyResponse) {
    return this.http.patch<FieldReviewerResponse>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFieldReviewerResponse/${id}/`, response);
  }
}
