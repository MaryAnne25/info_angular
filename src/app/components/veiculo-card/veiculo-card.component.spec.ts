import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoCardComponent } from './veiculo-card.component';

describe('veiculoCardComponent', () => {
  let component: VeiculoCardComponent;
  let fixture: ComponentFixture<VeiculoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
