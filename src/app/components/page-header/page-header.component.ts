import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  goHome(): void {
    if(!this.router.url.includes('add-veiculo')){
      this.router.navigate(['/veiculos'], { relativeTo: this.activatedRoute });
    }
  }

  get isHomePage(): boolean {
    return this.router.url.includes('veiculos');
  }
}
