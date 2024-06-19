import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningBacksComponent } from './running-backs.component';

describe('RunningBacksComponent', () => {
  let component: RunningBacksComponent;
  let fixture: ComponentFixture<RunningBacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningBacksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningBacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
