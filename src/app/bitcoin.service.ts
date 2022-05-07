import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  BRL: {
    rate_float: number;
  };
}

@Injectable()
export class BitcoinService {
  current: Response;
  list: Array<Response>;

  constructor(private http: HttpClient) {}

  init() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe(data) => {
        this.current = data;
        this.list.push(data);

        this.update();
      });
  }

  update() {
    setInterval(() => {
      this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe(data) => {
        if(this.current.BRL.rate_float != data.BRL.rate_float ) {
        this.list.push(data);
        this.current = data;
        }
    }, 60000);
  }
}
