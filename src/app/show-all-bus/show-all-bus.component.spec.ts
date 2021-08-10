import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBusComponent } from './show-all-bus.component';

describe('ShowAllBusComponent', () => {
  let component: ShowAllBusComponent;
  let fixture: ComponentFixture<ShowAllBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
