import { AttributeModel } from './attribute.modal';

export class IdentityModel {
  constructor(
    public IDSchemaVersion: number,
    public fullName: AttributeModel[],
    public dateOfBirth: string,
    public gender: AttributeModel[],
    public addressLine1: AttributeModel[],
    public residenceStatus: AttributeModel[],
    public addressLine2: AttributeModel[],
    public addressLine3: AttributeModel[],
    public nationalId: AttributeModel[],
    public maritalStatus: AttributeModel[],
    public occupation: AttributeModel[],
    public religion: AttributeModel[],
    public guardianName: AttributeModel[], // Guardian's full name
    public guardianRelationship: string,   // Guardian's relationship to the individual
    public guardianContact: AttributeModel[]  // Guardian's contact information
  ) {}
}
