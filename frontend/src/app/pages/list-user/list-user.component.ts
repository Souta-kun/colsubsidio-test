import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
        this.spinner.stop();
        this.users = result;
      },
      (error) => {
        this.spinner.stop();
      }
    );

    this.isEmpty = this.users.length == 0;
  }
}
