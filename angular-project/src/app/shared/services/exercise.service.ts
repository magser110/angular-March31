import { Injectable, signal } from '@angular/core';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises = signal<Exercise[]>([
    {
    name: 'jog',
    duration: 30,
},
{
  name: 'push-ups',
  duration: 1,
}
]);

getExercises(){
  return this.exercises.asReadonly();
}

addExercise(n: string, d: number){
this.exercises.update(e => [...e, {name: n, duration: d}])
}

removeExercise(name:string){
  this.exercises.update(l => l.filter(e => e.name !== name ) )
      //l is the entire exercise list not singlular in the update method, e is the individual exercise in the filter method
}
}
