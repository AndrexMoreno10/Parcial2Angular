import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarjeta } from '../tarjeta';
import { environment } from 'src/app/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { TarjetaService } from '../tarjeta.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

titular: string = "";
numero: string = "";
fecha: string = "";
cvv: string = "";



  constructor(private tarjetaService: TarjetaService ) { }


  guardarTarjeta() {
    const tarjeta: Tarjeta = {
  titular: this.titular,
  numero : this.numero,
  fecha : this.fecha,
  cvv : this.cvv
    }

    this.tarjetaService.agregarTarjeta(tarjeta).subscribe(
      (response) => {
        alert('Tarjeta guardada con éxito');
      },
      (error) => {
        alert('Error al guardar la tarjeta: ' + error.message);
      }
    );
  }


  

}
