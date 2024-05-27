import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isSpinning: boolean = false;
  signupForm!:FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(){
    this.signupForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      checkPassword:['',[Validators.required,this.confirmationValidate]],

    })
  }
  confirmationValidate = (control:FormControl):{[s:string]:boolean}=>{
    if(!control.value){
      return{required:true};
    }else if(control.value!==this.signupForm.controls['password'].value){
      return {confirm:true,error:true};
    }
    return {};
  };
  register(){
    console.log(this.signupForm.value)
  }

}
