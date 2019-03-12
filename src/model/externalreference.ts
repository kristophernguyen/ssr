export interface IExternalReferences {
    Items: IExternalReferencesItem[];
}
export interface IExternalReferencesItem {
    Key: string;
    Uri: string;
    ExternalReferenceType: number;
}
