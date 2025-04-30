import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, NgZone, OnInit } from '@angular/core';
import { connect } from 'rxjs';

@Component({
  selector: 'app-exercise-stop-wwatch',
  imports: [DatePipe],
  templateUrl: './exercise-stop-wwatch.component.html',
  styleUrl: './exercise-stop-wwatch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseStopWwatchComponent implements OnInit{
  private destroy = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  elapsedTime = 0;
  isRunning = false;
  timerId: any;
  logs: {date: Date; elaspedTime: number}[]= [];

  get debugOutput(){
    console.log('[exerciseStopWatchComponent] generated');

    return  '';
  }

  ngOnInit(): void {

    console.log('ngOnInit called: component initialized');

  }

  // ngOnDestroy(): void {
  //   if (this.isRunning){
  //     clearInterval(this.timerId);
  //     this.timerId = null;
  //   }
  //   console.log('ngOnDestroy called: component destroyed');

  // }

  startStopWatchHandler(){
    if(!this.isRunning){
      this.isRunning = true;
      this.ngZone.runOutsideAngular(() => {
        this.timerId = setInterval(() => {
          console.log("elapsed time: ", this.elapsedTime / 1000);
          this.elapsedTime += 1000;
          this.ngZone.run(() =>{
            this.cdr.markForCheck();
          })
        }, 1000);
      })
    }

    this.destroy.onDestroy(() =>{
      console.log('destroyref called: component destroyed timer cleared');
      clearInterval(this.timerId);
    })
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


