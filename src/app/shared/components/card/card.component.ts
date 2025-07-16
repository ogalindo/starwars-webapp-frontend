import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name!: string;
  @Input() uid!: string;
  @Input() url!: string;
  @Output() open = new EventEmitter<string>();

  onClick() {
    this.open.emit(this.uid); // emite el UID
  }
}
