import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { NgStyle, NgTemplateOutlet } from "@angular/common";
import { NgxBentoItemComponent } from "./ngx-bento-item.component";

@Component({
  selector: 'om-bento-grid',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgStyle
  ],
  templateUrl: "./ngx-bento-grid.component.html",
  styleUrl: "./ngx-bento-grid.component.scss",
})
export class NgxBentoGridComponent {
  @ContentChildren(NgxBentoItemComponent) items!: QueryList<NgxBentoItemComponent>;

  @Input() colPattern: number[] = [];
  @Input() rowPattern: number[] = [];

  @Input() set columns(v: number) {
    this.style['--om-bento-columns'] = String(v);
    if (!this.colPattern || this.colPattern.length <= 0) this.colPattern = this.getDefaultPattern(v);
  }

  @Input() set gap(v: string) {
    this.style['--om-bento-gap'] = v;
  }

  @Input() set rowHeight(v: string) {
    this.style['--om-bento-row-height'] = v;
  }

  @Input() set itemRadius(v: string) {
    this.style['--om-bento-item-radius'] = v;
  }

  @Input() set itemBorder(v: string) {
    this.style['--om-bento-item-border'] = v;
  }

  @Input() set itemBg(v: string) {
    this.style['--om-bento-item-bg'] = v;
  }

  @Input() set shadowColor(v: string) {
    this.style['--om-bento-shadow-color'] = v;
  }

  style: Record<string, string> = {};

  constructor() {
    if (!this.colPattern || this.colPattern.length <= 0) this.colPattern = this.getDefaultPattern(this.getColumnCount());
  }

  getColSpan(item: NgxBentoItemComponent, index: number): string | undefined {
    const span = item.colSpan ?? this.colPattern![index % this.colPattern!.length] ?? 1;
    return span > 1 ? `span ${span}` : undefined;
  }

  getRowSpan(item: NgxBentoItemComponent, index: number): string | undefined {
    const span = item.rowSpan ?? this.rowPattern![index % this.rowPattern!.length] ?? 1;
    return span > 1 ? `span ${span}` : undefined;
  }

  private getColumnCount(): number {
    const col = parseInt(this.style['--om-bento-columns'] || '3', 10);
    return isNaN(col) ? 3 : col;
  }

  private getDefaultPattern(columns: number): number[] {
    switch (columns) {
      case 1:
        return [1];
      case 2:
        return [1, 2];
      case 3:
        return [1, 2, 2];
      case 4:
        return [1, 2, 2, 1];
      default:
        return Array.from({length: columns}, (_, i) => (i % 2) + 1);
    }
  }
}
