import {Subject} from 'rxjs/Subject';

export class ActivatedRouteStub {
  private subject = new Subject();

  get params() {
    return this.subject.asObservable();
  }

  push(value) {
    this.subject.next(value);
  }

}
