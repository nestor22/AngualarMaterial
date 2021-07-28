import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  
  
  constructor(private fb:FormBuilder, private _snackBar:MatSnackBar, private router:Router) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario === 'ngonzalez' && password ==='admin123'){
      //redireccion al dasboard
      this.fakeLogin()

    }else{
      //mostramos mensajes de error 
      this.error()
      this.form.reset();
    }
  }

  error(){
    
    this._snackBar.open('Error, Usuario o password erroneo!', 'Aceptar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }


  fakeLogin(){
    this.loading = true; // disable patch
    setTimeout(()=>{
      //redireccionamiento al
      this.router.navigate(['dashboard'])
    }, 2000)
  }
}
