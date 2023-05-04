import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tabel-view',
  templateUrl: './tabel-view.component.html',
  styleUrls: ['./tabel-view.component.scss']
})
export class TabelViewComponent {


  constructor(private toaster : ToastrService){}
  @Input() user :any;
  @Output() editRequest = new EventEmitter<any>();
  deleteUser(i:number)
  {
    this.user.splice(i,1);
    this.toaster.success('User Deleted successfull', " success", {
      titleClass: "center",
      messageClass: "center",
    })
  }

  editUser(user:any)
  {
   this.editRequest.emit(user)
  }
}


