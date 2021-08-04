import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';



const ELEMENT_DATA: usuario[] = [
  {usuario: 'ngonzalez', nombre: 'Nestor', apellido: 'Gonzaelz', sexo: 'H'},

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
