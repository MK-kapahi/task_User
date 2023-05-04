import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { REGEX } from 'src/app/common/constant';

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

  constructor(private formBuilder : FormBuilder , private toaster : ToastrService){
    this.profileForm = this.formBuilder.group({
      iD :["",Validators.compose([Validators.required])],
      name : ["", Validators.compose([Validators.required ,Validators.pattern(REGEX.USERNAME)])], 
      email :  ["", Validators.compose([Validators.required , Validators.pattern(REGEX.EMAIL)])],
      phoneNo : ["",Validators.compose([Validators.required , Validators.pattern('^[6-9]\\d{9}$')])],
      state : ["",Validators.compose([Validators.required])]
    })

  }

  // Adding new User
  submit()
  {
    if(this.profileForm.valid)
    {
    console.log(this.profileForm.value);
       this.UserArray.push(this.profileForm.value);
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
        name: user.name,
        email : user.email,
        phoneNo: user.phoneNo,
        state: user.state 
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
    user.name = this.profileForm.value['name']
    user.email = this.profileForm.value['email']
    user.phoneNo = this.profileForm.value['phoneNo']
    user.state = this.profileForm.value['state']

    this.UserArray[this.index]=user;
    }

    this.toaster.success('User update successfull', " success", {
      titleClass: "center",
      messageClass: "center",
    })
    this.profileForm.reset()
    
  }


}
