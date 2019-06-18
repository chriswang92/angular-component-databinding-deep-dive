import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-gamecontroll',
  templateUrl: './gamecontroll.component.html',
  styleUrls: ['./gamecontroll.component.css']
})
export class GamecontrollComponent implements OnInit {

  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() gameStarted = new EventEmitter<{type: string, val: number}>();
  @Output() gameStopped = new EventEmitter<{type: string, val: number}>();
  constructor() { 
    this.count = 0;
  }

  ngOnInit(): void {
  }

  count;
  ref;

  onStartGame() {
    this.count++;
    type: string;
    if(this.count % 2 == 0) {
      type = 'Even';
    }
    this.ref = setInterval(function() { this.count++ }, 1000);
    this.gameStarted.emit(this.ref);
  }

  onStopGame() {
    clearInterval(this.ref);
    this.gameStopped.emit(this.ref);
  }
}
