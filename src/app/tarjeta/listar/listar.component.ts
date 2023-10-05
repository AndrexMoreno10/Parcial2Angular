import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { environment } from 'src/app/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { TarjetaService } from '../tarjeta.service';
import { Tarjetas } from '../tarjetas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

tarjetas: Tarjeta[] = []


constructor(private listarService: TarjetaService,private router:Router) {

}

ngOnInit(): void {
  this.listarService.getListarTarjetas().subscribe((tarjetasLlamadas : Tarjetas ) => {
    this.tarjetas = tarjetasLlamadas.tarjetas;
    console.log(tarjetasLlamadas)
  })
}

irAEditar(id?: string){
  this.router.navigate(['/Editar',id])
}




}
