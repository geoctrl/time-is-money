import { Subject } from 'rxjs';
import { isArray } from 'lodash-es';

class Brady {
  queue = [];
  talking = false;
  currentChat = {};
  listen = new Subject();
  talk(chat) {
    if (isArray(chat)) {
      this.queue = this.queue.concat(chat);
    } else {
      this.queue.push(chat);
    }
    if (!this.talking) {
      this.startTalking();
    }
  }
  startTalking() {
    if (!this.queue.length) {
      this.talking = false;
      return;
    }
    this.talking = true;
    const nextChat = this.queue.slice(0, 1)[0];
    this.queue = this.queue.slice(1);
    if (!nextChat.msg) {
      this.listen.next({
        face: nextChat.face,
        msg: this.currentChat.msg,
      });
    } else {
      this.currentChat = nextChat;
      nextChat.msg.split('').reduce((buildMsg, next) => {
        const nextMsg = buildMsg + next;
        this.listen.next({
          face: nextChat.face,
          msg: nextMsg
        });
        return nextMsg;
      }, '');
    }
    setTimeout(() => {
      this.startTalking();
    }, nextChat.wait * 1000);
  }
}

const brady = new Brady();
export { brady };