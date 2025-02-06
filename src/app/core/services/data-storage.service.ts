import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as appConstants from "../../app.constants";
import { AppConfigService } from "../../app-config.service";
import { Applicant } from "../../shared/models/dashboard-model/dashboard.modal";
import { ConfigService } from "./config.service";
import { RequestModel } from "src/app/shared/models/request-model/RequestModel";
import { AuditModel } from "src/app/shared/models/demographic-model/audit.model";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  BASE_URL = this.appConfigService.getConfig()["BASE_URL"];
  PRE_REG_URL = this.appConfigService.getConfig()["PRE_REG_URL"];

  getI18NLanguageFiles(langCode: string) {
    return this.httpClient.get(`./assets/i18n/${langCode}.json`);
  }

  // ... existing methods ...

  saveRegistration(data: any): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}${this.PRE_REG_URL}save-registration`, data);
  }
}
