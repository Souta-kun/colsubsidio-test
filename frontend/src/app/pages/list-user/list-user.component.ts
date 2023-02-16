import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  users: UserModel[] = [];
  isEmpty: boolean = true;
  form: FormGroup;

  constructor(
    private _userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxUiLoaderService
  ) {
    this.form = fb.group({
      name: new FormControl(null),
      email: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSearch() {
    let { name, email } = this.form.value;

    this.spinner.start();
    this._userService.getUsers(name, email).subscribe(
      (result) => {
        console.log(result);
        this.spinner.stop();
        this.users = result;
        this.isEmpty = result.length == 0;
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
