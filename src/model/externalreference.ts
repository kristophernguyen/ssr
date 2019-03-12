export interface ExternalReferences {
    Items: ExternalReferencesItem[];
}
export interface ExternalReferencesItem {
    Key:                   string;
    Uri:                   string;
    ExternalReferenceType: number;
}