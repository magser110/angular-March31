import { Component, inject } from '@angular/core';
import { ExerciseService } from '../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-list',
  imports: [],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  private exerciseService = inject(ExerciseService);

  exercises = this.exerciseService.getExercises();

  removeExerciseHandler(name: string){
    this.exerciseService.removeExercise(name);

  }

}
