import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoggersService {

  private _url:string = 'http://localhost:4200'
  constructor(private http:HttpClient){ }

  fetchUsers(callback) {
    // fetch data from backend /server side
    this.http
    .get(this._url+'/users')
    .subscribe(data=>{
      callback(data)
    },error=>{
      console.log('Unable to load data ',error)
    })
    //return users
 }
  getMaxId(callback){
    this.http
    .get(this._url+'/Nuser/find/id/max')
    .subscribe(data=>{
      callback(data)
    },error=>{
      console.log('Unable to Process the request: '+error)
    })
   }

  createUser(userObj:any,callback){
    this.http
    .post(this._url+'/Nuser/add',userObj).subscribe(response=>{
      callback(null)
    },error=>{
      callback(error)
    })
   }
   buildAndCreateUser(Nuser:any,callback){
    this.getMaxId((data)=>{
      // build user object
      let NuserObj:any ={
        _id: parseInt(data.maxId) + 1,
        name: Nuser.name,
        email: Nuser.email,
        mobile:Nuser.mobile,
        gender:Nuser.gender,
        user_type:Nuser.user_type,
        password:Nuser.password
      }
      this.createUser(NuserObj,(err)=>{
        callback(err)
      })
    })
   }
  }
  

