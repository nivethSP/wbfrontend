import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { SharedModule } from 'src/app/_shared/shared.module';
import { routes } from './fieldReviewer-routing/fieldReviewer-routing.module'
import { ResponseListComponent } from './response-list/response-list.component';
import { ResponseCreateComponent } from './response-create/response-create.component';
import { ResponseDetailComponent } from './response-detail/response-detail.component';
import { TankComponent } from './Response/tank/tank.component';
import { OoraniComponent } from './Response/oorani/oorani.component';
import { PondComponent } from './Response/pond/pond.component';
import { TempletankComponent } from './Response/templetank/templetank.component';
import { FreecatchmentComponent } from './Response/sources/freecatchment/freecatchment.component';
import { RiverstreamComponent } from './Response/sources/riverstream/riverstream.component';
import { SurplusfromuppertankComponent } from './Response/sources/surplusfromuppertank/surplusfromuppertank.component';
import { SupplyfromuppertanksluiceComponent } from './Response/sources/supplyfromuppertanksluice/supplyfromuppertanksluice.component';
import { BundComponent } from './Response/bund/bund/bund.component';
import { IrrigationcanalComponent } from './Response/sources/irrigationcanal/irrigationcanal/irrigationcanal.component';
import { SpringsComponent } from './Response/sources/springs/springs/springs.component';
import { SubsurfaceflowComponent } from './Response/sources/subsurfaceFlow/subsurfaceflow/subsurfaceflow.component';
import { SluiceComponent } from './Response/Parameters/sluice/sluice.component';
import { SluicedetailComponent } from './Response/Parameters/sluice/detail/sluicedetail/sluicedetail.component';
import { SurplusweirComponent } from './Response/Parameters/surplusweir/surplusweir/surplusweir.component';
import { SurplusweirdetailComponent } from './Response/Parameters/surplusweir/detail/surplusweirdetail/surplusweirdetail.component';
import { SurpluscoarseComponent } from './Response/Parameters/surpluscoarse/surpluscoarse/surpluscoarse.component';
import { SurpluscorasedetailComponent } from './Response/Parameters/surpluscoarse/detail/surpluscorasedetail/surpluscorasedetail.component';
import { RetainingwallComponent } from './Response/Parameters/retainingwall/retainingwall/retainingwall.component';
import { FunctionalComponent } from './Response/Parameters/functional/functional/functional.component';
import { IrrigationcommandareaComponent } from './Response/Parameters/functional/irrigationcommandarea/irrigationcommandarea/irrigationcommandarea.component';
import { FishingComponent } from './Response/Parameters/functional/fishing/fishing/fishing.component';
import { LotuscultivationComponent } from './Response/Parameters/functional/lotuscultivation/lotuscultivation/lotuscultivation.component';
import { WaterspreadareaComponent } from './Response/Parameters/functional/waterspreadarea/waterspreadarea/waterspreadarea.component';
import { DuckRearingComponent } from './Response/Parameters/functional/duckRearing/duck-rearing/duck-rearing.component';
import { BundtreeComponent } from './Response/Parameters/functional/bundTrees/bundtree/bundtree.component';
import { PotteryComponent } from './Response/Parameters/functional/pottery/pottery.component';
import { LivestockComponent } from './Response/Parameters/functional/livestock/livestock/livestock.component';
import { OthersComponent } from './Response/Parameters/functional/others/others/others.component';
import { UniquenessComponent } from './Response/Parameters/uniqueness/uniqueness/uniqueness.component';
import { LegalissueComponent } from './Response/legalissues/legalissue/legalissue.component';
import { PresenceofwuaComponent } from './Response/presenceOfWUA/presenceofwua/presenceofwua.component';
import { RenovationComponent } from './Response/renovation/renovation/renovation.component';
//import { GhattComponent } from './Response/ghatt/ghatt.component';
import { FutureactivityComponent } from './Response/futureactivites/futureactivity/futureactivity.component';
import { EmbankmentComponent } from './Response/embankment/embankment/embankment.component';
import { InletComponent } from './Response/Parameters/inlet/inlet/inlet.component';
import { InletdetailComponent } from './Response/Parameters/inlet/detail/inletdetail/inletdetail.component';
import { OutletComponent } from './Response/Parameters/outlet/outlet/outlet.component';
import { OutletdetailComponent } from './Response/Parameters/outlet/detail/outletdetail/outletdetail.component';
import { FencingComponent } from './Response/Parameters/fence/fencing/fencing.component';
import { EncroachmentComponent } from './Response/Parameters/encroachment/encroachment/encroachment.component';
import { ApprovedresponseListComponent } from './approvedresponse-list/approvedresponse-list/approvedresponse-list.component';
import { GhattComponent } from './Response/ghatt/ghatt.component';
import { TempleAuthFormComponent } from './temple-auth-form/temple-auth-form.component';
import { Form8GhatsComponent } from './Response/form8-ghats/form8-ghats.component';


@NgModule({
  declarations: [
    ResponseListComponent,
    ResponseCreateComponent,
    ResponseDetailComponent,
    TankComponent,
    OoraniComponent,
    PondComponent,
    TempletankComponent,
    FreecatchmentComponent,
    RiverstreamComponent,
    SurplusfromuppertankComponent,
    SupplyfromuppertanksluiceComponent,
    BundComponent,
    IrrigationcanalComponent,
    SpringsComponent,
    SubsurfaceflowComponent,
    SluiceComponent,
    SluicedetailComponent,
    SurplusweirComponent,
    SurplusweirdetailComponent,
    SurpluscoarseComponent,
    SurpluscorasedetailComponent,
    RetainingwallComponent,
    FunctionalComponent,
    IrrigationcommandareaComponent,
    FishingComponent,
    LotuscultivationComponent,
    WaterspreadareaComponent,
    DuckRearingComponent,
    BundtreeComponent,
    PotteryComponent,
    LivestockComponent,
    OthersComponent,
    UniquenessComponent,
    LegalissueComponent,
    PresenceofwuaComponent,
    RenovationComponent,
    FutureactivityComponent,
    EmbankmentComponent,
    InletComponent,
    InletdetailComponent,
    OutletComponent,
    OutletdetailComponent,
    FencingComponent,
    EncroachmentComponent,
    ApprovedresponseListComponent,
    GhattComponent,
    TempleAuthFormComponent,
    Form8GhatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    RouterModule.forChild(routes)
  ]
})
export class FieldReviewerModule { }
