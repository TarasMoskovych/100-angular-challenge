import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { testUser, User } from './user.model';

describe('UsersService', () => {
  let service: UsersService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    service.get()
      .subscribe((response: User[]) => {
        expect(response).toEqual([testUser]);
      });

    const req = httpController.expectOne(service['url']);
    expect(req.request.method).toBe('GET');
    req.flush([testUser]);
  });
});
