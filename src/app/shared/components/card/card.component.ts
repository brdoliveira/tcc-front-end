import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() isTextRight: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
