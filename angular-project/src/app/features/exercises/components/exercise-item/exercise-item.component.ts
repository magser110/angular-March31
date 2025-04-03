import { Component, inject, input } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { Exercise } from '../../../../shared/models/exercise.model';
import { ExerciseStopWwatchComponent } from '../exercise-stop-wwatch/exercise-stop-wwatch.component';

@Component({
  selector: 'app-exercise-item',
  imports: [ExerciseStopWwatchComponent],
  templateUrl: './exercise-item.component.html',
  styleUrl: './exercise-item.component.css'
})
export class ExerciseItemComponent {
  private exerciseService = inject(ExerciseService);

  data = input<Exercise>();

  removeExerciseHandler(){
    this.exerciseService.removeExercise(this.data()!.name);
  }
}
