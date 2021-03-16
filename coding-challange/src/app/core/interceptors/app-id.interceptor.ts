import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppIdInterceptor implements HttpInterceptor {

  private apiKey = 'ca0f67a21d2316d475a667876303bf4b';

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const httpReq = request.clone({
        params: request.params.appendAll({'units': 'metric', 'appid': this.apiKey})
      }
    );
    return next.handle(httpReq);
  }
}
