import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { ExerciseFormComponent } from '../exercise-form/exercise-form.component';
import { ExerciseItemComponent } from '../exercise-item/exercise-item.component';

@Component({
  selector: 'app-exercise-list',
  imports: [ExerciseFormComponent, ExerciseItemComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseListComponent {
  private exerciseService = inject(ExerciseService);

  get debugOutput(){
    console.log('[exerciseListComponent] generated');

    return  '';
  }

  exercises = this.exerciseService.getExercises();
}
