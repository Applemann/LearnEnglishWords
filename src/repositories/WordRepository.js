import { writable } from 'svelte/store';

export default class WordRepository {
  constructor() {
    return this;
  }

  async getWords() {
    const res = await fetch(`http://drakeman.cz/english-words.json`);
    var photos = await res.json();
    return photos
  }
}
