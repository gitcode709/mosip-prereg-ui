import Utils from 'src/app/app.util';
import * as appConstants from '../../../app.constants';

export class RequestModel {
  version = appConstants.VERSION;
  requesttime = Utils.getCurrentDate();
  constructor(
    private id: string,
    private request: any,
    private metadata?: any
  ) {}
}
