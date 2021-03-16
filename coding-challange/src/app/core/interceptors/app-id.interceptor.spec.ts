import {TestBed} from '@angular/core/testing';

import {AppIdInterceptor} from './app-id.interceptor';

describe('AppIdInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppIdInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: AppIdInterceptor = TestBed.inject(AppIdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
