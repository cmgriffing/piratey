import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMediaComponent } from './media.component';

describe('HomeMediaComponent', () => {
  let component: HomeMediaComponent;
  let fixture: ComponentFixture<HomeMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMediaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
