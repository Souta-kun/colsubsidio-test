import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private _userService: UserService,
    private spinner: NgxUiLoaderService,
    private toastr: ToastrService
  ) {
    let phones = new FormArray([]);

    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
        ),
      ]),
      password: new FormControl(null, [Validators.required]),
      phones: phones,
    });
  }

  get controls() {
    return (<FormArray>this.userForm.get('phones')).controls;
  }

  ngOnInit(): void {}

  onDeleteUser(index: number) {
    (<FormArray>this.userForm.get('phones')).removeAt(index);
  }

  onAddPhone() {
    (<FormArray>this.userForm.get('phones')).push(
      new FormGroup({
        countryCode: new FormControl(null, [
          Validators.required,
          Validators.pattern(/[0-9]/),
        ]),
        cityCode: new FormControl(null, [
          Validators.required,
          Validators.pattern(/[0-9]/),
        ]),
        number: new FormControl(null, [
          Validators.required,
          Validators.pattern(/[0-9]/),
        ]),
      })
    );
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.toastr.warning('Debe completar los campos resaltados en rojo.');
      return;
    }

    this.spinner.start();

    this._userService.addUser(this.userForm.value).subscribe(
      (result) => {
        this.spinner.stop();
        this.userForm.reset();
        this.toastr.success('Registro Exitoso.');
      },
      (error) => {
        this.spinner.stop();
        this.toastr.error(
          'Ha ocurrido un error. Consulte con el administrador del sistema.'
        );
      }
    );
  }
}
