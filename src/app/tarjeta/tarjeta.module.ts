import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarjetaService } from './tarjeta.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    EditarComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  providers:[
    TarjetaService
  ]
})
export class TarjetaModule { 

}
