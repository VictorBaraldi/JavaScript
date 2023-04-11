export default class Timeout {
    id;
    handler;
    start;
    timeLeft;
    constructor(handler, time) {
        this.id = setTimeout(handler, time);
        this.handler = handler;
        this.start = Date.now();
        this.timeLeft = time;
    }
    clear() {
        clearTimeout(this.id);
    }
    pause() {
        const passed = Date.now() - this.start;
        this.timeLeft = this.timeLeft - passed;
        console.log(this.timeLeft);
        this.clear();
    }
    continue() {
        this.clear();
        this.id = setTimeout(this.handler, this.timeLeft);
        this.start = Date.now();
    }
}
//# sourceMappingURL=TImeout.js.map