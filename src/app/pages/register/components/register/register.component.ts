import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: any;
  password: any;
  email: any;

  requestModel: any = {}
  constructor(private registerService: RegisterService,
    private messageService: MessageService,
    public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.requestModel.username = this.username;
    this.requestModel.email = this.email;
    this.requestModel.password = this.password;

    this.registerService.saveUser(this.requestModel).subscribe(
      (response: any) => {
        if(response.success){
          this.messageService.add({severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarıyla oluşturulmuştur.'})
          this.ref.close();
        }
      }
    )
  }

}
