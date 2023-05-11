import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CurdOperationService } from 'src/app/core/service/curd-operation.service';

@Component({
  selector: 'app-tabel-view',
  templateUrl: './tabel-view.component.html',
  styleUrls: ['./tabel-view.component.scss']
})
export class TabelViewComponent implements OnInit  {


  userData : any =[]
  constructor(private toaster : ToastrService, private employeeService : CurdOperationService){
    this.employeeService.getEmployee().subscribe((response)=>{
      this.userData=response
    })
  }
  ngOnInit(): void {
        this.userData = this.user
  }
  
  

  @Input() user :any;
  
  @Output() editRequest = new EventEmitter<any>();
  deleteUser(i:number , id :string)
  {
    this.employeeService.deleteEmployee(id).subscribe((response)=>{
      console.log(response)
      this.toaster.success('User Deleted successfull', " success", {
        titleClass: "center",
        messageClass: "center",
      })
    })
    this.user.splice(i,1);
  }

  editUser(user:any)
  {
   this.editRequest.emit(user)
  }
}


