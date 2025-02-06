import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { UserModel } from '../../shared/models/demographic-model/user.modal';
import { DocumentTypeModel } from '../../shared/models/document-type.modal';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private loginId: string;
  usersChanged = new Subject<UserModel[]>();
  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();
  private users: UserModel[] = [];
  private regCenterId: string;
  sameAs = '';
  documentCategories: DocumentTypeModel[];

  // ... existing methods ...

  saveRegistration(user: UserModel) {
    return this.httpClient.post(`${this.BASE_URL}${this.PRE_REG_URL}save-registration`, user);
  }
}
