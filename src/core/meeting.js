import { Subject } from 'rxjs';
import moment from 'moment';

class _Meeting {
  meeting = new Subject();
  meetingStart = null;
  meetingInterval = null;
  meetingDuration = null;

  get() {
    return this.meeting;
  }
  start = () => {
    this.meetingStart = moment();
    this.meetingInterval = setInterval(this.update, 99);
  }
  update = () => {
    this.meetingDuration = moment.duration(moment().diff(this.meetingStart));
  }
  end = () => {
    clearInterval(this.meetingInterval);
    this.meetingInterval = null;
  }
}

export const Meeting = new _Meeting();