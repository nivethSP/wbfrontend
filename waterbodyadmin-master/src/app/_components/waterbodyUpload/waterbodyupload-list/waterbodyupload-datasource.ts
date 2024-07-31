import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { PresentationWaterBodyFileUpload, WaterBodyFileUpload } from "src/app/_model/WaterBodyFileUpload";
import { WaterbodyFileUploadService } from "src/app/_services/waterbodyfileupload.service";

import { handleError } from "src/app/_utils/errorhandler";

export class WaterBodyFileUploadDataSource implements DataSource<PresentationWaterBodyFileUpload>
{
    private ResourcesSubject = new BehaviorSubject<PresentationWaterBodyFileUpload[]>([]);
    private ResourcesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.ResourcesCountSubject.asObservable();

    constructor(private waterbodyFileUploadService: WaterbodyFileUploadService) { }

    connect(collectionViewer: CollectionViewer): Observable<PresentationWaterBodyFileUpload[]> {
        return this.ResourcesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ResourcesSubject.complete();
        this.loadingSubject.complete();
        this.ResourcesCountSubject.complete();
    }

    fetchWaterBodies(district: string, taluk: string, block: string,
        village: string, sortField: string, sortOrder: string, filterValue: string,
        pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);

        if (sortField == 'waterbodytypename')
            sortField = 'waterbodytype'
        this.waterbodyFileUploadService.getWaterBodyUploads(
            district, taluk, block, village,
            sortField, sortOrder, filterValue, pageIndex, pageSize).pipe(
                catchError(handleError<any>('fetchWaterBodies', null)),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((resourceviewModel => {
                this.ResourcesSubject.next(resourceviewModel.results)
                this.ResourcesCountSubject.next(resourceviewModel.count)
            })
            );
    }
}