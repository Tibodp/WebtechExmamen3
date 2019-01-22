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

  constructor(private EersteService: EersteService) { }

  onSubmit() {
    this.check = false;

    for (let i = 0; i < localStorage.length; i++) {
      this.tussen = localStorage.key(i).toString();
      console.log(this.tussen);
      if (this.tussen == this.result_q) {
        this.result_a = localStorage.getItem(this.result_q);
        this.check = true;
      }
    }
    if (!this.check) {
      this.result_a = this.EersteService.getAnswer();
      localStorage.setItem(this.result_q, this.result_a);
    }

  }
}