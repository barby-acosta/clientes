import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

const config = {
  apiKey: 'AIzaSyA5ilBCl3K_88U5hw-dtWz9rGNgUR25g98',
  authDomain: 'clientesdata-47c29.firebaseapp.com',
  databaseURL: 'https://clientesdata-47c29-default-rtdb.firebaseio.com',
  projectId: 'clientesdata-47c29',
  storageBucket: 'clientesdata-47c29.appspot.com',
  messagingSenderId: '626737442528',
  appId: '1:626737442528:web:5ceeb9a4c183349df52a85',
  measurementId: 'G-8TKVGY20L7'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clientes';

  ngOnInit() {
    const app = initializeApp(config);
  }
}
