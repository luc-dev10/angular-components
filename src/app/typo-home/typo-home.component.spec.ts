import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoHomeComponent } from './typo-home.component';

describe('TypoHomeComponent', () => {
  let component: TypoHomeComponent;
  let fixture: ComponentFixture<TypoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
