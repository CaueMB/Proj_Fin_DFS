import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirDepartComponent } from './inserir-depart.component';

describe('InserirDepartComponent', () => {
  let component: InserirDepartComponent;
  let fixture: ComponentFixture<InserirDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
