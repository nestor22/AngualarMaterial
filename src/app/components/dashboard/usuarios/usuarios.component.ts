import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ELEMENT_DATA: usuario[] = [
    { usuario: 'ngonzalez', nombre: 'Nestor', apellido: 'Gonzaelz', sexo: 'H' },
    { usuario: 'agonzalez', nombre: 'Astrid', apellido: 'Gonzaelz', sexo: 'H' },
    { usuario: 'lnolasco', nombre: 'lilianan', apellido: 'Nolasco', sexo: 'H' },
    { usuario: 'dperez', nombre: 'Diego', apellido: 'Perez', sexo: 'H' },
    { usuario: 'aroque', nombre: 'andrea', apellido: 'Roque', sexo: 'H' },
    { usuario: 'eduque', nombre: 'edgar', apellido: 'duque', sexo: 'H' },
    { usuario: 'jdoe', nombre: 'John', apellido: 'Doe', sexo: 'H' },
    { usuario: 'ddiaz', nombre: 'dorian', apellido: 'diaz', sexo: 'H' },
    { usuario: 'mgevara', nombre: 'Melisa', apellido: 'guevara', sexo: 'H' },
    { usuario: 'btest', nombre: 'bernard', apellido: 'test', sexo: 'H' },
  ];
  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor() {
    //This is on porpost
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
