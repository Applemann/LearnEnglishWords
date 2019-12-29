export default class WordRepository {
  constructor() {
    return this;
  }

  getWords() {
    return JSON.parse(`
      [{
          "text": "Hello",
          "pronunciation": "həˈlō", 
          "sound": "sound.mp3",
          "sense": ["Ahoj", "Cau", "Dobry den"],
          "examples": [
              "I said hello to him",
              "hello, is anybody in?",
              "hello! did you even get what the play was about?"
          ]
      },
      {"text": "case", "pronunciation": "/\u02c8ke\u026as/", "sound": "sound.mp3", "sense": ["pouzdro", "p\u0159\u00edpad", "v\u011bc"], "examples": ["That was true in all three cases. [=instances]", "a cigarette/pencil case", "A couple of robbers decided to case the joint."]},
      {"text": "car", "pronunciation": "/\u02c8k\u0251\u025a/", "sound": "sound.mp3", "sense": ["auto", "osobn\u00ed automobil", "automobil"], "examples": ["I'll wait in the car.", "He got into the car and drove away.", "She bought a new car."]}
      ]
    `); 
  }

}
