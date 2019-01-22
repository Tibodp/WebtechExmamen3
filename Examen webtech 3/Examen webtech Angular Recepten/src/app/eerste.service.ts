import { Injectable } from '@angular/core';

@Injectable()
export class EersteService {

  private answers: string[] = new Array("It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.",
    "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy", "try again", "Ask again later.", "Better not tell you now.",
    "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no", "Outlook not so good.", "Very doubtful.")

  constructor() { }

  getAnswer(): string {
    let answer: string = '';

    let max: number = this.answers.length - 1;
    let min: number = 0;
    let range: number = max - min + 1;
    let rnd: number = (Math.random() * range) + min;
    answer = this.answers[Math.floor(rnd)];

    return answer;
  }
}