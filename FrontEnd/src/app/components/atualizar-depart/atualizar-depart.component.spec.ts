import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDepartComponent } from './atualizar-depart.component';

describe('AtualizarDepartComponent', () => {
  let component: AtualizarDepartComponent;
  let fixture: ComponentFixture<AtualizarDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
