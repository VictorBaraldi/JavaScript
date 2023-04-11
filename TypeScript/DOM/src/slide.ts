import Timeout from './TImeout.js';

export default class Slide {
  container;
  slides;
  controls;
  time;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  paused: boolean;
  pausedTimeout: Timeout | null;
  thumbItens: HTMLElement[] | null;
  thumb: HTMLElement | null;
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.index = localStorage.getItem('activeSlide')
      ? Number(localStorage.getItem('activeSlide'))
      : 0;
    this.timeout = null;
    this.pausedTimeout = null;
    this.paused = false;
    this.thumbItens = null;
    this.thumb = null;

    this.init();
    this.slide = this.slides[this.index];
  }
  hide(element: Element) {
    element.classList.remove('active');
    if (element instanceof HTMLVideoElement) {
      element.currentTime = 0;
      element.pause();
    }
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[index];
    localStorage.setItem('activeSlide', String(this.index));
    if (this.thumbItens) {
      this.thumb = this.thumbItens[this.index];
      this.thumbItens.forEach((element) => element.classList.remove('active'));
      this.thumb.classList.add('active');
    }
    this.slides.forEach((element) => {
      this.hide(element);
    });
    this.slide.classList.add('active');
    if (this.slide instanceof HTMLVideoElement) {
      this.autoVideo(this.slide);
    } else {
      this.auto(this.time);
    }
  }

  autoVideo(video: HTMLVideoElement) {
    video.muted = true;
    video.play();
    let firstPlay = true;
    video.addEventListener('playing', () => {
      if (firstPlay) this.auto(video.duration * 1000);
      firstPlay = false;
    });
  }

  prev() {
    if (this.paused) return;
    const prev =
      this.index > 0 ? this.index - 1 : (this.index = this.slides.length - 1);
    this.show(prev);
  }
  auto(time: number) {
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
    if (this.thumb) this.thumb.style.animationDuration = `${time}ms`;
  }

  pause() {
    document.body.classList.add('paused');
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause();
      this.paused = true;
      this.thumb?.classList.add('paused');
      if (this.slide instanceof HTMLVideoElement) {
        this.slide.pause();
      }
    }, 300);
  }

  continue() {
    document.body.classList.remove('paused');
    this.paused = false;
    this.pausedTimeout?.clear();
    this.timeout?.continue();
    this.thumb?.classList.remove('paused');
    if (this.slide instanceof HTMLVideoElement) {
      this.slide.play();
    }
  }

  next() {
    if (this.paused) return;
    const next =
      this.index + 1 < this.slides.length ? this.index + 1 : (this.index = 0);
    this.show(next);
  }

  private addControls() {
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.innerText = 'Slide Anterior';
    nextButton.innerText = 'Próximo Slide';
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);
    this.controls.addEventListener('pointerdown', () => this.pause());
    document.addEventListener('pointerup', () => this.continue());
    document.addEventListener('touchend', () => this.continue());
    prevButton.addEventListener('pointerup', () => this.prev());
    nextButton.addEventListener('pointerup', () => this.next());
  }

  private addThumbItens() {
    const thumbContainer = document.createElement('div');
    thumbContainer.id = 'slide-thumb';
    for (let i = 0; i < this.slides.length; i++) {
      thumbContainer.innerHTML +=
        '<span><span class="thumb-item"></span></span>';
    }
    this.controls.appendChild(thumbContainer);
    this.thumbItens = Array.from(document.querySelectorAll('.thumb-item'));
  }

  private init() {
    this.addControls();
    this.addThumbItens();
    this.show(this.index);
  }
}
