import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoggersService } from "../loggers.service";


@Component({
  selector: 'app-bregister',
  templateUrl: './bregister.component.html',
  styleUrls: ['./bregister.component.css']
})
export class BRegisterComponent implements OnInit {
bid
private userForm:FormGroup
private user:any
private errorMessage:string

private users:any[]

constructor(private builder:FormBuilder,private service:LoggersService) {
  this.buildForm()
}

  ngOnInit() {
    this.bid='BDY-'+Math.round((Math.random())*1000000)
    this.service.fetchUsers((data)=>{
      this.users = data
    })
  }
  buildForm() {
    this.userForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',[
        Validators.required,
        Validators.email
      ]
    ]
    })
  }
  save(){
    if(this.userForm.status !='INVALID'){
      this.user={
        name: this.userForm.controls['name'].value,
        email: this.userForm.controls['email'].value
      }
      // Add a new User 
      this.service.buildAndCreateUser({ 
        name:this.user.name,
        email:this.user.email
      },(err)=>{
        if(err! =null){
          console.log('Unable to Process request')
          // re load users
          this.service.fetchUsers((users)=>{
            this.users = users
          })
        }else{
          // re load users
          this.service.fetchUsers((users)=>{
            this.users = users
          })
        }
      })
    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }
  
}
