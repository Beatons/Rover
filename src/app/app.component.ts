import { Component, OnInit } from '@angular/core';
import { Rover } from './rover';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gridSize = '5 5';
  opportunityStartPoint = '1 2 N';
  curriosityStartPoint = '3 3 E';
  curriosityInstructions = 'MMRMMRMRRM';
  opportunityInstructions = 'LMLMLMLMM';
  opportunity;
  curriosity;

  ngOnInit () {
    this.passNewStartingPossition();
    this.passNewInstructions();
  }
  passNewInstructions():void {
    this.opportunity.instructions(this.opportunityInstructions);
    this.curriosity.instructions(this.curriosityInstructions);
    
  }
  passNewStartingPossition() {
    this.opportunity = new Rover(this.opportunityStartPoint);
    this.curriosity = new Rover(this.curriosityStartPoint);
  }
}


