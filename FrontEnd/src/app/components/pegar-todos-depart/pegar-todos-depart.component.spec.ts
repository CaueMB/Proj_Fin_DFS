import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarTodosDepartComponent } from './pegar-todos-depart.component';

describe('PegarTodosDepartComponent', () => {
  let component: PegarTodosDepartComponent;
  let fixture: ComponentFixture<PegarTodosDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarTodosDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegarTodosDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
