import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  goHome(): void {
    this.router.navigate(['/veiculos'], { relativeTo: this.activatedRoute })
  }
}
