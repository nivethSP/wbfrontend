import { UrbanlocalbodiesService } from './../../_services/urbanlocalbodies.service';
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { handleError } from "src/app/_utils/errorhandler";
import { Urbanlocalbody } from 'src/app/_model/Urbanlocalbody';

export class UrbanlocalbodyDataSource implements DataSource<Urbanlocalbody>
{
    private UrbanlocalbodiesSubject = new BehaviorSubject<Urbanlocalbody[]>([]);
    private UrbanlocalbodiesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.UrbanlocalbodiesCountSubject.asObservable();

    constructor(private urbanlocalbodiesService: UrbanlocalbodiesService) { }

    connect(collectionViewer: CollectionViewer): Observable<Urbanlocalbody[]> {
        return this.UrbanlocalbodiesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.UrbanlocalbodiesSubject.complete();
        this.loadingSubject.complete();
        this.UrbanlocalbodiesCountSubject.complete();
    }

    fetchUrbanlocalbodies(sortField: string, sortOrder: string, filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.urbanlocalbodiesService.getList(
            sortField, sortOrder, filterValue, pageIndex, pageSize).pipe(
                catchError(handleError<any>('fetchUrbanlocalbodies', null)),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((urbanlocalbodiesviewModel => {
                this.UrbanlocalbodiesSubject.next(urbanlocalbodiesviewModel.results)
                this.UrbanlocalbodiesCountSubject.next(urbanlocalbodiesviewModel.count)
            })
            );
    }
}