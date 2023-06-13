import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeiculoButtonComponent } from './add-veiculo-button.component';

describe('AddVeiculoButtonComponent', () => {
  let component: AddVeiculoButtonComponent;
  let fixture: ComponentFixture<AddVeiculoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeiculoButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVeiculoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
