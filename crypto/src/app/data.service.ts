import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: any;
  constructor(private http: Http) { }

  getPrices() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&ids=BTC,ETH,DOGE,USDT,LTC,ZEC,DASH,XRP,XMR,BCH,OMG,QTUM,ETC,NEO,TRX,ADA,EOS,HT,LINK,ALGO,NANO,LSK,DGB,SXP,ABBC,EKT,BTG,HOT,ZB,VSYS,RVN,ZRX,DCR,QTUM,TUSD,VET,HEDG,PAX,ONT,BAT,CRO,ATOM,XTZ,MKR&interval=1d,30d&convert=USD')
     .map(result => this.result = result.json());
  }
}
