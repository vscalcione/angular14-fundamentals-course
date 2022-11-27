import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlersComponent } from './handlers.component';

describe('HandlersComponent', () => {
  let component: HandlersComponent;
  let fixture: ComponentFixture<HandlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
