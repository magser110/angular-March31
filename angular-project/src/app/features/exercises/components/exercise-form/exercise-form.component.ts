import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  imports: [FormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseFormComponent implements AfterViewInit{
  private exerciseService = inject(ExerciseService);

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  get debugOutput(){
    console.log('[exerciseFromComponent] generated');

    return  '';
  }

  ngAfterViewInit(): void {
    console.log('ngAfterviewInit called: form element available');
  }

  addExerciseHandler(name: string, duration: any){
    this.exerciseService.addExercise( name,  duration);
    console.log(name, duration);
    console.log(typeof duration);

    this.resetFormHandler();
  }

  resetFormHandler(){
    this.form().nativeElement.reset();
  }
}
