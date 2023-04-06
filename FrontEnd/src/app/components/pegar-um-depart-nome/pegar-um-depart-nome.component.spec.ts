import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarUmDepartNomeComponent } from './pegar-um-depart-nome.component';

describe('PegarUmDepartNomeComponent', () => {
  let component: PegarUmDepartNomeComponent;
  let fixture: ComponentFixture<PegarUmDepartNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarUmDepartNomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegarUmDepartNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
