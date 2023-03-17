import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarUmDepartComponent } from './pegar-um-depart.component';

describe('PegarUmDepartComponent', () => {
  let component: PegarUmDepartComponent;
  let fixture: ComponentFixture<PegarUmDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarUmDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegarUmDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
