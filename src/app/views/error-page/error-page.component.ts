import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Error');
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

}
