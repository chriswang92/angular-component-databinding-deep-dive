import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontroll',
  templateUrl: './gamecontroll.component.html',
  styleUrls: ['./gamecontroll.component.css']
})
export class GamecontrollComponent implements OnInit {

  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output() gameStarted = new EventEmitter<{type: string, value: number}>();
  @Output() gameStarted = new EventEmitter<number>();
  // @Output() gameStopped = new EventEmitter<{type: string, value: number}>();
  
  constructor() { 
    console.log('constructor called');
  }

  ngOnInit(): void {
  }
 
  emitFunction() {
    console.log('into setInterval');
      this.count++;
      // this.type = this.count % 2 == 0 ? 'Even' : 'Odd';
      console.log('count to emit: ' + this.count);
      this.gameStarted.emit(this.count);
  }

  count: number = 0;
  // type = 'No type set';
  ref;
  onStartGame() {
    console.log('into onStartGame');
    this.ref = setInterval(() => this.emitFunction()
    // function() { {
    //   console.log('into setInterval');
    //     this.count++;
    //     // this.type = this.count % 2 == 0 ? 'Even' : 'Odd';
    //     console.log('count to emit: ' + this.count);
    //     this.gameStarted.emit(this.count);
    // }}
    , 1000);
  }

  onPauseGame() {
    clearInterval(this.ref);
    // this.gameStopped.emit(this.ref);
  }
}
