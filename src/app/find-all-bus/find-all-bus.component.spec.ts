import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllBusComponent } from './find-all-bus.component';

describe('FindAllBusComponent', () => {
  let component: FindAllBusComponent;
  let fixture: ComponentFixture<FindAllBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
