import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  navigationExtras = {
    state: {
      value: null
    }
  };

  employee: any = null;
  /*
  employee = null as any; tambien se puede poner asi
  */
  employeeForm!: FormGroup;
  private isEmail = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.['value'];
    this.initForm();
   }

  ngOnInit(): void {
    /*this.initForm();*/
    /*si no hay usuario va a nuevo*/ 
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['new']);
      /*si hay nos lo muestra*/
    } else {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave(): void {
    console.log('Saved', this.employeeForm.value);
  }

  private initForm(): void {
    this.employeeForm = this.fb.group ({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    })
  }

  onGoBackToList():void{
    this.router.navigate(['list']);
  }

}
