import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodialogComponent } from './cursodialog.component';

describe('CursodialogComponent', () => {
  let component: CursodialogComponent;
  let fixture: ComponentFixture<CursodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursodialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
