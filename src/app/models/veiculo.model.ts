export class Veiculo {
  constructor(id: string, placa: string, chassi: string, renavam: string, modelo: string, marca: string, ano: number) {
    this.id = id;
    this.placa = placa;
    this.chassi = chassi;
    this.renavam = renavam;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;

  }

  id: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}
