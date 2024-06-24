import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiversCreateComponent } from './receivers-create.component';

describe('ReceiversCreateComponent', () => {
  let component: ReceiversCreateComponent;
  let fixture: ComponentFixture<ReceiversCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiversCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiversCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
