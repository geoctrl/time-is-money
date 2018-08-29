import { brady } from '../brady/brady';

class Wizard {
  constructor() {
    this.stepAttendees();
  }
  config = {};
  stepAttendees() {
    brady.talk({ msg: 'Welcome!', face: '', wait: 2000 })
  }
  stepAverageSalary() {

  }
}

export { Wizard }