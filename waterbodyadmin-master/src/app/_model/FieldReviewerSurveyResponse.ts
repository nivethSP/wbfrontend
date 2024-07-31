export interface WaterBody {
    id: string;
    surveyNumber: string;
    waterbodyType: string;
    waterBodyAvailability: string;
    waterbodyId: string;
    waterbodyName: string;
    jurisdiction: string;

    name: string;

    ward: string;
    district: string;
    taluk: string;
    block: string;
    panchayat: string;
    village: string;
    waterParams?: string | any;
    gpsCordinates?: string;
    images: image[];
    draft_status: number;
    verify_status: number;
    createdBy: string;
    createdDate: Date;
    lastModifiedBy: string;
}
export interface NoWaterBody {
    existingStructure: string;
    typeOfStructure: string;
}
export interface WaterBodyParameter {
    ghatsParameterDetails: any;
    habitation: string;
    ownership: string;
    typeOfTank: string;
    existingStructure: string;
    typeOfStructure: string;
    hydrologicParamaters: hydrologicParameters
    waterSpreadAreaDetails: waterSpreadAreaDetail
    bundDetails: bundDetail
    sluiceParameters: sluiceParamteres
    surplusWeirParameters: surplusWeirParameters
    surplusCoarseParameters: surplusCoarseParameters
    retainingWallParameters: retainingWallParameters
    functionalParameters: functionalParameters
    uniquenessParameters: uniquenessParameters
    legalParameters: legalParameters
    encroachmentDetails: encroachmentDetails
    presenceOfWUA: presenceOfWUA
    renovationDetails: renovationDetails
    futureActivities: futureActivities
    embankmentDetails: embankmentDetails
    inletParameters: inletParameter
    outletParameters: outletParameter
    fencingParameters: fenceParameter
    ghatDetails: ghatDetail

}

export interface hydrologicParameters {
    nameOfTank: string;
    waterSpreadArea: number;
    registeredAyacut: number;
    originalCapacity: number;
    noOfFillings: number;
    monthOfFirstFilling: string;
    waterAvailability: string;

    sources: sourceParameters;
    noOfSources: number;
    typeOfCatchment: string;
    sourcesOfSupply: string;

    pastSources: string;
    monthOfScarcity: string;
    nameOfPond: string;
    name: string;
}

export interface sourceParameters {
    freeCatchment: freeCatchment;
    surplusFromUpperTank: surplsFromUpperTank;
    upperTankSluice: upperTankSluice;
    irrigationCanal: irrigationCanal;
    riverStream: riverStream;
    springs: spring
    subsurfaceFlow: subsurfaceFlow
}

export interface freeCatchment {
    contriEnd: string
    contriStart: string
    headBed: number
    headDepth: number
    headTopWidth: number
    issues: string
    middleBed: number
    middleDepth: number
    middleTopWidth: number
    percentageOfContri: string
    tailBed: string
    tailDepth: number
    tailTopWidth: number
    typeOfCross: number
}

export interface surplsFromUpperTank {
    contriEnd: string;
    contriStart: string;
    issues: string;
    name: string;
    natureOfBed: string;
    percentageOfContri: string;
    headBed: number
    headDepth: number
    headTopWidth: number
    middleBed: number
    middleDepth: number
    middleTopWidth: number
    tailBed: number
    tailDepth: number
    tailTopWidth: number
    typeOfCross: number
}

export interface upperTankSluice {
    contriEnd: string;
    contriStart: string;
    issues: string;
    nameOfUpperTank: string;
    percentageOfContri: string;
    topWidth: string;
    headBed: number
    headDepth: number
    headTopWidth: number
    middleBed: number
    middleDepth: number
    middleTopWidth: number
    tailBed: number
    tailDepth: number
    tailTopWidth: number
    typeOfCross: string
}
export interface spring {
    contriEnd: string;
    contriStart: string;
    natureOfSpring: string;
    noOfSpring: string;
    percentageOfContri: string;
}
export interface irrigationCanal {
    contriEndFirst: string;
    contriEndSecond: string;
    contriStartSecond: string;
    contriStartFirst: string;
    headBed: number;
    headDepth: number;
    headTopWidth: number;
    middleBed: number;
    middleDepth: number;
    middleTopWidth: number;
    name: string;
    noOfIrrigationSupplies: number;
    issues: string;
    natureOfBed: string;
    percentageOfContri: string;
    typeOfCross: string;
    tailBed: number;
    tailDepth: number;
    tailTopWidth: number;
}

