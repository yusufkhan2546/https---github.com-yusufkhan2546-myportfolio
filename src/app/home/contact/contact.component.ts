import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
contactForm:FormGroup;
  constructor(private fb:FormBuilder,
               private router:Router) { }

  ngOnInit() {

this.contactForm = this.fb.group({
  name:['',[Validators.required,Validators.minLength(3)]],
  email:['',[Validators.required,Validators.email]],
  phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
  description:['',[Validators.required,Validators.minLength(50)]],
});

this.contactForm.markAllAsTouched();

  }
  submitEnquiry(){
    if(this.contactForm.valid){
      this.contactForm.reset();
      this.router.navigate([`/home`]);
    } else {
    
    }
  }
   Name():Boolean {
    return this.contactForm.get('name').valid && this.contactForm.get('name').touched ;
  }
 Phone():Boolean {
    return this.contactForm.get('phone').valid && this.contactForm.get('phone').touched ;
  }
 Email():Boolean {
    return this.contactForm.get('email').valid && this.contactForm.get('email').touched ;
  }
   Description():Boolean {
    return this.contactForm.get('description').valid && this.contactForm.get('description').touched ;
  }
  nameFun(){
    
  }

}
