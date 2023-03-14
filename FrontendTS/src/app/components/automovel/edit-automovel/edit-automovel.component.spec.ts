import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutomovelComponent } from './edit-automovel.component';

describe('EditAutomovelComponent', () => {
  let component: EditAutomovelComponent;
  let fixture: ComponentFixture<EditAutomovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAutomovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAutomovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
