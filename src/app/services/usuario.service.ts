import { Injectable } from '@angular/core';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: usuario[] = [
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

  constructor() {}

  getUusuario() {
    return this.listUsuarios.slice();
  }
}
