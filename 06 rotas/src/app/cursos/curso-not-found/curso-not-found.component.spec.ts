import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNotFoundComponent } from './curso-not-found.component';

describe('CursoNotFoundComponent', () => {
  let component: CursoNotFoundComponent;
  let fixture: ComponentFixture<CursoNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
