import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { connect } from 'rxjs';

@Component({
  selector: 'app-exercise-stop-wwatch',
  imports: [DatePipe],
  templateUrl: './exercise-stop-wwatch.component.html',
  styleUrl: './exercise-stop-wwatch.component.css'
})
export class ExerciseStopWwatchComponent implements OnInit, OnDestroy{
  elapsedTime = 0;
  isRunning = false;
  timerId: any;
  logs: {date: Date; elaspedTime: number}[]= [];

  ngOnInit(): void {

    console.log('ngOnInit called: component initialized');

  }

  ngOnDestroy(): void {
    if (this.isRunning){
      clearInterval(this.timerId);
      this.timerId = null;
    }
    console.log('ngOnDestroy called: component destroyed');

  }

  startStopWatchHandler(){
    if(!this.isRunning){
      this.isRunning = true;

      this.timerId = setInterval(() => {
        console.log("elapsed time: ", this.elapsedTime / 1000);
        this.elapsedTime += 1000;

      }, 1000)
    }
  }

  stopStopWatchHandler(){
    if(this.isRunning){
      this.isRunning = false;
      clearInterval(this.timerId)
      this.timerId = null;
      let date = new Date();
      this.logs.push({date: date, elaspedTime: this.elapsedTime});
      console.log(this.logs);
      this.elapsedTime = 0;

    }

  }
}


