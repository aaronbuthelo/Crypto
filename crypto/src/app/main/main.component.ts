import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
objectKeys = Object.keys;
cryptos: any;
  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
  }

}
