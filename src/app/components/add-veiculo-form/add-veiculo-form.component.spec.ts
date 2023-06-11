import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeiculoFormComponent } from './add-veiculo-form.component';

describe('AddVeiculoFormComponent', () => {
  let component: AddVeiculoFormComponent;
  let fixture: ComponentFixture<AddVeiculoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeiculoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
