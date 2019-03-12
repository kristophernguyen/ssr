import { IAttachmentItem } from "./attachmentitem";

export interface IAttachment {
    EntityType: number;
    Items: IAttachmentItem[];
}
