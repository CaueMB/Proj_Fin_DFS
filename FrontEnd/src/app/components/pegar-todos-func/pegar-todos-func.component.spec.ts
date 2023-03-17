import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarTodosFuncComponent } from './pegar-todos-func.component';

describe('PegarTodosFuncComponent', () => {
  let component: PegarTodosFuncComponent;
  let fixture: ComponentFixture<PegarTodosFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarTodosFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegarTodosFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
