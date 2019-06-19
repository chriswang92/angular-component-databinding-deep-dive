import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'test content!'}];
  gameElements: number[] = [/*{type: 'Odd', value: '123'}*/];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  //Assignment4
  onGameStarted(value: number) {
    // if (value % 2 === 0) {
    //     this.evenNumbers.push(value);
    // } else {
    //   this.oddNumbers.push(value);
    // }
    this.gameElements.push(
      // type: gameData.type,
      value
    );
}

  onGameStopped() {

  }
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Name Changed!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
