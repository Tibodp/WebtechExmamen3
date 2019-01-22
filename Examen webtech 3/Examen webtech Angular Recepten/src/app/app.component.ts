import { Component } from '@angular/core';
import { EersteService } from './eerste.service';

@Component({
  selector: 'app-root',
  providers: [EersteService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  result_q: string;
  result_a: string;
  check: boolean;
  tussen: string;
  receptnaam: string;
  receptcalorie: number;
  receptingridient: string;
  recepttijd: number;
  uitleg: string;

  constructor() { }

  onSubmit() {
    this.check = false;

    for (let i = 0; i < localStorage.length; i++) {
      this.tussen = localStorage.key(i).toString();
      console.log(this.tussen);
      if (this.tussen == this.receptnaam) {
        this.result_a = localStorage.getItem(this.receptnaam);
        this.check = true;
      }
    }
    if (!this.check) {
      this.uitleg = '{ "Receptnaam" : ' + this.receptnaam + '; "Receptcalorie" : ' + this.receptcalorie + '; "Receptingridient" : ' + this.receptingridient + '; "Bereidingstijd" : ' + this.recepttijd + '}';
      localStorage.setItem(this.receptnaam, this.uitleg);
    }

  }
}