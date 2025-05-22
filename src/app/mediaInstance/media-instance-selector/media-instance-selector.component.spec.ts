import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaInstanceSelectorComponent } from './media-instance-selector.component';

describe('MediaInstanceSelectorComponent', () => {
  let component: MediaInstanceSelectorComponent;
  let fixture: ComponentFixture<MediaInstanceSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaInstanceSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaInstanceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
