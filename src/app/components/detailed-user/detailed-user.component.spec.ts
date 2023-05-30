import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedUserComponent } from './detailed-user.component';

describe('DetailedUserComponent', () => {
  let component: DetailedUserComponent;
  let fixture: ComponentFixture<DetailedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedUserComponent]
    });
    fixture = TestBed.createComponent(DetailedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
