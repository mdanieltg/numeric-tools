import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-panel',
  templateUrl: './base-panel.component.html',
  styleUrls: ['./base-panel.component.css']
})
export class BasePanelComponent {
  identifier = `id-${Math.random()}`;
  @Input() content = '';
  @Input() panelCaption = 'Panel';
  @Input() actionCaption = 'Acción';
  @Input() hasAction = true;
  @Output() actionEvent = new EventEmitter<string>();

  copy(input: HTMLTextAreaElement): void {
    input.select();
    input.focus();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);
  }

  clear(input: HTMLTextAreaElement): void {
    this.content = '';
    input.focus();
  }

  action(): void {
    this.actionEvent.emit(this.content);
  }
}