export interface riverStream {
    contriEnd: string;
    contriStart: string;
    issues: string;
    name: string;
    natureOfBed: string;
    percentageOfContri: string;
    typeOfContri: string;
    bed: string
    depth: string
    topWidth: string
    typeOfCross: string
}

export interface subsurfaceFlow {
    contriEnd: string;
    contriStart: string;
    natureOfSubsurface: string;
    percentageOfContri: string;
}

export interface waterSpreadAreaDetail {
    issuesInWaterSpreadArea: string;
    invasiveSpecies: string;
    percentageOfSpread: string;
}
export interface ghatDetail {
    id: number;
    name: string;
    activitiesUndertaken: string; // Assuming this is a JSON string representing activities
  }
  

export interface bundDetail {
    accessGhatsRequired: string;
    presenceOfAccessGhat: string;
    presenceOfRevetment: string;
    presenceOfStonePitching: string;
    bundlength: number;
    bundtopwidth: number;
    topBundLevelFromMSL: number;
    slopeforeside: number;
    sloperearside: number;
    bundreventment: string;
    stonePitching: string;
    stonepitchingcondition: string;
    lengthOfRevetment: string;
    bundFunctionalities: string;
    issuesInBund: string;
    noOfAccessGhats: number;
    noOfAccessGhatsRequired: number;
    accessGhatsConditionList: accessGhatsCondition[]
}

export interface WaterBody{
    presenceOfTempleAdmin: string; // Add this line
  nameOfTempleAdministration?: string;
  personForIncharge?: string;
  designation?: string;
  contactNo?: string;

}
export interface accessGhatsCondition {
    condition: string;
}
export interface sluiceParamteres {
    availabilityOfFieldChannel: string
    bedwidthOfFieldChannel: number
    heightOfFieldChannel: number
    lengthOfFieldChannel: number
    noOfSluices: number
    sluiceList: sluiceList[]
    typeOfFieldChannel: string;
}

export interface sluiceList {
    areaIrrigated: number
    conditionOfShutter: string
    conditionOfSluice: string
    feedWaterBody: string
    nameOfFeedWaterBody: string
    sillLevel: number
    sluiceInOperation: string
    typeOfBarrel: string
    typeOfShutter: string
    typeOfSluice: string
}


export interface surplusWeirParameters {
    noOfSurplusWeir: number;
    presenceOfSurplusWeir: string
    surplusWeirList: surplusWeirList[]
}

export interface surplusWeirList {
    FTLofWeir: number;
    MWLofWeir: number;
    conditionOfSurplusWeir: string;
    damStones: string;
    depthOfDamStone: number;
    dischargingCapacity: number;
    headOverCrest: number;
    lengthOfSurplusWeir: number;
    levelDifference: string;
    typeOfShutter: string;
    typeOfSurplusWeir: string;
}

export interface surplusCoarseParameters {
    noOfSurplusCourse: number
    surplusCourseList: surplusCourseList[]
}

export interface surplusCourseList {
    headBed: number;
    headDepth: number;
    headTopWidth: number;
    issues: string;
    middleBed: number;
    middleDepth: number;
    middleTopWidth: number;
    nameOfDownstreamTank: string;
    tailBed: number;
    tailDepth: number;
    tailTopWidth: number;
    typeOfCrossSection: string;
}

export interface retainingWallParameters {
    presenceOfRetainingWall: string;
    retainingWall: string;
    noOfSidesOfRetainingWall: string;
    conditionOfWalls: string;
    direction: string;
}

export interface functionalParameters {
    functions: string;
    functionsList: functionsList;
}

export interface functionsList {
    irrigation: irrigation
    fishing: fishing
    lotus: lotus
    waterSpreadArea: waterSpreadArea
    bundTrees: bundTree
    duckRearing: duckRearing
    pottery: pottery
    livestock: livestock
    anyOther: others
}

