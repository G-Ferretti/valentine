import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-moving-button',
  imports: [
    Button,
    NgStyle
  ],
  templateUrl: './moving-button.component.html',
  styleUrl: './moving-button.component.css',
  standalone: true
})
export class MovingButtonComponent {

  selectedLabel: string = 'No'
  labels: string[] = ['Riprova', 'Nope', "Un'altra volta", 'Skill issue', 'Troppo lenta']

  buttonOptions = {
    position: 'relative',
    top: '0px',
    left: '0px',
  }

  moveButton() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    this.buttonOptions.position = 'absolute';
    this.buttonOptions.top = `${y}px`;
    this.buttonOptions.left = `${x}px`;

    const value = Math.floor(Math.random() * 100 % 5);
    this.selectedLabel = this.labels[value];

  }
}
