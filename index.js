export default class TimeAsRandom {
  constructor(deep = 16) {
    return (this.deep = deep), this.encode.bind(this);
  }

  time() {
    return new Date().getTime();
  }

  random() {
    return +(Math.random() + '').match(/\d{13}$/).shift();
  }

  encode() {
    return (this.time() + this.random()).toString(this.deep);
  }
}
