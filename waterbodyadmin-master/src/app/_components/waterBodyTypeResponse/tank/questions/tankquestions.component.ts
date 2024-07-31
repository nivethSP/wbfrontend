import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs';
import { Resource } from 'src/app/_model/Resource';
import { BundFunctionality, BundIssue, BundStonePitching, FreeCatchmentDetail, HydrologicDetail, HydrologicPrioritySourceSupplyDetail, HydrologicSourceSupplyDetail, IrrigationCanalDetail, ParticularDetail, RiverStreamDetail, Source1Detail, Source1SupplyDetail, SpreadInvasiveSpecieIssue, SpreadIssue, StreamIssue, SurplusSluiceDetail, UpperTankSluiceDetail, WaterBodySluiceDetail, WaterBundDetail, WaterSpreadAreaDetail } from 'src/app/_model/ResponseEntity';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { BlockService } from 'src/app/_services/block.service';
import { FreecatchmentService } from 'src/app/_services/freecatchment.service';
import { HydrologicalresponseService } from 'src/app/_services/hydrologicalresponse.service';
import { IrrigationCanalService } from 'src/app/_services/irrigation-canal.service';
import { MonthService } from 'src/app/_services/month.service';
import { PanchayatService } from 'src/app/_services/panchayat.service';
import { RiverstreamService } from 'src/app/_services/riverstream.service';
import { SluiceresponseService } from 'src/app/_services/sluiceresponse.service';
import { Source1supplyService } from 'src/app/_services/source1supply.service';
import { SurplussluiceUppertankService } from 'src/app/_services/surplussluiceuppertank.service';
import { SurveyresponseService } from 'src/app/_services/surveyresponse.service';
import { TalukService } from 'src/app/_services/taluk.service';
import { UppertanksluiceService } from 'src/app/_services/uppertanksluice.service';
import { WaterBedNatureService } from 'src/app/_services/waterbednature.service';
import { WaterbodyavailabilityService } from 'src/app/_services/waterbodyavailability.service';
import { WaterbodybarrelTypeService } from 'src/app/_services/waterbodybarrel-type.service';
import { WaterbodybundService } from 'src/app/_services/waterbodybund.service';
import { WaterbodybundissuesService } from 'src/app/_services/waterbodybundissues.service';
import { WaterbodycatchmenttypeService } from 'src/app/_services/waterbodycatchmenttype.service';
import { WaterbodyconditionService } from 'src/app/_services/waterbodycondition.service';
import { WaterbodycrosssectionService } from 'src/app/_services/waterbodycrosssection.service';
import { WaterbodyexoticspeciesService } from 'src/app/_services/waterbodyexoticspecies.service';
import { WaterBodyfieldchanneltypeService } from 'src/app/_services/waterbodyfieldchanneltype.service';
import { WaterbodyshutterService } from 'src/app/_services/waterbodyshutter.service';
import { WaterbodyshutterconditionService } from 'src/app/_services/waterbodyshuttercondition.service';
import { WaterbodysluiceService } from 'src/app/_services/waterbodysluice.service';
import { WaterbodysourceService } from 'src/app/_services/waterbodysource.service';
import { WaterBodySpreadIssuesService } from 'src/app/_services/waterbodyspreadissues.service';
import { WaterbodystonepitchingService } from 'src/app/_services/waterbodystonepitching.service';
import { WaterbodystonepitchingconditionService } from 'src/app/_services/waterbodystonepitchingcondition.service';
import { WaterbodystreamissueService } from 'src/app/_services/waterbodystreamissue.service';
import { WaterbodytanktypeService } from 'src/app/_services/waterbodytanktype.service';
import { WaterbodytypeownershipService } from 'src/app/_services/waterbodytypeownership.service';
import { WaterbundresponseService } from 'src/app/_services/waterbundresponse.service';
import { WaterspreadareaService } from 'src/app/_services/waterspreadarea.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import Utils from '../../SharedUtility/utils';
import { WaterBodyconstants } from './constant'

