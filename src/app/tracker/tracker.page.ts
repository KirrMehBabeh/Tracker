import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {
  started:Boolean=false;
  constructor() { }

  ngOnInit() {
  }
  start(){
    this.started=true;
  }
  stop(){
    this.started=false;
  }
}
