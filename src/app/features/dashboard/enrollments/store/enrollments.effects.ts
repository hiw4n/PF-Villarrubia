import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentsService } from '../../../../core/services/enrollments.service';

@Injectable()
export class EnrollmentsEffects {
  constructor(
    private actions$: Actions,
    private enrollmentsService: EnrollmentsService
  ) {}
  createEnrollment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.createEnrollment),
      concatMap((action) =>
        this.enrollmentsService.add(action.payload).pipe(
          map((data) => EnrollmentsActions.createEnrollmentSuccess({ data })),
          catchError((error) =>
            of(EnrollmentsActions.createEnrollmentFailure({ error }))
          )
        )
      )
    );
  });
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtramos de todas las acciones solo, las que son de tipo EnrollmentsActions.loadEnrollments
      ofType(EnrollmentsActions.loadEnrollments),
      // Luego concatenamos un nuevo observable
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // Reemplazamos el EMPTY por nuestro propio OBS que se encarga de ir a buscar la data a la DB
        this.enrollmentsService.get().pipe(
          // Manejar una respuesta satisfactoria
          map((data) => EnrollmentsActions.loadEnrollmentsSuccess({ data })),
          // Manejar una respuesta con error
          catchError((error) =>
            of(EnrollmentsActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  loadStudentsAndCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadStudentsAndCourses),
      concatMap(() =>
        this.enrollmentsService.getStudentsAndCourses().pipe(
          map((data) =>
            EnrollmentsActions.loadStudentsAndCoursesSuccess({ data })
          ),
          catchError((error) =>
            of(EnrollmentsActions.loadStudentsAndCoursesFailure({ error }))
          )
        )
      )
    );
  });
}
