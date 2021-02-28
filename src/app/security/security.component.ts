import { Component, OnInit } from '@angular/core';
import { SafeUrl,DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  unsafeUrl = 'javascript:alert("Ok");';
  unsafeYoutube = 'https://www.youtube.com/watch?v=-kUEcH4or6c';
  safeurl: SafeUrl | undefined;
  safeYuotube: SafeResourceUrl | undefined;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeurl = this.domSanitizer.bypassSecurityTrustUrl(this.unsafeUrl);
    this.safeYuotube = this.domSanitizer.bypassSecurityTrustResourceUrl(this.unsafeYoutube);
  }

}
