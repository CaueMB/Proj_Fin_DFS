import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarUmFuncComponent } from './pegar-um-func.component';

describe('PegarUmFuncComponent', () => {
  let component: PegarUmFuncComponent;
  let fixture: ComponentFixture<PegarUmFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarUmFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegarUmFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
