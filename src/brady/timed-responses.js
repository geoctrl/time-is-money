import { usd } from '../core/utils';
import { Subject } from 'rxjs';


class TimedResponses {
  constructor() {
    // subscribe to money and time
    // this.time = time;
    // this.money = money

    this.time = {};
    this.money = 4.5
    this.eventStream = new Subject();
    setTimeout(() => {
      this.eventStream.next(this.api.small[1][0]);
    }, 2000)
  }

  api = {
    start: [
      `We're rolling now, son.`,
      `Starting it up.`,
      `We're a go.`,
      `Hold on to your butts.`,
    ],
    small: [
      [
        { face: 'laugh-big', msg: `you're not done yet?`, duration: 4 },
        { face: 'laugh-small', msg: `jk`, duration: 4 },
      ],
      [
        { face: 'confused', msg: `I'm bored...`, duration: 7 },
        { face: 'surprised', msg: `Are you done yet?`, duration: 7 },
        { face: 'surprised-sad', msg: `How about now?`, duration: 7 },
        { face: 'sad', msg: `You guys are so.....slow...`, duration: 5 },
      ],
      [
        { face: '', msg: ``, duration: 7 },
        { face: '', msg: ``, duration: 7 },
        { face: '', msg: ``, duration: 7 },
        { face: '', msg: ``, duration: 7 },
        { face: '', msg: ``, duration: 7 },
      ],
    ],
    medium: [],
    large: [
      [
        { face: '', msg: `Holy crap, you've spent over ${usd(this.money)}...`, duration: 7 },
        { face: '', msg: `Your mother would be disappointed.`, duration: 7 },
      ],
      [
        { face: '', msg: `You guys must really like meetings.`, duration: 7 },
      ],
      [
        { face: '', msg: ``, duration: 7 },
      ],
    ],
    generic: [
      [
        { face: '', msg: `Wanna know how much money you've wasted?`, duration: 6 },
        { face: '', msg: `press the "Calculate Waste" button!`},
      ],
    ],
  }



  getObserver() {
    return this.eventStream;
  }
}

export const timedResponses = new TimedResponses();