import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarUmFuncNomeComponent } from './pegar-um-func-nome.component';

describe('PegarUmFuncNomeComponent', () => {
  let component: PegarUmFuncNomeComponent;
  let fixture: ComponentFixture<PegarUmFuncNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarUmFuncNomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegarUmFuncNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
