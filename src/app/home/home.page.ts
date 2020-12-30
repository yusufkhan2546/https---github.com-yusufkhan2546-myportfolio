import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 device;
  constructor(private deviceService: DeviceDetectorService,
              private router:Router) {}
  ngOnInit(){
    this.device = this.deviceService.isMobile();
    console.log(this.device);
    
  }
  segmentChanged(event){
console.log(event.detail.value);
        this.router.navigate([`/home/`+event.detail.value]);
  }
}
