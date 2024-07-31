import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { FieldReviewerResponse } from "src/app/_model/presentation/FieldReviewerResponse";
import { WaterbodyfieldreviewerresponseService } from "src/app/_services/waterbodyfieldreviewerresponse.service";

import { handleError } from "src/app/_utils/errorhandler";

export class ApprovedFieldReviewerResponseDataSource implements DataSource<FieldReviewerResponse>
{
    private ResourcesSubject = new BehaviorSubject<FieldReviewerResponse[]>([]);
    private ResourcesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.ResourcesCountSubject.asObservable();

    constructor(private waterbodyfieldreviewerresponseS: WaterbodyfieldreviewerresponseService) { }

    connect(collectionViewer: CollectionViewer): Observable<FieldReviewerResponse[]> {
        return this.ResourcesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ResourcesSubject.complete();
        this.loadingSubject.complete();
        this.ResourcesCountSubject.complete();
    }

    fetchApprovedFieldReviewerResponses(waterbodyId: string, jurisdiction: string, name: string, ward: string,
        district: string, taluk: string, block: string,
        village: string, sortField: string, sortOrder: string, filterValue: string,
        pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.waterbodyfieldreviewerresponseS.getApprovedFieldReviewerResponses(
            waterbodyId, jurisdiction, name, ward, district, taluk, block, village,
            sortField, sortOrder, filterValue, pageIndex, pageSize).pipe(
                catchError(handleError<any>('fetchApprovedFieldReviewerResponses', null)),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((resourceviewModel => {
                console.log(resourceviewModel.results)
                this.ResourcesSubject.next(resourceviewModel.results)
                this.ResourcesCountSubject.next(resourceviewModel.count)
            })
            );
    }
}