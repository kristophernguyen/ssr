import * as rm from 'typed-rest-client';
import * as dotenv from 'dotenv';
import MosaicService from '../../mosaic/mosaic-service';
import { Attachment } from '../../model/attachment';
import { Request } from 'hapi';
import { AttachmentType } from '../../model/attachmenttype';
import { AttachmentItem } from '../../model/attachmentitem';
export default class ComponentController {
    constructor() {
        dotenv.config();
    }
    public getComponent(request: Request, reply: any): string {
        const viewName = request.params.name;
        return reply.view(viewName);
    }
    public async getMosaic(request: Request, reply: any): Promise<Attachment | null> {
        const listingIdStr = request.params.listingId;
        const listingId = parseInt(listingIdStr, 10);
        const deviceType = request.params.deviceType;
        const rest: rm.RestClient = new rm.RestClient('pds-dev', process.env.PDSServiceRoot);
        const biz = new MosaicService(rest);
        const result = await biz.getAttachment(listingId);
        let viewName = "mosaic";
        if (deviceType.toLowerCase() === 'mobile') {
            viewName = viewName + "_" + deviceType.toLowerCase();
        }
        return reply.view(viewName, result);
    }
    // private parseAttachment(attachments: Attachment) {
    //     let videoArray = [];
    //     let imageArray = [];
    //     if (attachments != null && attachments.Items != null && attachments.length > 0){
    //         for (const item of attachments.Items) {
                
    //         }
    //     }
    // }
    private is3dTour(item: AttachmentItem): boolean {
        let result = false;
        if (item.AttachmentType === AttachmentType.ThreeDimensionalScan) {
            result = true;
        }
        return result;
    }
    private isVideo(item: AttachmentItem): boolean {
        let result = false;
        if (item.AttachmentType === AttachmentType.CommercialListingVideo || 
            item.AttachmentType === AttachmentType.ProVideoLoopNet ||
            item.AttachmentType === AttachmentType.AerialVideo ||
            item.AttachmentType === AttachmentType.ThermalVideo ||
            item.AttachmentType === AttachmentType.UavVideo
            ) {
            result = true;
        }
        return result;
    }

}
