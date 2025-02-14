import {Component, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {NgParticlesService, NgxParticlesModule} from '@tsparticles/angular';
import { loadSlim } from "@tsparticles/slim";
import {heartEmitter} from './assets/particles';
import {Button} from 'primeng/button';
import {NgClass} from '@angular/common';
import {MovingButtonComponent} from './moving-button/moving-button.component';
import {loadHeartShape} from '@tsparticles/shape-heart';



@Component({
  selector: 'app-root',
  imports: [CardModule, NgxParticlesModule, Button, MovingButtonComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements OnInit {
  constructor(private readonly particlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.particlesService.init(async (engine) => {
      await loadSlim(engine);
      await loadHeartShape(engine);
    });
  }

  cardMessage: string = "Vuoi essere la mia Valentina?"

  noWasClicked: boolean = false;
  sheSaidYes: boolean = false;

  positiveAsnwer(): void {
    this.sheSaidYes = true;
    this.cardMessage = "Grazie amossita!!"
  }

  negativeAsnwer(): void {
    this.noWasClicked = true;
  }

  readonly options = heartEmitter
}
