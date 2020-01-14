import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  // beforeEach(() => TestBed.configureTestingModule({ }));

  it('should perform http post to /signin with email and password', () => {
    // const service: AuthService = TestBed.get(AuthService);
    const email = 'email';
    const password = 'password';
    const httpClientStub: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj(
      'http',
      ['post']
    );
    const authService = new AuthService(httpClientStub);
    httpClientStub.post.and.returnValue(of());

    authService.login(email, password);

    expect(httpClientStub.post).toHaveBeenCalledWith(`${environment.baseUrl}/signin`, { email, password });
    // expect(service).toBeTruthy();
  });
});
