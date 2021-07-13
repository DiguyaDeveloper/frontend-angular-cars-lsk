import { ToastService } from './../../../shared/components/toast/toast.service';
import { VeiculeInterface } from './../../interface/veicule.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register-veicule',
  templateUrl: './register-veicule.component.html',
  styleUrls: ['./register-veicule.component.scss']
})
export class RegisterVeiculeComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  fileToUpload: File;
  destroy$: Subject<boolean> = new Subject<boolean>();
  veicule: VeiculeInterface;
  colors;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {}

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.ngCreateForm();
    this.colors = [
      { key: 'branco', value: 'Branco' },
      { key: 'azul', value: 'Azul' },
      { key: 'vermelho', value: 'Vermelho' }
    ];
  }

  ngCreateForm(): void {
    this.form = this.fb.group({
      plate: ['', Validators.required],
      proprietary: ['', Validators.required],
      manufacturer: ['', [Validators.required]],
      color: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.toastService.success(
        'Preencha os campos obrigatórios'
      );
      return;
    }

    const file = this.fileToUpload;

    // this.veiculeService
    //   .postVeicule({}, file)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(
    //     (resData) => {
    //       console.log('rez', resData);
    //       this.toastService.success(
    //         'Preencha os campos obrigatórios'
    //       );
    //     },
    //     (error) => {
    //       if (error.status === 500) {
    //         this.toaster.show('error', 'Falha!', 'Erro interno de servidor');
    //         return;
    //       }
    //       if (error.status === 400 && error.id === 1) {
    //         this.toaster.show(
    //           'warning',
    //           'Alerta!',
    //           'E-mail já cadastrado, verifique seu email'
    //         );
    //         this.router.navigateByUrl('auth/login');
    //       } else if (error.status === 400 && !error.id) {
    //         this.toaster.show('warning', 'Alerta!', 'Houve um erro genérico');
    //       } else {
    //         this.toaster.show('error', 'Falha!', error.error.erro);
    //       }
    //     }
    //   );
  }
}
