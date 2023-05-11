import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { REGEX } from 'src/app/common/constant';
import { CurdOperationService } from 'src/app/core/service/curd-operation.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  profileForm!: FormGroup;
  UserArray: any = [];
  updateButtonShow: boolean = false;
  index = 0;

  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private employeeservice: CurdOperationService
  ) {
    this.profileForm = this.formBuilder.group({
      iD: [''],
      employeeName: ['', Validators.compose([Validators.required])],
      departments: ['', Validators.compose([Validators.required])],
      salary: ['', Validators.compose([Validators.required])],
    });
  }

  // Adding new User
  submit() {
    if (this.profileForm.valid) {
      this.employeeservice
        .addEmployee(this.profileForm.value)
        .subscribe((response) => {
          this.UserArray.push(response)
          this.toaster.success('User Added successfully', ' success', {
            titleClass: 'center',
            messageClass: 'center',
          });
        });
      this.profileForm.reset();
    } else {
      Object.keys(this.profileForm.controls).forEach((key) =>
        this.profileForm.controls[key].markAsTouched({ onlySelf: true })
      );
    }
  }

  // patching value to form for updating user details
  update(event: any) {
    for (let user of event) {
      this.index = this.UserArray.indexOf(user);
      this.profileForm.patchValue({
        iD: user._id,
        employeeName: user.employeeName,
        departments: user.departments,
        salary: user.salary,
      });
    }

    this.updateButtonShow = true;
  }

  // adding Updated value
  updateUser(id: string) {
    this.employeeservice
      .updateEmployee(id, this.profileForm.value)
      .subscribe((response) => {
        console.log(response);
        this.toaster.success('User update successfull', ' success', {
          titleClass: 'center',
          messageClass: 'center',
        });

        this.profileForm.reset();
        this.updateButtonShow = false;
      });
  }
}
