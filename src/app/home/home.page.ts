import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,AfterViewInit{
  @ViewChild('segment') $segment:IonSegment;
 device;
  constructor(private deviceService: DeviceDetectorService,
              private router:Router) {}
  ngOnInit(){
    this.device = this.deviceService.isMobile();
    console.log(this.device,this.$segment);
  }
  ngAfterViewInit(){
    console.log(this.$segment,'imexecuting');
     let url = this.router.url;
   
     url = url.slice(6,url.length);
     console.log(url);
     if(this.$segment){
       if(url.length>0){
        this.$segment.value = url ;
       }
       else{
         this.$segment.value ='home';
       }
    
     }
  
  }
  segmentChanged(event){
console.log(event.detail.value);
    if(event.detail.value === 'home'){
      this.router.navigate([`/home`]);
    } else{
      this.router.navigate([`/home/`+event.detail.value]);
    }
     
  }
}
