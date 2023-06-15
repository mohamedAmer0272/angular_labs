import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTrackComponent } from './select-track.component';

describe('SelectTrackComponent', () => {
  let component: SelectTrackComponent;
  let fixture: ComponentFixture<SelectTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTrackComponent]
    });
    fixture = TestBed.createComponent(SelectTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
