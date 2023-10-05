import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../tarjeta.service';
import { Tarjeta } from '../tarjeta';
import { Tarjetas } from '../tarjetas';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  titular: string = "";
numero: string = "";
fecha: string = "";
cvv: string = "";




  constructor(private tarjetaService: TarjetaService ) { }

ngOnInit(): void {
  this.tarjetaService.getListarTarjetas().subscribe((tarjetasLlamadas : Tarjetas ) => {
    tarjetasLlamadas.tarjetas;
    const objetoEncontrado = tarjetasLlamadas.tarjetas.find(objeto => objeto._id === idBuscado);
  })
}


  editarTarjeta() {
    const tarjeta: Tarjeta = {
  titular: this.titular,
  numero : this.numero,
  fecha : this.fecha,
  cvv : this.cvv
    }

    this.tarjetaService.editarTarjeta(tarjeta).subscribe(
      (response) => {
        alert('Tarjeta guardada con éxito');
      },
      (error) => {
        alert('Error al guardar la tarjeta: ' + error.message);
      }
    );
  }

}
