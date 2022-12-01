import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        finalize(() => {}),
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }

          console.log(error);

          console.log(error.status)
          console.log(window.location.pathname)

          if ((error.status == 401 || error.status == 403) && window.location.pathname != '/login') {
            Swal.fire({
              title: 'Sesión expirada',
              text: 'Vuelve a ingresar para seguir usando la plataforma',
              icon: 'warning',
            }).then((result) => {
              localStorage.clear();
              window.location.href = '/login';
              return throwError(() => errorMessage);
            });
          } else {
            Swal.fire('', error.error.message, 'error');
            return throwError(() => errorMessage);
          }

          return throwError(() => errorMessage);
        })
      );
  }
}
