import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';

@Component({
  selector: 'tc-form-email',
  templateUrl: './tc-form-email.component.html',
  styleUrls: ['./tc-form-email.component.scss']
})
export class TcFormEmailComponent implements OnInit {

  formEmail: FormGroup = this.fb.group({
    mailTo: ['', [Validators.required, CustomFormValidators.emailValidator]],
    mailSubject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(protected fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
