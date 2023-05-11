import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { REGEX } from 'src/app/common/constant';
import { CurdOperationService } from 'src/app/core/service/curd-operation.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  profileForm !: FormGroup ;
  UserArray :any =[] ;
  updateButtonShow : boolean = false;
  index = 0;

  constructor(private formBuilder : FormBuilder , private toaster : ToastrService ,  private employeeservice : CurdOperationService){
    this.profileForm = this.formBuilder.group({
      iD : uuidv4(),
      employeeName : ["", Validators.compose([Validators.required ])], 
      departments :  ["", Validators.compose([Validators.required ])],
      salary : ["",Validators.compose([Validators.required])],
    })

  }

  // Adding new User
  submit()
  {
    if(this.profileForm.valid)
    {
    console.log(this.profileForm.value);
       this.UserArray.push(this.profileForm.value);
      //  this.employeeservice.addEmployee(this.profileForm.value).subscribe((response)=>{
      //   console.log(response)
      //  })
       this.toaster.success('User Added successfully', " success", {
        titleClass: "center",
        messageClass: "center",
      })
       this.profileForm.reset()
    }
    else
    {
      Object.keys(this.profileForm.controls).forEach(key=>this.profileForm.controls[key].markAsTouched({onlySelf:true}))
    }
  }


  // patching value to form for updating user details 
  update(event:any)
  {
    for(let user of event )
    {
      this.index = this.UserArray.indexOf(user)
      this.profileForm.patchValue({
        iD : user.iD,
        employeeName: user.employeeName,
        departments : user.departments,
        salary: user.salary
     })
    }

    this.updateButtonShow = true;
  }

  // adding Updated value
  updateUser(id:number)
  {
  let user = this.UserArray.find((arr:any)=>{ if(arr.iD===id)
    return arr })
    if(this.profileForm.valid)
    {
    user.iD = this.profileForm.value['iD']
    user.employeeName = this.profileForm.value['employeeName']
    user.departments = this.profileForm.value['departments']
    user.salary = this.profileForm.value['salary']
    this.UserArray[this.index]=user;
    this.toaster.success('User update successfull', " success", {
      titleClass: "center",
      messageClass: "center",
    })
    }

    this.profileForm.reset()
    this.updateButtonShow=false
  }


}
