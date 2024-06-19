import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TightEndsComponent } from './tight-ends.component';

describe('TightEndsComponent', () => {
  let component: TightEndsComponent;
  let fixture: ComponentFixture<TightEndsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TightEndsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TightEndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
