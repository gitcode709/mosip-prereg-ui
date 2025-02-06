// ... existing imports ...
import { Address } from 'src/app/shared/models/demographic-model/address.model';

// ... existing class definition ...

  // Add these new fields to your uiFields array initialization
  private initForm() {
    this.uiFields = [
      // ... existing fields ...
      
      {
        id: 'guardianName',
        name: 'Guardian Name',
        type: 'string',
        controlType: 'text',
        required: true,
        maxLength: 100,
        validation: {
          required: true,
          whitespace: true
        }
      },
      {
        id: 'guardianAddress',
        name: 'Guardian Address',
        type: 'object',
        controlType: 'address',
        required: true,
        subFields: [
          { id: 'street', name: 'Street', type: 'string' },
          { id: 'city', name: 'City', type: 'string' },
          { id: 'state', name: 'State', type: 'string' },
          { id: 'postalCode', name: 'Postal Code', type: 'string' }
        ]
      },
      {
        id: 'guardianDob',
        name: 'Guardian Date of Birth',
        type: 'date',
        controlType: 'date',
        required: true,
        validation: {
          datePast: true
        }
      },
      {
        id: 'relationshipToGuardian',
        name: 'Relationship to Guardian',
        type: 'string',
        controlType: 'dropdown',
        required: true,
        options: [
          { value: 'parent', label: 'Parent' },
          { value: 'spouse', label: 'Spouse' },
          { value: 'sibling', label: 'Sibling' },
          { value: 'other', label: 'Other' }
        ]
      }
    ];
  }

  // ... existing methods ...

  private setFormControlValues() {
    // Add handling for new fields here
    if (this.user.request.demographicDetails.identity.guardianName) {
      this.uiFields.find(f => f.id === 'guardianName').value = 
        this.user.request.demographicDetails.identity.guardianName;
    }
    // ... existing code ...
  }

  private createIdentityJSONDynamic(includingBlankFields: boolean): any {
    // Add handling for new fields here
    if (this.user.request.demographicDetails.identity.guardianAddress) {
      identity[guardianAddress] = this.user.request.demographicDetails.identity.guardianAddress;
    }
    // ... existing code ...
  }

  private createRequestJSON(identity: any): any {
    // Add handling for new fields here
    request.demographicDetails.guardianInfo = {
      name: identity.guardianName,
      address: identity.guardianAddress,
      dob: identity.guardianDob,
      relationship: identity.relationshipToGuardian
    };
    return request;
  }
