import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

    cryptos: any;
  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
  }

}
