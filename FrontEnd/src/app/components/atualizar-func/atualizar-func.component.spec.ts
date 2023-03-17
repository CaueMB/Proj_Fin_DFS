import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFuncComponent } from './atualizar-func.component';

describe('AtualizarFuncComponent', () => {
  let component: AtualizarFuncComponent;
  let fixture: ComponentFixture<AtualizarFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
