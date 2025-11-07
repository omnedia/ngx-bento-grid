# ngx-bento-grid

<a href="https://ngxui.com" target="_blank" style="display:flex;gap:.5rem;align-items:center;cursor:pointer;height:fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width:64px;height:64px;">
</a>

This library is part of the **NGXUI ecosystem**.<br>
View all available components at [ngxui.com](https://ngxui.com)

`@omnedia/ngx-bento-grid` provides a flexible, CSS-grid-based layout system inspired by “bento” UI patterns.
It lets you build asymmetric, content-rich grids with dynamic spans and simple content projection — ideal for
dashboards, galleries, and landing pages.

---

## Features

* Fully declarative bento grid built on CSS Grid
* Dynamic column and row spans per item (`colSpan`, `rowSpan`)
* Configurable repeating column/row patterns (`colPattern`, `rowPattern`)
* CSS variables for easy theme and spacing control
* Works standalone — no dependencies other than Angular
* Clean content projection using `ng-template` slots for background and foreground

---

## Installation

```bash
npm install @omnedia/ngx-bento-grid
```

---

## Usage

Import the component into your standalone component or Angular module:

```ts
import { NgxBentoGridComponent, NgxBentoItemComponent } from '@omnedia/ngx-bento-grid';

@Component({
  ...,
  imports: [NgxBentoGridComponent, NgxBentoItemComponent],
  standalone: true,
})
export class AppComponent {
}
```

---

### Basic Example

```html

<om-bento-grid [columns]="3">
  <om-bento-item>
    <ng-template #bentoBg>
      <img src="assets/bg1.png"/>
    </ng-template>

    <ng-template #bentoFg>
      <h3>Item 1</h3>
      <p>Some foreground text.</p>
    </ng-template>
  </om-bento-item>

  <om-bento-item>
    <ng-template #bentoBg>
      <app-globe></app-globe>
    </ng-template>

    <ng-template #bentoFg>
      <h3>Animated Globe</h3>
    </ng-template>
  </om-bento-item>

  <om-bento-item>
    <ng-template #bentoBg>
      <img src="assets/bg2.png"/>
    </ng-template>

    <ng-template #bentoFg>
      <h3>Large Tile</h3>
    </ng-template>
  </om-bento-item>
</om-bento-grid>
```

---

### Column and Row Patterns

You can define custom span patterns that automatically repeat across items.

```html

<om-bento-grid [columns]="3" [colPattern]="[1, 2, 2]" [rowPattern]="[1, 1, 2]">
  <om-bento-item>
    <ng-template #bentoBg>...</ng-template>
    <ng-template #bentoFg>1</ng-template>
  </om-bento-item>

  <om-bento-item>
    <ng-template #bentoBg>...</ng-template>
    <ng-template #bentoFg>2</ng-template>
  </om-bento-item>

  <om-bento-item>
    <ng-template #bentoBg>...</ng-template>
    <ng-template #bentoFg>3</ng-template>
  </om-bento-item>
</om-bento-grid>
```

If no `colPattern` is set, the component uses a sensible default based on the column count —
for example, `[1, 2, 2]` when `columns = 3`.

---

### Individual Item Overrides

Each `<om-bento-item>` can override its default span:

```html

<om-bento-item [colSpan]="3" [rowSpan]="2">
  <ng-template #bentoBg>...</ng-template>
  <ng-template #bentoFg><h3>Wide + Tall</h3></ng-template>
</om-bento-item>
```

---

### CSS Custom Properties

You can control grid layout and styling through CSS variables or Inputs:

```scss
.om-bento-grid {
  --om-bento-columns: 3;
  --om-bento-gap: 1rem;
  --om-bento-row-height: 22rem;
  --om-bento-item-radius: 0.75rem;
  --om-bento-item-border: 1px solid hsla(0, 0%, 100%, 0.1);
  --om-bento-item-bg: var(--surface-background);
  --om-bento-shadow-color: #ffffff1f;
}
```

---

## API

| Input         | Type       | Default                         | Description                       |
|---------------|------------|---------------------------------|-----------------------------------|
| `columns`     | `number`   | `3`                             | Number of grid columns            |
| `gap`         | `string`   | `'1rem'`                        | Gap between grid items            |
| `rowHeight`   | `string`   | `'22rem'`                       | Base height of each grid row      |
| `colPattern`  | `number[]` | auto-derived                    | Repeating pattern of column spans |
| `rowPattern`  | `number[]` | `[]`                            | Repeating pattern of row spans    |
| `itemRadius`  | `string`   | `'0.75rem'`                     | Border radius of each item        |
| `itemBorder`  | `string`   | `1px solid hsla(0,0%,100%,0.1)` | Border style                      |
| `itemBg`      | `string`   | `var(--surface-background)`     | Background color of each item     |
| `shadowColor` | `string`   | `#ffffff1f`                     | Inner shadow tint                 |

### `om-bento-item` Inputs

| Input     | Type     | Default     | Description                        |
|-----------|----------|-------------|------------------------------------|
| `colSpan` | `number` | `undefined` | Override column span for this item |
| `rowSpan` | `number` | `undefined` | Override row span for this item    |

---

## Example Layout

```html

<om-bento-grid [columns]="4" [colPattern]="[1, 2, 2, 1]" gap="1.25rem">
  <om-bento-item [colSpan]="2" [rowSpan]="2">
    <ng-template #bentoBg><img src="assets/hero.png"/></ng-template>
    <ng-template #bentoFg><h2>Hero Tile</h2></ng-template>
  </om-bento-item>
  <!-- more items... -->
</om-bento-grid>
```

---

## Styling

You can customize the appearance freely:

```scss
.om-bento-item {
  position: relative;
  border-radius: var(--om-bento-item-radius);
  border: var(--om-bento-item-border);
  background: var(--om-bento-item-bg);
  overflow: hidden;
  display: flex;
  align-items: end;
  justify-content: start;
  padding: 2rem;
}
```

---

## Contributing

Contributions are welcome!
Please open issues or pull requests on GitHub.

---

## License

This project is licensed under the **MIT License**.
