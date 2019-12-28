export default class Word {
  constructor(text) {
    this.text = text;
    this.pronunciation = "";
    this.sound = "";
    this.sense = [];
    this.examples = [];
  }
  toString() {
    return this.text;
  }
}
