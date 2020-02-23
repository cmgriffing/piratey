import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPostComponent } from './media-post.component';

describe('MediaPostComponent', () => {
  let component: MediaPostComponent;
  let fixture: ComponentFixture<MediaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediaPostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
