import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsamplesComponent } from './mobsamples.component';

describe('MobsamplesComponent', () => {
  let component: MobsamplesComponent;
  let fixture: ComponentFixture<MobsamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobsamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobsamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
