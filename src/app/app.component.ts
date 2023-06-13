import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public stepDisplay = {
    info: true,
    login: false,
  };

  public form = this._fb.group({
    info: this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    }),
    login: this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }),
  });

  get infoForm(): FormGroup {
    return this.form.controls.info;
  }
  get LoginForm(): FormGroup {
    return this.form.controls.login;
  }
  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((value) => {
      return {
        ...value,
        valid: this.form.valid,
      };
    })
  );

  constructor(private _fb: FormBuilder) {}

  goToStep(step: string) {
    this.stepDisplay.info = false;
    this.stepDisplay.login = false;

    this.stepDisplay[step] = true;
  }
}
