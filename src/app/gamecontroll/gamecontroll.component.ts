import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontroll',
  templateUrl: './gamecontroll.component.html',
  styleUrls: ['./gamecontroll.component.css']
})
export class GamecontrollComponent implements OnInit {

  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() gameStarted = new EventEmitter<{type: string, value: number}>();
  @Output() gameStopped = new EventEmitter<{type: string, value: number}>();
  
  constructor() { 
    console.log('constructor called');
  }

  ngOnInit(): void {
  }

  emitFunction() {
    console.log('into setInterval');
      this.count++;
      this.type = this.count % 2 == 0 ? 'Even' : 'Odd';
      console.log('type to emit: ' + this.type + ', count to emit: ' + this.count);
      this.gameStarted.emit({type: this.type, value: this.count});
  }

  count = 0;
  type = 'No type set';
  onStartGame() {
    console.log('into onStartGame');
    var ref = setInterval(() => this.emitFunction(), 1000);
  }

  onStopGame() {
    // clearInterval(this.ref);
    // this.gameStopped.emit(this.ref);
  }
}
