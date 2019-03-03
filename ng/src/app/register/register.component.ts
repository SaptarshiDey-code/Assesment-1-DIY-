import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoggersService } from "../loggers.service";
import { ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private NuserForm:FormGroup
  private Nuser:any
  private errorMessage:string
  
  private Nusers:any[]

  constructor(private route:ActivatedRoute,private builder:FormBuilder,private service:LoggersService,private router : Router) {
    this.buildForm()
  }
userType:any
ngOnInit(){
  this.service.fetchUsers((data)=>{
    this.Nusers = data
  })
}

buildForm() {
  this.NuserForm = this.builder.group({
    name: ['',Validators.required],
    email: ['',[
      Validators.required,
      Validators.email
    ]
  ],
  mobile:['',Validators.required],
  gender:[''],
  usertype:[''],
  password:['',Validators.required]

  })
}

save(){
  if(this.NuserForm.status !='INVALID'){
    this.Nuser={
      name: this.NuserForm.controls['name'].value,
      email: this.NuserForm.controls['email'].value,
      mobile:this.NuserForm.controls['mobile'].value,
      gender:this.NuserForm.controls['gender'].value,
      usertype:this.NuserForm.controls['usertype'].value,
      password:this.NuserForm.controls['password'].value
    }
    // Add a new User 
    this.service.buildAndCreateUser({ 
      name:this.Nuser.name,
      email:this.Nuser.email,
      mobile:this.Nuser.mobile,
      gender:this.Nuser.gender,
      usertype:this.Nuser.usertype,
      password:this.Nuser.password
    },(err)=>{
      if(err! =null){
        console.log('Unable to Process request')
        // re load users
        this.service.fetchUsers((users)=>{
          this.Nusers = users
        })
      }else{
        // re load users
        this.service.fetchUsers((users)=>{
          this.Nusers = users
        })
      }
    })
  }else{
    this.errorMessage = 'Please verify your errors'
  }
  this.router.navigate(['/login'])
}
}