@Component({
  selector: 'tank-questions',
  templateUrl: './tankquestions.component.html',
  styleUrls: ['./tankquestions.component.css']
})
export class TankQuestionsComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  loading = false;
  submitted = false;
  isAddMode: boolean;
  isFreeCatchmentType: boolean;
  isSupplyFromUpperTankSluice: boolean;
  isIrrigationCanal: boolean;
  isSurplusSluiceUpperTank: boolean;
  isRiverStream: boolean;
  user: Session;
  surveyResponseId: string;
  hydrologicResponseId: string;
  source1SupplyResponseId: string;
  source1FreeCatchementResponseId: string;
  source1upperTankSluiceResponseId: string;
  source1irrigationCanalResponseId: string;
  source1SurplusSluiceResponseId: string;
  source1RiverStreamResponseId: string;
  waterSpreadAreaResponseId: string;
  waterbundResponseId: string;
  waterBodySluiceResponseId: string;
  hydrologicsupplySources: HydrologicSourceSupplyDetail[];
  hydrologicprioritysupplySources: HydrologicPrioritySourceSupplyDetail[];
  supplySources1: Source1Detail[]
  freeCatchmentstreamIssues: StreamIssue[]
  upperTankSluicestreamIssues: StreamIssue[]
  irrigationCanalstreamIssues: StreamIssue[]
  riverstreamIssues: StreamIssue[]
  waterSpreadIssues: SpreadIssue[];
  waterSpreadSpecies: SpreadInvasiveSpecieIssue[];
  waterbodyBundIssues: BundIssue[];
  waterbodyBundFunctionalites: BundFunctionality[];
  waterbodyBundPicthingConditions: BundStonePitching[]
  taluks: Resource[];
  blocks: Resource[];
  panchayats: Resource[];
  ownerships: Resource[];
  tanktypes: Resource[];
  monthFillings: Resource[];
  dryFillings: Resource[];
  waterAvailabilites: Resource[];
  bedNatures: Resource[];
  sourcesofSupply: Resource[];
  catchmentTypes: Resource[];
  crossSectionStreams: Resource[];
  streamIssues: Resource[];
  spreadAreaIssues: Resource[];
  spreadAreaSpecies: Resource[];
  bundfunctionalites: Resource[];
  bundIssues: Resource[];
  bundpitchings: Resource[];
  stonepitchingConditions: Resource[];
  bundrevetments : string[] = ['Yes', 'No'];
  barrelTypes: Resource[];
  sluiceTypes: Resource[];
  shutterTypes: Resource[];
  waterbodyconditions: Resource[];
  shutterconditions: Resource[];
  fieldchannelTypes: Resource[];
  sluicefeedanywaterbodys : string[] = ['Yes', 'No'];
  fieldChannelAvailability: string[] = ['Yes', 'No'];
  // sluiceStreamIssues: Resource[]
  // irrigationCanalIssues: Resource[]
  // riverIssues: Resource[]
  private dialogConfig: any;
  @Input() waterbodyType: string;
  particularsForm = this._formBuilder.group({
    uniqueid: [null, Validators.required],
    taluk: [null, Validators.required],
    block: [null, Validators.required],
    panchayat: [null, Validators.required],
    village: [null, Validators.required],
    surveyno: [null, Validators.required],
    waterbodytype: [null],
    ownership: [null, Validators.required],
    tanktype: [null, Validators.required],
    // neerkattipractice: [null, Validators.required],
    // legalissue: [null, Validators.required],
    createdBy: [null]
  });
  hydrologicalResponseForm = this._formBuilder.group({
    tankName: [null, Validators.required],
    waterspreadArea: [null, Validators.required],
    registeredAyacut: [null, Validators.required],
    capacity: [null, Validators.required],
    numberoffillings: [null, Validators.required],
    firstmonthfilling: [null, Validators.required],
    waterAvailability: [null, Validators.required],
    monthdryup: [null, Validators.required],
    numberofsources: [null, Validators.required],
    catchmentType: [null, Validators.required],
    supplySource: [null, Validators.required],
    prioritizesupplySource: [null, Validators.required],
  });
  supplySourceForm = this._formBuilder.group({
    source1: [null, Validators.required]
  });
  freeCatchmentResponseForm = this._formBuilder.group({
    contributiontypepercentage: [null, Validators.required],
    seassonstart: [null, Validators.required],
    seassonend: [null, Validators.required],
    streamtype: [null, Validators.required],
    streamheadtopwidth: [null, Validators.required],
    streamheadbed: [null, Validators.required],
    streamheaddepth: [null, Validators.required],
    streammiddletopwidth: [null, Validators.required],
    streammiddlebed: [null, Validators.required],
    streammiddledepth: [null, Validators.required],
    streamtailendtopwidth: [null, Validators.required],
    streamtailendbed: [null, Validators.required],
    streamtailenddepth: [null, Validators.required],
    streamIssues: [null, Validators.required],
  });
  upperTankSluiceResponseForm = this._formBuilder.group({
    tankName: [null, Validators.required],
    contributionpercentage: [null, Validators.required],
    seassonstart: [null, Validators.required],
    seassonend: [null, Validators.required],
    streamtype: [null, Validators.required],
    streamheadtopwidth: [null, Validators.required],
    streamheadbed: [null, Validators.required],
    streamheaddepth: [null, Validators.required],
    streammiddletopwidth: [null, Validators.required],
    streammiddlebed: [null, Validators.required],
    streammiddledepth: [null, Validators.required],
    streamtailendtopwidth: [null, Validators.required],
    streamtailendbed: [null, Validators.required],
    streamtailenddepth: [null, Validators.required],
    sluiceStreamIssues: [null, Validators.required],
  });
  irrigationCanalResponseForm = this._formBuilder.group({
    canalName: [null, Validators.required],
    bednature: [null, Validators.required],
    numberofSupplies: [null, Validators.required],
    firstseassonstart: [null, Validators.required],
    firstseassonend: [null, Validators.required],
    secondseassonstart: [null, Validators.required],
    secondseassonend: [null, Validators.required],
    contributiontypepercentage: [null, Validators.required],
    streamtype: [null, Validators.required],
    streamtopwidth: [null, Validators.required],
    streambed: [null, Validators.required],
    streamdepth: [null, Validators.required],
    irrigationCanalIssues: [null, Validators.required],
  });
  surplusSluiceResponseForm = this._formBuilder.group({
    tankName: [null, Validators.required],
    contributiontypepercentage: [null, Validators.required],
    seassonstart: [null, Validators.required],
    seassonend: [null, Validators.required],
  });
  riverStreamResponseForm = this._formBuilder.group({
    riverName: [null, Validators.required],
    bednature: [null, Validators.required],
    seassonstart: [null, Validators.required],
    seassonend: [null, Validators.required],
    contributiontypepercentage: [null, Validators.required],
    streamtype: [null, Validators.required],
    streamtopwidth: [null, Validators.required],
    streambed: [null, Validators.required],
    streamdepth: [null, Validators.required],
    riverStreamtankIssues: [null, Validators.required],
  });
  waterSpreadResponseForm = this._formBuilder.group({
    spreadpercentage: [null, Validators.required],
    SpreadAreaIssues: [null, Validators.required],
    SpreadAreaSpecies: [null, Validators.required],
  });
  bundResponseForm = this._formBuilder.group({
    bundlength: [null, Validators.required],
    bundtopwidth: [null, Validators.required],
    slopefrontside: [null, Validators.required],
    sloperearside: [null, Validators.required],
    stonepitchingcondition: [null, Validators.required],
    revetmentlength: [null, Validators.required],
    presenceofbundrevetment: [null, Validators.required],
    presenceofrevetment: [null, Validators.required],
    BundIssues: [null, Validators.required],
    Functionalites: [null, Validators.required],
    Pitchings: [null, Validators.required],
  });
  sluiceResponseForm = this._formBuilder.group({
    sluicenumber: [null, Validators.required],
    sluicetype: [null, Validators.required],
    sluiceIrrigatedArea: [null, Validators.required],
    silllevelDepth: [null, Validators.required],
    barrelType: [null, Validators.required],
    shutterType: [null, Validators.required],
    sluicecondition: [null, Validators.required],
    shuttercondition: [null, Validators.required],
    sluicefeedanywaterbody: [null, Validators.required],
    waterbodyname: [null, Validators.required],
    fieldchannel: [null, Validators.required],
    fieldchannellength: [null, Validators.required],
    fieldchannelType: [null, Validators.required],
    fieldchannelbandwidth: [null, Validators.required],
    fieldchannelheight: [null, Validators.required],
    createdBy: [null, Validators.required],
  });
  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private talukS: TalukService,
    private blockS: BlockService,
    private panchayatS: PanchayatService,
    private ownershipS: WaterbodytypeownershipService,
    private tanktypeS: WaterbodytanktypeService,
    private waterAvailabilityS: WaterbodyavailabilityService,
    private waterBedNatureS: WaterBedNatureService,
    private waterSourceS: WaterbodysourceService,
    private waterbodycatchmenttypeS: WaterbodycatchmenttypeService,
    private waterbodycrosssectionS: WaterbodycrosssectionService,
    private waterbodystreamissueS: WaterbodystreamissueService,
    private monthS: MonthService,
    private surveyresponseS: SurveyresponseService,
    private hydrologicalresponseS: HydrologicalresponseService,
    private source1supplyS: Source1supplyService,
    private freeCatchmentS: FreecatchmentService,
    private uppertanksluiceS: UppertanksluiceService,
    private irrigationCanalS: IrrigationCanalService,
    private surplussluiceUppertankS: SurplussluiceUppertankService,
    private riverstreamS: RiverstreamService,
    private waterspreadareaS : WaterspreadareaService,
    private waterBodySpreadIssuesS: WaterBodySpreadIssuesService,
    private waterbodyexoticspeciesS: WaterbodyexoticspeciesService,
    private waterbodybundissuesS: WaterbodybundissuesService,
    private waterbodystonepitchingS: WaterbodystonepitchingService,
    private waterbodystonepitchingconditionS : WaterbodystonepitchingconditionService,
    private waterbodybundS: WaterbodybundService,
    private waterbundresponseS: WaterbundresponseService,
    private sluiceresponseS : SluiceresponseService,
    private waterbodybarrelTypeS: WaterbodybarrelTypeService,
    private waterbodysluiceS: WaterbodysluiceService,
    private waterbodyshutterS : WaterbodyshutterService,
    private waterbodyconditionS : WaterbodyconditionService,
    private waterbodyshutterconditionS : WaterbodyshutterconditionService,
    private waterBodyfieldchanneltypeS : WaterBodyfieldchanneltypeService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
    this.LoadMasterData();
  }

  ngOnInit(): void {

  }
  
  onNext(stepper: MatStepper, key: string) {
    this.loading = true;
    console.log(stepper)
    console.log(key)
    console.log("Selected Index is " + stepper.selectedIndex)
    switch (key) {
      case WaterBodyconstants.PARTICULAR_DETAILS: {
        this.saveParticularDetails(stepper);
        break;
      }
      case WaterBodyconstants.HYDROLOGIC_DETAILS: {
        this.saveHydroLogicDetails(stepper);
        break;
      }
      case WaterBodyconstants.SOURCE1_DETAILS: {
        this.saveSource1SupplyDetails(stepper);
        if (this.isFreeCatchmentType)
        {
            if(this.freeCatchmentResponseForm.valid)
            {
               this.savefreeCatchmentDetails(stepper);
            }
            else
            {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleExtensionError("Required answers are missing in the FreeCatchment Type.")
              this.loading = false;
              stepper.previous();
              return
            }
              
        }
        if (this.isSupplyFromUpperTankSluice)
        {
            if(this.upperTankSluiceResponseForm.valid)
            {
               this.saveUpperTankSluiceDetails(stepper);
            }
            else
            {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleExtensionError("Required answers are missing in the Sluice Upper Tank.")
              this.loading = false;
              stepper.previous();
              return
            }
              
        }
        if (this.isIrrigationCanal)
        {
            if(this.irrigationCanalResponseForm.valid)
            {
               this.saveIrrigationCanalDetails(stepper);
            }
            else
            {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleExtensionError("Required answers are missing in the IrrigationCanal.")
              this.loading = false;
              stepper.previous();
              return
            }
              
        }
        if (this.isSurplusSluiceUpperTank)
        {
            if(this.surplusSluiceResponseForm.valid)
            {
               this.saveSurplusSluiceDetails(stepper);
            }
            else
            {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleExtensionError("Required answers are missing in the Surplus sluice")
              this.loading = false;
              stepper.previous();
              return
            }
              
        }
        if (this.isRiverStream)
        {
            if(this.riverStreamResponseForm.valid)
            {
               this.saveRiverStreamDetails(stepper);
            }
            else
            {
              this.errorService.dialogConfig = { ...this.dialogConfig };
              this.errorService.handleExtensionError("Required answers are missing in the River Stream")
              this.loading = false;
              stepper.previous();
              return
            } 
        }
        break;
      }
      case WaterBodyconstants.SPREADAREA_DETAILS: {
        this.saveWaterSpreadAreaDetails(stepper);
        break;
      }
      case WaterBodyconstants.BUND_DETAILS: {
        this.saveWaterBundDetails(stepper);
        break;
      }
      case WaterBodyconstants.SLUICE_DETAILS: {
        //this.saveSluiceResponseDetails(stepper);
        break;
      }
      default: {
        //statements; 
        console.log("At step Default")
        break;
      }
    }
    this.loading = false;
  }
  onblockchange(value: string) {
    console.log(value);
    this.panchayatS.getDictionaryByBlock(value)
      .subscribe(results => {
        this.panchayats = results
      });
  }
  onChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.hydrologicsupplySources = options.map((resource) => {
      return { source: resource.value.id, createdBy: this.user.username }
    })
  }
  onPrioritizeSourceChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.hydrologicprioritysupplySources = options.map((resource) => {
      return { prioritysource: resource.value.id, createdBy: this.user.username }
    })
  }
  onstreamIssuesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.freeCatchmentstreamIssues = options.map((resource) => {
      return { issue: resource.value.id, createdBy: this.user.username }
    })
  }
  onsluiceStreamIssuesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.upperTankSluicestreamIssues = options.map((resource) => {
      return { issue: resource.value.id, createdBy: this.user.username }
    })
  }
  onIrrigationCanalStreamIssuesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.irrigationCanalstreamIssues = options.map((resource) => {
      return { issue: resource.value.id, createdBy: this.user.username }
    })
  }
  onRiverStreamIssuesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.riverstreamIssues = options.map((resource) => {
      return { issue: resource.value.id, createdBy: this.user.username }
    })
  }
  onWaterSpreadIssuesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.waterSpreadIssues = options.map((resource) => {
      return { issue: resource.value.id, createdBy: this.user.username }
    })
  }
  onWaterSpreadSpeciesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.waterSpreadSpecies = options.map((resource) => {
      return { specie: resource.value.id, createdBy: this.user.username }
    })
  }
  onWaterBundIssuesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.waterbodyBundIssues = options.map((resource) => {
      return { issue: resource.value.id, createdBy: this.user.username }
    })
  }
  onWaterBundFunctionalitesChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.waterbodyBundFunctionalites = options.map((resource) => {
      return { bundfunctionality: resource.value.id, createdBy: this.user.username }
    })
  }
  onWaterBundStonePitchingsChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.waterbodyBundPicthingConditions = options.map((resource) => {
      return { stonePitching: resource.value.id, createdBy: this.user.username }
    })
  }
  onsource1Change(options: MatListOption[]) {
    // map these MatListOptions to their values
    this.supplySources1 = options.map((resource) => {
      return { source1: resource.value.id, name: resource.value.name, createdBy: this.user.username }
    });
    this.isFreeCatchmentType = this.isSourceChecked(WaterBodyconstants.SOURCE1_FREECATCHMENT);
    this.isSupplyFromUpperTankSluice = this.isSourceChecked(WaterBodyconstants.SOURCE1_SUPPLYFROMUPPERTANKSLUICE);
    this.isIrrigationCanal = this.isSourceChecked(WaterBodyconstants.SOURCE1_IRRIGATIONCANAL);
    this.isSurplusSluiceUpperTank = this.isSourceChecked(WaterBodyconstants.SOURCE1_SURPLUSSLUICEUPPERTANK);
    this.isRiverStream = this.isSourceChecked(WaterBodyconstants.SOURCE1_RIVERSTREAM);
  }
  isSourceChecked(source: string) {
    if (this.supplySources1 && this.supplySources1.find(x => x.name === source))
      return true;
    else
      return false;
  }
  private LoadMasterData() {
    this.talukS.getDictionary()
      .subscribe(results => {
        this.taluks = results
      });
    this.blockS.getDictionary()
      .subscribe(results => {
        this.blocks = results
      });
    this.ownershipS.getDictionary()
      .subscribe(results => {
        this.ownerships = results
      });
    this.tanktypeS.getDictionary()
      .subscribe(results => {
        this.tanktypes = results
      });
    this.monthS.getDictionary()
      .subscribe(results => {
        this.monthFillings = results
        this.dryFillings = results
      });
    this.waterSourceS.getDictionary()
      .subscribe(results => {
        this.sourcesofSupply = results
      });
    this.waterAvailabilityS.getDictionary()
      .subscribe(results => {
        this.waterAvailabilites = results
      })
    this.waterbodycatchmenttypeS.getDictionary()
      .subscribe(results => {
        this.catchmentTypes = results
      });
    this.waterbodycrosssectionS.getDictionary()
      .subscribe(results => {
        this.crossSectionStreams = results
      });
    this.waterbodystreamissueS.getDictionary()
      .subscribe(results => {
        this.streamIssues = results
      });
      this.waterBedNatureS.getDictionary()
      .subscribe(results => {
        this.bedNatures = results
      });
      this.waterBodySpreadIssuesS.getDictionary()
      .subscribe(results => {
        this.spreadAreaIssues = results
      });
      this.waterbodyexoticspeciesS.getDictionary()
      .subscribe(results => {
        this.spreadAreaSpecies = results
      });
      this.waterbodybundissuesS.getDictionary()
      .subscribe(results => {
        this.bundIssues = results
      });
      this.waterbodybundS.getDictionary()
      .subscribe(results => {
        this.bundfunctionalites = results
      });
      this.waterbodystonepitchingS.getDictionary()
      .subscribe(results => {
        this.bundpitchings = results
      });
      this.waterbodystonepitchingconditionS.getDictionary()
      .subscribe(results => {
        this.stonepitchingConditions = results
      });
      this.waterbodybarrelTypeS.getDictionary()
      .subscribe(results => {
        this.barrelTypes = results
      });
      this.waterbodysluiceS.getDictionary()
      .subscribe(results => {
        this.sluiceTypes = results
      });
      this.waterbodyshutterS.getDictionary()
      .subscribe(results => {
        this.shutterTypes = results
      });
      this.waterbodyconditionS.getDictionary()
      .subscribe(results => {
        this.waterbodyconditions = results
      });
      this.waterbodyshutterconditionS.getDictionary()
      .subscribe(results => {
        this.shutterconditions = results
      });
      this.waterBodyfieldchanneltypeS.getDictionary()
      .subscribe(results => {
        this.fieldchannelTypes = results
      });
  }
  private saveParticularDetails(stepper: MatStepper) {
    let detail = Utils.getParticularsDetail(this.particularsForm,this.waterbodyType,
      this.user.username)
    this.surveyresponseS.createSurveyResponse(detail)
      .pipe(first())
      .subscribe({
        next: (responseDetail: ParticularDetail) => {
          console.log("Inserted Successfully");
          this.surveyResponseId = responseDetail.id!
          console.log(this.surveyResponseId);
        },
        error: (error: any) => {
          console.log(error);
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
          this.loading = false;
          stepper.previous();
        }
      });

  }
  private saveHydroLogicDetails(stepper: MatStepper) {
    let detail = Utils.getHydrologicalDetail(this.hydrologicalResponseForm,this.surveyResponseId,
      this.user.username,this.hydrologicsupplySources,this.hydrologicprioritysupplySources)
    if (this.isNew(this.hydrologicResponseId)) {
      this.hydrologicalresponseS.createHydrologicalResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: HydrologicDetail) => {
            console.log("Inserted Successfully");
            this.hydrologicResponseId = responseDetail.id!
            console.log(this.hydrologicResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.hydrologicalresponseS.updateHydrologicalResponse(this.hydrologicResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: HydrologicDetail) => {
            console.log("Updated Successfully");
            console.log(this.hydrologicResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveSource1SupplyDetails(stepper: MatStepper) {
    let detail = Utils.getSource1SupplyDetail(this.surveyResponseId,
      this.user.username,this.supplySources1)
    console.log(detail);
    if (this.isNew(this.source1SupplyResponseId)) {
      this.source1supplyS.createSource1SupplyResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: Source1SupplyDetail) => {
            console.log("Inserted Successfully");
            this.source1SupplyResponseId = responseDetail.id!
            console.log(this.source1SupplyResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.source1supplyS.updateSource1SupplyResponse(this.source1SupplyResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: Source1SupplyDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1SupplyResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private savefreeCatchmentDetails(stepper: MatStepper) {
    let detail: FreeCatchmentDetail = {
      surveyResponse: this.surveyResponseId,
      contributiontypepercentage: this.freeCatchmentResponseForm.get("contributiontypepercentage")?.value,
      seassonstart: this.freeCatchmentResponseForm.get("seassonstart")?.value,
      seassonend: this.freeCatchmentResponseForm.get("seassonend")?.value,
      streamtype: this.freeCatchmentResponseForm.get("streamtype")?.value,
      streamheadtopwidth: this.freeCatchmentResponseForm.get("streamheadtopwidth")?.value,
      streamheadbed: this.freeCatchmentResponseForm.get("streamheadbed")?.value,
      streamheaddepth: this.freeCatchmentResponseForm.get("streamheaddepth")?.value,
      streammiddletopwidth: this.freeCatchmentResponseForm.get("streammiddletopwidth")?.value,
      streammiddlebed: this.freeCatchmentResponseForm.get("streammiddlebed")?.value,
      streammiddledepth: this.freeCatchmentResponseForm.get("streammiddledepth")?.value,
      streamtailendtopwidth: this.freeCatchmentResponseForm.get("streamtailendtopwidth")?.value,
      streamtailendbed: this.freeCatchmentResponseForm.get("streamtailendbed")?.value,
      streamtailenddepth: this.freeCatchmentResponseForm.get("streamtailenddepth")?.value,
      createdBy: this.user.username,
      Issues: this.freeCatchmentstreamIssues
    }
    console.log(detail);
    if (this.isNew(this.source1FreeCatchementResponseId)) {
      this.freeCatchmentS.createFreecatchmentResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: FreeCatchmentDetail) => {
            console.log("Inserted Successfully");
            this.source1FreeCatchementResponseId = responseDetail.id!
            console.log(this.source1FreeCatchementResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.freeCatchmentS.updateFreecatchmentResponse(this.source1FreeCatchementResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: FreeCatchmentDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1FreeCatchementResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveUpperTankSluiceDetails(stepper: MatStepper) {
    let detail: UpperTankSluiceDetail = {
      surveyResponse: this.surveyResponseId,
      tankName: this.upperTankSluiceResponseForm.get("tankName")?.value,
      contributionpercentage: this.upperTankSluiceResponseForm.get("contributionpercentage")?.value,
      seassonstart: this.upperTankSluiceResponseForm.get("seassonstart")?.value,
      seassonend: this.upperTankSluiceResponseForm.get("seassonend")?.value,
      streamtype: this.upperTankSluiceResponseForm.get("streamtype")?.value,
      streamheadtopwidth: this.upperTankSluiceResponseForm.get("streamheadtopwidth")?.value,
      streamheadbed: this.upperTankSluiceResponseForm.get("streamheadbed")?.value,
      streamheaddepth: this.upperTankSluiceResponseForm.get("streamheaddepth")?.value,
      streammiddletopwidth: this.upperTankSluiceResponseForm.get("streammiddletopwidth")?.value,
      streammiddlebed: this.upperTankSluiceResponseForm.get("streammiddlebed")?.value,
      streammiddledepth: this.upperTankSluiceResponseForm.get("streammiddledepth")?.value,
      streamtailendtopwidth: this.upperTankSluiceResponseForm.get("streamtailendtopwidth")?.value,
      streamtailendbed: this.upperTankSluiceResponseForm.get("streamtailendbed")?.value,
      streamtailenddepth: this.upperTankSluiceResponseForm.get("streamtailenddepth")?.value,
      createdBy: this.user.username,
      Issues: this.upperTankSluicestreamIssues
    }
    console.log("upper tank sluice detail");
    console.log(detail);
    if (this.isNew(this.source1upperTankSluiceResponseId)) {
      this.uppertanksluiceS.createUpperTankSluiceResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: UpperTankSluiceDetail) => {
            console.log("Inserted Successfully");
            this.source1upperTankSluiceResponseId = responseDetail.id!
            console.log(this.source1upperTankSluiceResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.uppertanksluiceS.updateUpperTankSluiceResponse(this.source1upperTankSluiceResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: UpperTankSluiceDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1upperTankSluiceResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveIrrigationCanalDetails(stepper: MatStepper) {
    let detail: IrrigationCanalDetail = {
      surveyResponse: this.surveyResponseId,
      canalName: this.irrigationCanalResponseForm.get("canalName")?.value,
      bednature: this.irrigationCanalResponseForm.get("bednature")?.value,
      numberofSupplies: this.irrigationCanalResponseForm.get("numberofSupplies")?.value,
      streamtype: this.irrigationCanalResponseForm.get("streamtype")?.value,
      firstseassonstart: this.irrigationCanalResponseForm.get("firstseassonstart")?.value,
      firstseassonend: this.irrigationCanalResponseForm.get("firstseassonend")?.value,
      secondseassonstart: this.irrigationCanalResponseForm.get("secondseassonstart")?.value,
      secondseassonend: this.irrigationCanalResponseForm.get("secondseassonend")?.value,
      contributiontypepercentage: this.irrigationCanalResponseForm.get("contributiontypepercentage")?.value,
      streamtopwidth: this.irrigationCanalResponseForm.get("streamtopwidth")?.value,
      streambed: this.irrigationCanalResponseForm.get("streambed")?.value,
      streamdepth: this.irrigationCanalResponseForm.get("streamdepth")?.value,
      createdBy: this.user.username,
      Issues: this.irrigationCanalstreamIssues
    }
    console.log(detail);
    if (this.isNew(this.source1irrigationCanalResponseId)) {
      this.irrigationCanalS.createIrrigationCanalResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: IrrigationCanalDetail) => {
            console.log("Inserted Successfully");
            this.source1irrigationCanalResponseId = responseDetail.id!
            console.log(this.source1irrigationCanalResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.irrigationCanalS.updateIrrigationCanalResponse(this.source1irrigationCanalResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: IrrigationCanalDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1irrigationCanalResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveSurplusSluiceDetails(stepper: MatStepper) {
    let detail: SurplusSluiceDetail = {
      surveyResponse: this.surveyResponseId,
      tankName: this.surplusSluiceResponseForm.get("tankName")?.value,
      contributiontypepercentage: this.surplusSluiceResponseForm.get("contributiontypepercentage")?.value,
      seassonstart: this.surplusSluiceResponseForm.get("seassonstart")?.value,
      seassonend: this.surplusSluiceResponseForm.get("seassonend")?.value,
      createdBy: this.user.username,
    }
    console.log(detail);
    if (this.isNew(this.source1SurplusSluiceResponseId)) {
      this.surplussluiceUppertankS.createSurplusSluiceResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: SurplusSluiceDetail) => {
            console.log("Inserted Successfully");
            this.source1SurplusSluiceResponseId = responseDetail.id!
            console.log(this.source1SurplusSluiceResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.surplussluiceUppertankS.updateSurplusSluiceResponse(this.source1SurplusSluiceResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: SurplusSluiceDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1SurplusSluiceResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveRiverStreamDetails(stepper: MatStepper) {
    let detail = Utils.getRiverStreamDetail(this.surveyResponseId, this.riverStreamResponseForm,
      this.user.username, this.riverstreamIssues)
    if (this.isNew(this.source1RiverStreamResponseId)) {
      this.riverstreamS.createRiverStreamResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: RiverStreamDetail) => {
            console.log("Inserted Successfully");
            this.source1RiverStreamResponseId = responseDetail.id!
            console.log(this.source1RiverStreamResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.riverstreamS.updateRiverStreamResponse(this.source1RiverStreamResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: RiverStreamDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1RiverStreamResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveWaterSpreadAreaDetails(stepper: MatStepper) {
    let detail = Utils.getWaterSpreadAreaDetail(this.surveyResponseId, this.waterSpreadResponseForm,
      this.user.username, this.waterSpreadIssues,this.waterSpreadSpecies)
    if (this.isNew(this.waterSpreadAreaResponseId)) {
      this.waterspreadareaS.createWaterSpreadAreaResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: WaterSpreadAreaDetail) => {
            console.log("Inserted Successfully");
            this.waterSpreadAreaResponseId = responseDetail.id!
            console.log(this.waterSpreadAreaResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.waterspreadareaS.updateWaterSpreadAreaResponse(this.waterSpreadAreaResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: WaterSpreadAreaDetail) => {
            console.log("Updated Successfully");
            console.log(this.source1RiverStreamResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveWaterBundDetails(stepper: MatStepper) {
    let detail = Utils.getWaterBundDetail(this.surveyResponseId, this.bundResponseForm,
      this.user.username, this.waterbodyBundIssues,this.waterbodyBundFunctionalites,
      this.waterbodyBundPicthingConditions)
    if (this.isNew(this.waterbundResponseId)) {
      this.waterbundresponseS.createWaterBundDetailResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: WaterBundDetail) => {
            console.log("Inserted Successfully");
            this.waterbundResponseId = responseDetail.id!
            console.log(this.waterbundResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.waterbundresponseS.updateWaterBundDetailResponse(this.waterbundResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: WaterBundDetail) => {
            console.log("Updated Successfully");
            console.log(this.waterbundResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  private saveSluiceResponseDetails(stepper: MatStepper) {
    let detail = Utils.getWaterBodySluiceDetail(this.surveyResponseId, this.sluiceResponseForm,
      this.user.username)
    if (this.isNew(this.waterBodySluiceResponseId)) {
      this.sluiceresponseS.createSluiceDetailResponse(detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: WaterBodySluiceDetail) => {
            console.log("Inserted Successfully");
            this.waterBodySluiceResponseId = responseDetail.id!
            console.log(this.waterBodySluiceResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
    else {
      detail.lastModifiedBy = this.user.username;
      this.sluiceresponseS.updateSluiceResponse(this.waterBodySluiceResponseId, detail)
        .pipe(first())
        .subscribe({
          next: (responseDetail: WaterBodySluiceDetail) => {
            console.log("Updated Successfully");
            console.log(this.waterbundResponseId);
          },
          error: (error: any) => {
            console.log(error);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
            this.loading = false;
            stepper.previous();
          }
        });
    }
  }
  isNew(responseId: string): boolean {
    if (responseId != 'undefined' && responseId) {
      return false;
    }
    return true;
  }

}
