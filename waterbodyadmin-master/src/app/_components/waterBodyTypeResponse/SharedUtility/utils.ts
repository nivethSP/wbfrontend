import { FormGroup } from "@angular/forms";
import { BundFunctionality, BundIssue, BundStonePitching, HydrologicDetail, HydrologicPrioritySourceSupplyDetail, HydrologicSourceSupplyDetail, ParticularDetail, RiverStreamDetail, Source1Detail, Source1SupplyDetail, SpreadInvasiveSpecieIssue, SpreadIssue, StreamIssue, WaterBodySluiceDetail, WaterBundDetail, WaterSpreadAreaDetail } from "src/app/_model/ResponseEntity";


export default class Utils {
    static getParticularsDetail(
        particularsForm : FormGroup, 
        waterbodyType: string,
        createdBy: string) : ParticularDetail {
        let detail: ParticularDetail = {
            uniqueid: particularsForm.get("uniqueid")?.value,
            taluk: particularsForm.get("taluk")?.value,
            block: particularsForm.get("block")?.value,
            panchayat: particularsForm.get("panchayat")?.value,
            village: particularsForm.get("village")?.value,
            surveyno: particularsForm.get("surveyno")?.value,
            waterbodytype: waterbodyType,
            ownership: particularsForm.get("ownership")?.value,
            tanktype: particularsForm.get("tanktype")?.value,
            status: 'Draft',
            createdBy: createdBy,
        }
        console.log(detail);
        return detail;
      }
      static getHydrologicalDetail(
        hydrologicalResponseForm : FormGroup, 
        surveyResponseId: string,
        createdBy: string,
        hydrologicsupplySources: HydrologicSourceSupplyDetail[],
        PrioritySources: HydrologicPrioritySourceSupplyDetail[]) : HydrologicDetail {
        let detail: HydrologicDetail = {
            surveyResponse: surveyResponseId,
            tankName: hydrologicalResponseForm.get("tankName")?.value,
            waterspreadArea: hydrologicalResponseForm.get("waterspreadArea")?.value,
            registeredAyacut: hydrologicalResponseForm.get("registeredAyacut")?.value,
            capacity: hydrologicalResponseForm.get("capacity")?.value,
            numberoffillings: hydrologicalResponseForm.get("numberoffillings")?.value,
            firstmonthfilling: hydrologicalResponseForm.get("firstmonthfilling")?.value,
            waterAvailability: hydrologicalResponseForm.get("waterAvailability")?.value,
            monthdryup: hydrologicalResponseForm.get("monthdryup")?.value,
            numberofsources: hydrologicalResponseForm.get("numberofsources")?.value,
            catchmentType: hydrologicalResponseForm.get("catchmentType")?.value,
            Sources: hydrologicsupplySources,
            PrioritySources: PrioritySources,
            createdBy: createdBy,
        }
        console.log(detail);
        return detail;
      }
      static getSource1SupplyDetail(
        surveyResponseId: string,
        createdBy: string,
        Sources1: Source1Detail[]) : Source1SupplyDetail {
        let detail: Source1SupplyDetail = {
            surveyResponse: surveyResponseId,
            Sources1: Sources1,
            createdBy: createdBy,
        }
        console.log(detail);
        return detail;
      }
    static getRiverStreamDetail(
        surveyResponseId: string,
        riverStreamResponseForm : FormGroup, 
        createdBy: string, 
        issues: StreamIssue[]) : RiverStreamDetail {
        let detail: RiverStreamDetail = {
          surveyResponse: surveyResponseId,
          riverName: riverStreamResponseForm.get("riverName")?.value,
          bednature: riverStreamResponseForm.get("bednature")?.value,
          contributiontypepercentage: riverStreamResponseForm.get("contributiontypepercentage")?.value,
          seassonstart: riverStreamResponseForm.get("seassonstart")?.value,
          seassonend: riverStreamResponseForm.get("seassonend")?.value,
          streamtype: riverStreamResponseForm.get("streamtype")?.value,
          streamtopwidth: riverStreamResponseForm.get("streamtopwidth")?.value,
          streambed: riverStreamResponseForm.get("streambed")?.value,
          streamdepth: riverStreamResponseForm.get("streamdepth")?.value,
          createdBy: createdBy,
          Issues: issues
        }
        console.log(detail);
        return detail;
      }
      static getWaterSpreadAreaDetail(
        surveyResponseId: string,
        waterSpreadResponseForm : FormGroup, 
        createdBy: string, 
        issues: SpreadIssue[],
        species: SpreadInvasiveSpecieIssue[]) : WaterSpreadAreaDetail {
        let detail: WaterSpreadAreaDetail = {
          surveyResponse: surveyResponseId,
          spreadpercentage: waterSpreadResponseForm.get("spreadpercentage")?.value,
          createdBy: createdBy,
          SpreadAreaIssues: issues,
          SpreadAreaSpecies: species
        }
        console.log(detail);
        return detail;
      }
      static getWaterBundDetail(
        surveyResponseId: string,
        bundResponseForm : FormGroup, 
        createdBy: string, 
        issues: BundIssue[],
        functionalites: BundFunctionality[],
        pitchings: BundStonePitching[]) : WaterBundDetail {
        let detail: WaterBundDetail = {
          surveyResponse: surveyResponseId,
          bundlength: bundResponseForm.get("bundlength")?.value,
          bundtopwidth: bundResponseForm.get("bundlength")?.value,
          slopefrontside: bundResponseForm.get("slopefrontside")?.value,
          sloperearside: bundResponseForm.get("sloperearside")?.value,
          stonepitchingcondition: bundResponseForm.get("stonepitchingcondition")?.value,
          revetmentlength: bundResponseForm.get("revetmentlength")?.value,
          presenceofbundrevetment: bundResponseForm.get("presenceofbundrevetment")?.value,
          presenceofrevetment: bundResponseForm.get("presenceofrevetment")?.value,
          createdBy: createdBy,
          BundIssues: issues,
          Functionalites: functionalites,
          Pitchings: pitchings
        }
        console.log(detail);
        return detail;
      }
      static getWaterBodySluiceDetail(
        surveyResponseId: string,
        sluiceResponseForm : FormGroup, 
        createdBy: string) : WaterBodySluiceDetail {
        let detail: WaterBodySluiceDetail = {
          surveyResponse: surveyResponseId,
          sluicenumber: sluiceResponseForm.get("sluicenumber")?.value,
          sluicetype: sluiceResponseForm.get("sluicetype")?.value,
          sluiceIrrigatedArea: sluiceResponseForm.get("sluiceIrrigatedArea")?.value,
          silllevelDepth: sluiceResponseForm.get("silllevelDepth")?.value,
          barrelType: sluiceResponseForm.get("barrelType")?.value,
          shutterType: sluiceResponseForm.get("shutterType")?.value,
          sluicecondition: sluiceResponseForm.get("sluicecondition")?.value,
          shuttercondition: sluiceResponseForm.get("shuttercondition")?.value,
          sluicefeedanywaterbody: sluiceResponseForm.get("sluicefeedanywaterbody")?.value,
          waterbodyname: sluiceResponseForm.get("waterbodyname")?.value,
          fieldchannel: sluiceResponseForm.get("fieldchannel")?.value,
          fieldchannellength: sluiceResponseForm.get("fieldchannellength")?.value,
          fieldchannelType: sluiceResponseForm.get("fieldchannelType")?.value,
          fieldchannelbandwidth: sluiceResponseForm.get("fieldchannelbandwidth")?.value,
          fieldchannelheight: sluiceResponseForm.get("fieldchannelheight")?.value,
          createdBy: createdBy,
        }
        console.log(detail);
        return detail;
      }
}