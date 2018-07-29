import { Application, Sprite } from 'pixi.js';
import { decimalToHex } from './utils/color-utils';
import { throttle } from 'lodash-es';

class _Canvas {
  element = null;

  mount(el) {
    const element = el.getBoundingClientRect();
    this.element = el;
    this.app = new Application(
      this.element.width,
      this.element.height,
      {
        backgroundColor: 0x1099bb,
        autoResize: true,
        resolution: devicePixelRatio,
      }
    );
    (el || document.body).appendChild(this.app.view);
    // temp bunny thing
    const bunny = Sprite.fromImage('bunny.png');
    console.log(bunny);
    bunny.anchor.set(0.5);
    bunny.x = this.app.screen.width / 2;
    bunny.y = this.app.screen.height / 2;
    this.app.stage.addChild(bunny);
    this.app.ticker.add(function(delta) {
      bunny.rotation += 0.01 * delta;
    });

    window.addEventListener('resize', this.throttleResize)
    this.resize();
  }

  resize = () => {
    this.app.renderer.resize(this.element.width, this.element.height);
  }

  throttleResize = throttle(this.resize.bind(this), 500);

  updateBackgroundColor(hex) {
    return this.app.renderer.backgroundColor = `0x${hex}`;
  }

  getBackgroundColor() {
    return decimalToHex(this.app.renderer.backgroundColor);
  }
}

const Canvas = new _Canvas();
export { Canvas };