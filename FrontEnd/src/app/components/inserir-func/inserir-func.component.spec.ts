import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFuncComponent } from './inserir-func.component';

describe('InserirFuncComponent', () => {
  let component: InserirFuncComponent;
  let fixture: ComponentFixture<InserirFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
