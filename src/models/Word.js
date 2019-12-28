export default class Word {
  constructor(text) {
    this.text = text;
    this.pronunciation = "";
    this.sound = "";
    this.sense = [];
    this.examples = [];
    this.known = "";
  }
  toString() {
    return this.text;
  }
}
