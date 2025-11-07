import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'om-bento-item',
  template: '',
  standalone: true,
})
export class NgxBentoItemComponent {
  @ContentChild('bentoBg', {read: TemplateRef}) bgTpl!: TemplateRef<any>;
  @ContentChild('bentoFg', {read: TemplateRef}) fgTpl!: TemplateRef<any>;

  @Input() colSpan?: number;
  @Input() rowSpan?: number;
}
