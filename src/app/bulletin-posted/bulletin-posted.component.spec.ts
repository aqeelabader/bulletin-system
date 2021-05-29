import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinPostedComponent } from './bulletin-posted.component';

describe('BulletinPostedComponent', () => {
  let component: BulletinPostedComponent;
  let fixture: ComponentFixture<BulletinPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinPostedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
