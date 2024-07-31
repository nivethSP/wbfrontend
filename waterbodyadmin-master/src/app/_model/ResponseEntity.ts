export interface ParticularDetail {
    id?:string;
    uniqueid: string;
    taluk: string;
    block: string;
    panchayat: string;
    village: string;
    surveyno: string;
    waterbodytype: string;
    ownership: string;
    tanktype: string; 
    status: string;
    createdBy?: string;
    lastModifiedBy?: string;
  }
  export interface HydrologicDetail {
    id?:string;
    surveyResponse: string;
    tankName: string;
    waterspreadArea: string;
    registeredAyacut: string;
    capacity: string;
    numberoffillings: string;
    firstmonthfilling: string;
    waterAvailability: string;
    monthdryup: string; 
    numberofsources: string;
    catchmentType: string;
    createdBy?: string;
    lastModifiedBy?: string;
    Sources: HydrologicSourceSupplyDetail[];
    PrioritySources: HydrologicPrioritySourceSupplyDetail[];
  }
  export interface HydrologicSourceSupplyDetail {
    source: string;
    createdBy?: string;
  }
  export interface HydrologicPrioritySourceSupplyDetail {
    prioritysource: string;
    createdBy?: string;
  }
  export interface Source1SupplyDetail {
    id?:string;
    surveyResponse: string;
    createdBy?: string;
    lastModifiedBy?: string;
    Sources1: Source1Detail[];
  }
  export interface Source1Detail {
    source1: string;
    name: string;
    createdBy?: string;
  }
  export interface FreeCatchmentDetail {
    id?:string;
    surveyResponse: string;
    contributiontypepercentage: number;
    seassonstart: string;
    seassonend: string;
    streamtype: string;
    streamheadtopwidth: number;
    streamheadbed: number;
    streamheaddepth: number;
    streammiddletopwidth: number; 
    streammiddlebed: number;
    streammiddledepth: number;
    streamtailendtopwidth: number;
    streamtailendbed: number;
    streamtailenddepth: number;
    createdBy?: string;
    lastModifiedBy?: string;
    Issues: StreamIssue[];
  }
  export interface UpperTankSluiceDetail {
    id?:string;
    surveyResponse: string;
    tankName: string;
    contributionpercentage: number;
    seassonstart: string;
    seassonend: string;
    streamtype: string;
    streamheadtopwidth: number;
    streamheadbed: number;
    streamheaddepth: number;
    streammiddletopwidth: number; 
    streammiddlebed: number;
    streammiddledepth: number;
    streamtailendtopwidth: number;
    streamtailendbed: number;
    streamtailenddepth: number;
    createdBy?: string;
    lastModifiedBy?: string;
    Issues: StreamIssue[];
  }
  export interface StreamIssue {
    issue: string;
    createdBy?: string;
  }
  export interface IrrigationCanalDetail {
    id?:string;
    surveyResponse: string;
    canalName: string;
    bednature: string;
    numberofSupplies: number;
    firstseassonstart: string;
    firstseassonend: string;
    secondseassonstart: string;
    secondseassonend: string;
    contributiontypepercentage: number;
    streamtype: string; 
    streamtopwidth: number;
    streambed: number;
    streamdepth: number;
    createdBy?: string;
    lastModifiedBy?: string;
    Issues: StreamIssue[];
  }
  export interface SurplusSluiceDetail {
    id?:string;
    surveyResponse: string;
    tankName: string;
    contributiontypepercentage: number;
    seassonstart: string;
    seassonend: string;
    createdBy?: string;
    lastModifiedBy?: string;
  }
  export interface RiverStreamDetail {
    id?:string;
    surveyResponse: string;
    riverName: string;
    bednature: string;
    seassonstart: string;
    seassonend: string;
    contributiontypepercentage: number;
    streamtype: string;
    streamtopwidth: number;
    streambed: number;
    streamdepth: number;
    createdBy?: string;
    lastModifiedBy?: string;
    Issues: StreamIssue[];
  }
  export interface SpreadIssue {
    issue: string;
    createdBy?: string;
  }
  export interface SpreadInvasiveSpecieIssue {
    specie: string;
    createdBy?: string;
  }
  export interface WaterSpreadAreaDetail {
    id?:string;
    surveyResponse: string;
    spreadpercentage: number;
    createdBy?: string;
    lastModifiedBy?: string;
    SpreadAreaIssues: SpreadIssue[];
    SpreadAreaSpecies: SpreadInvasiveSpecieIssue[];
  }
  export interface BundIssue {
    issue: string;
    createdBy?: string;
  }
  export interface BundFunctionality{
    bundfunctionality: string;
    createdBy?: string;
  }
  export interface BundStonePitching{
    stonePitching: string;
    createdBy?: string;
  }
  export interface WaterBundDetail {
    id?:string;
    surveyResponse: string;
    bundlength: number;
    bundtopwidth: number;
    slopefrontside: number;
    sloperearside: number;
    stonepitchingcondition: string;
    revetmentlength: number;
    presenceofbundrevetment: string;
    presenceofrevetment: string;
    BundIssues: BundIssue[];
    Functionalites: BundFunctionality[];
    Pitchings: BundStonePitching[];
    createdBy?: string;
    lastModifiedBy?: string;
  }
  export interface WaterBodySluiceDetail {
    id?:string;
    surveyResponse: string;
    sluicenumber: number;
    sluicetype: string;
    sluiceIrrigatedArea: number;
    silllevelDepth: number;
    barrelType: string;
    shutterType: number;
    sluicecondition: string;
    shuttercondition: string;
    sluicefeedanywaterbody: string;
    waterbodyname: string;
    fieldchannel: string;
    fieldchannellength: number;
    fieldchannelType: string;
    fieldchannelbandwidth: number;
    fieldchannelheight: number;
    createdBy?: string;
    lastModifiedBy?: string;
  }