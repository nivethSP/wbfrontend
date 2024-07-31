export interface FieldReviewerResponse {
    id?:string;
    surveyNumber: string;
    waterbodyType: string;
    waterBodyAvailability: boolean;
    waterbodyId: string;
    waterbodyName: string;
    district: string;
    block: number;
    village: string;
    draft_status: number;
    verify_status: number;
    createdBy: string;
    createdDate: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
  }

  export interface FieldReviewerResponseDetail extends FieldReviewerResponse{
    waterParams?: string;
    gpsCordinates?: string;
    image:string;
  } 

  export interface WaterBodyImage {
    lat: string;
    long: string;
    img: string;
  }

  export interface WaterParamsDictionary
  {
    key: string;
    value: string;
  }
  export interface ConnectionTypeMap{
    connection: Map<string, string>;
  }
