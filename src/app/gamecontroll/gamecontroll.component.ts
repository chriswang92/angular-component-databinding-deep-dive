import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontroll',
  templateUrl: './gamecontroll.component.html',
  styleUrls: ['./gamecontroll.component.css']
})
export class GamecontrollComponent implements OnInit {

  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() gameStarted = new EventEmitter<{serverName: string, serverContent: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  count = 0;
  ref;
  onStartGame() {
    this.ref = setInterval(function() { this.count++ }, 1000);
    this.gameStarted.emit(this.ref);
  }

  onStopGame() {
    clearInterval(this.ref);
  }
}
