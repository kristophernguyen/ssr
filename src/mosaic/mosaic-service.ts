import * as rm from 'typed-rest-client';
import Logger from '../helper/logger';
import { Attachment } from '../model/attachment';
import { AttachmentRequest } from '../model/AttachmentRquest';
import { ImageSize } from '../model/imagesize';

export default class MosaicService {
    private _pdsRestClient: rm.RestClient;
    constructor(pdsRestClient: rm.RestClient) {
        this._pdsRestClient = pdsRestClient;
    }
    public getAttachment = async (listingId: number): Promise<Attachment | null> => {
        try {
            const pdsRequest = {} as AttachmentRequest;
            pdsRequest.Ids = [];
            pdsRequest.Size = [];
            pdsRequest.Attachments = [
                1, 4, 38, 10, 34, 33, 6, 16, 9, 11, 12, 47, 49, 3, 69, 41, 42, 43, 55, 8, 35, 2, 45, 7
            ];
            pdsRequest.Ids.push(listingId);
            pdsRequest.Size.push(ImageSize.HighDefinition);

            const restRes: rm.IRestResponse<Attachment> = 
            await this._pdsRestClient.create<Attachment>('/listing/attachments', pdsRequest);
            return restRes.result;
        } catch (error) {
            Logger.info(`POST - getAttachment` + error);
            return null;
        }
    }
}
