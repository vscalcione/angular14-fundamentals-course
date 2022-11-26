import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareBracketsComponent } from './square-brackets.component';

describe('SquareBracketsComponent', () => {
  let component: SquareBracketsComponent;
  let fixture: ComponentFixture<SquareBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
