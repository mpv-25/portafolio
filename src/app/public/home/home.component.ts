import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../../core/shared/services/portafolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private portafolioService: PortafolioService) {
    this.portafolioService.getSkills().subscribe((resp) => {});
  }

  ngOnInit(): void {}
}