export interface irrigation {
    builtupPercentage: number
    fallowPercentage: number
    firstCropName: string
    invasionPercentage: string
    maxDepthOfBoreWell: number
    maxDepthOfDugWell: number
    natureOfAyacut: string
    noOfBeneficiaries: number
    noOfBoreWells: number
    noOfCrops: number
    noOfDugWells: number
    presentAyacut: number
    registeredAyacut: number
    secondCropName: string
}
export interface fishing {
    investment: number;
    monthOfHarvest: string;
    monthOfRelease: string;
    natureOfInvestment: string;
    noOfDependentFamilies: number;
    return: number
}
export interface lotus {
    investment: number;
    monthOfHarvestLotusEnd: string;
    monthOfHarvestLotusStart: string;
    natureOfInvestment: string;
    noOfDependentFamilies: number;
    return: number
}
export interface waterSpreadArea {
    acreage: number;
    area: number;
    distributionOfLand: string;
    investment: number;
    monthOfCultivationEnd: string;
    monthOfCultivationStart: string;
    natureOfFamilies: string;
    noOfFamiliesInvolved: number;
    return: number
}
export interface bundTree {
    investment: number;
    monthOfHarvestEnd: string;
    monthOfHarvestStart: string;
    nameOfTree: string;
    natureOfInvestment: string;
    noOfDependentFamilies: number;
    noOfIncomeTrees: number;
    noOfTrees: number;
    return: number;
}
export interface duckRearing {
    noOfDependentFamilies: number;
}
export interface pottery {
    noOfDependentFamilies: number;
    yearsOfPotteryWork: number;
}
export interface livestock {
    noOfAnimals: number;
    noOfDependentFamilies: number;
}
export interface others {
    description: string;
}
export interface uniquenessParameters {
    description: string;
    presenceOfNeerkattiPractice: string;
    uniquenessOfTank: string;
    
    uniqueness: string; // List of selected uniqueness options.
    presenceOfRecreationalSpace: string; // "Yes" or "No" indicating if there is a recreational space.
    conditionOfRecreationalSpace?: string; 
    needForRecreationalSpace?: string;
}

export interface legalParameters {
    legalIssue: string;
    legalIssueGIST: string;
}

export interface encroachmentDetails {
    alternativeHousing: string;
    boundaryStone: string;
    courtCase: string;
    encroachments: string;
    form1: string;
    form2: string;
    natureOfEncroachmentList: natureOfEncroachment
    livingStandard: string;
    noOfEncroachments: number;
    presenceOfEnchroachment: string;
    surveyConducted: string;
    natureOfEncroachment: string;
    form3IssueToEncroachers: string;
    
    statusOfEviction: string
    extentOfEncroachment: string;
    noOfEncroachment: string;
}


export interface bund {
    form3IssueToEncroachers: string;
    natureOfEncroachment: string;
    statusOfEviction: string
    natureOfEncroachmentList: natureOfEncroachment
}

export interface natureOfEncroachment {
    GovernmentBuilding: building
    PrivateBuilding: building
    PublicBuilding: building
    PrivateLandWithoutPatta: building
    PrivateLandWithPatta: building
    TemplesOtherWorshipPlaces: building
}
export interface building {
    extentOfEncroachment: string;
    noOfEncroachment: string;

}
export interface presenceOfWUA {
    presenceOfWUA: string;
    nameOfWUAassociation: string;
    electionConductedWUA: string;
    noOfECmembers: number;
    registrationNo: number;
    presidentName: string;
    contactNo: number;
}

export interface renovationDetails {
    yearOfRenovation: number;
    nameOfRenovationScheme: string;
    amountSpent: number;
    activitiesUndertaken: string;

    otherActivityDesc: string;
}

export interface embankmentDetails {
    bundFunctionalities: string
    issuesInBund: string
    bundlength: number
    bundtopwidth: number
    conditionOfWalkingPavement: string
    extentOfStonePitching: string;
    lengthOfPavement: number
    slopeforeside: number
    sloperearside: number
    natureOfEmbankment: string
    natureOfWalkingPavement: string
    presenceOfWalkingPavement: string
    stonePitching: string;
    stonepitchingcondition: string;
    presenceOfStonePitching: string;

    stonepitchingconditionNeeded: string;

    needForWalkingTrack: string;
}

export interface futureActivities {
    activitiesUndertaken: string;
    otherActivityDesc: string;
}
export interface inletParameter {
    inletCount: number;
    inletParameter: string;
    inletList: inlet[]
}
export interface inlet {
    conditionOfInlet: string;
    natureOfInlet: string
    slitTrap: string
}
export interface outletParameter {
    outletCount: number;
    outletParameter: string;

    outletList: outlet[]
}
export interface outlet {
    conditionOfOutlet: string;
    natureOfOutlet: string
    slitTrap: string;
}
export interface fenceParameter {
    conditionOfFence: string;
    fence: string;
    presenceOfFencing: string
    typeOfFence: string
}
export interface image {
    id: number;
    image: string;
    description: string;
    latitude: string;
    longitude: string;
}
export interface GpsCordinates {
    lat: number;
    long: number;
    count: number;
    point: string;
}
