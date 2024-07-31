import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileMetaData } from '../_model/presentation/FileMetaData';
import { PresentationWaterBodyFileUpload, WaterBodyFileUpload } from '../_model/WaterBodyFileUpload';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class WaterbodyFileUploadService {

  constructor(private http: HttpClient) { }

  getWaterBodyUploads(district: string, taluk:string, block: string, 
    village: string, sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<PresentationWaterBodyFileUpload> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    console.log(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/getWaterBodySearch/${district}/${taluk}/${block}/${village}?limit=${pageSize}&offset=${offset}&ordering=${sortField}`);

    return this.http.get<PresentationWaterBodyFileUpload>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/getWaterBodySearch/${district}/${taluk}/${block}/${village}?limit=${pageSize}&offset=${offset}&ordering=${sortField}`).pipe(
      catchError(handleError<PresentationWaterBodyFileUpload>('getWaterBodyUploads'))
    );
  }

  getById(tankId: string): Observable<FileMetaData> {
    console.log(`${environment.apiUrl}/waterBodyAdmin/fileMetaData/getFileMetaData/${tankId}`);
    return this.http.get<FileMetaData>(`${environment.apiUrl}/waterBodyAdmin/fileMetaData/getFileMetaData/${tankId}`).pipe(
      tap(response => 
        {
            console.log(response)
        })
    );
  }
  getByWaterBodyId(waterBodyId: string): Observable<FileMetaData> {
    console.log(`${environment.apiUrl}/waterBodyAdmin/fileMetaData/getFileMetaDataByWaterBodyId/${waterBodyId}`);
    return this.http.get<FileMetaData>(`${environment.apiUrl}/waterBodyAdmin/fileMetaData/getFileMetaDataByWaterBodyId/${waterBodyId}`).pipe(
      tap(response => 
        {
            console.log(response)
        })
    );
  }
  IsWaterBodyIdExists(waterBodyId: string): Observable<Boolean> {
    console.log(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/IsWaterBodyIdExists/${waterBodyId}`);
    return this.http.get<boolean>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/IsWaterBodyIdExists/${waterBodyId}`).pipe(
      tap(response => 
        {
            console.log(response)
        })
    );
  }
  createWaterBodyInfo(file: any, fileUploadInfo: WaterBodyFileUpload) : Observable<WaterBodyFileUpload> {
    const formData = new FormData();
    formData.append("image",file);
    formData.append("filename", fileUploadInfo.filename);
    formData.append("village", fileUploadInfo.village);
    formData.append("block", fileUploadInfo.block);
    formData.append("taluk", fileUploadInfo.taluk);
    formData.append("district", fileUploadInfo.district);
    formData.append("waterbodytype", fileUploadInfo.waterbodytype);
    formData.append("waterbodyId", fileUploadInfo.waterbodyId);
    formData.append("waterbodyName", fileUploadInfo.waterbodyName);
    formData.append("filename", fileUploadInfo.filename);
    formData.append("createdBy", fileUploadInfo.createdBy);
    return this.http.post<WaterBodyFileUpload>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/`, formData);
  }

  processFileMetaData(id?: number) {
    return this.http.get<WaterBodyFileUpload>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/ProcessFileMetaData/${id}/`);
  }

  deleteWaterBodyInfo(id?: number) {
    return this.http.delete<WaterBodyFileUpload>(`${environment.apiUrl}/waterBodyAdmin/waterBodyFileUpload/${id}/`);
  }

}
