import { usd } from '../core/utils';
import { Subject } from 'rxjs';

class TimedResponses {
  constructor() {
    // subscribe to money and time
    // this.time = time;
    // this.money = money

    this.time = {};
    this.money = 4.5
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
        { face: 'laugh-big', msg: `you're not done yet?`, wait: 4 },
        { face: 'laugh-small', msg: `jk`, wait: 4 },
      ],
      [
        { face: 'confused', msg: `I'm bored...`, wait: 7 },
        { face: 'surprised', msg: `Are you done yet?`, wait: 7 },
        { face: 'surprised-sad', msg: `How about now?`, wait: 7 },
        { face: 'sad', msg: `You guys are so.....slow...`, wait: 5 },
      ],
      [
        { face: '', msg: ``, wait: 7 },
        { face: '', msg: ``, wait: 7 },
        { face: '', msg: ``, wait: 7 },
        { face: '', msg: ``, wait: 7 },
        { face: '', msg: ``, wait: 7 },
      ],
    ],
    medium: [],
    large: [
      [
        { face: '', msg: `Holy crap, you've spent over ${usd(this.money)}...`, wait: 7 },
        { face: '', msg: `Your mother would be disappointed.`, wait: 7 },
      ],
      [
        { face: '', msg: `You guys must really like meetings.`, wait: 7 },
      ],
      [
        { face: '', msg: ``, wait: 7 },
      ],
    ],
    generic: [
      [
        { face: '', msg: `Wanna know how much money you've wasted?`, wait: 6 },
        { face: '', msg: `press the "Calculate Waste" button!`},
      ],
    ],
  }

}

export const timedResponses = new TimedResponses();