import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComaprendComponent } from './comaprend.component';

describe('ComaprendComponent', () => {
  let component: ComaprendComponent;
  let fixture: ComponentFixture<ComaprendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComaprendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComaprendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
