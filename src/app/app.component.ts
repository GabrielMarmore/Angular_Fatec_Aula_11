import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Bitcoin App';

  constructor(public bitcoinService: BitcoinService) {
    this.bitcoinService.init();
  }

  NgOnInit() {}
}
