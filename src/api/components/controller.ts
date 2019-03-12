import * as rm from 'typed-rest-client';
import MosaicService from '../../mosaic/mosaic-service';
import { Attachment } from '../../model/attachment';
export default class ComponentController {
    constructor() {}
    getComponent(id:string):string{
        return '';
    }
    async getMosaic(id:number): Promise<Attachment | null>{
        let rest: rm.RestClient = new rm.RestClient('pds-dev', 'https://dev.loopnet.com');
        let biz = new MosaicService(rest);
        let result = biz.getAttachment(id);
        return result;

    }
}