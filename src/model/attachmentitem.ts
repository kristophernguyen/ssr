import { EntityType } from "./entitytype";
import { ImageSize } from "./imagesize";
import {AttachmentType} from "./attachmenttype";
import { ExternalReferences } from "./externalreference";

export interface AttachmentItem {
    AttachmentMasterId:        number;
    EntityId:                  number;
    EntityType:                EntityType;
    ParentEntityId:            number;
    SortOrder:                 number;
    Width:                     number;
    Height:                    number;
    MasterWidth:               number;
    MasterHeight:              number;
    Size:                      ImageSize;
    RequestedSize:             number;
    ExternalReferences:        ExternalReferences;
    Uri:                       string;
    ContentType:               string;
    AttachmentType:            AttachmentType;
    AttachmentTypeDescription: string;
    Description:               string;
    FileExtension:             string;
}