import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationItemComponent } from './rotation-item.component';

describe('RotationItemComponent', () => {
  let component: RotationItemComponent;
  let fixture: ComponentFixture<RotationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
