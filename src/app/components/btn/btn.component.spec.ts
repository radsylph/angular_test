import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponent } from './btn.component';

describe('BtnComponent', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnComponent]
    });
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
