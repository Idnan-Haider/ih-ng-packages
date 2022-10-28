# IH NG CSS Utility

This is like a plug-and-play library that provides multiple directives. Each directive is a CSS helper to set CSS on DOM dynamically and on run time.

## Features

- Set CSS dynamically on run time.
- No need of bootstrap, tailwind, css file, scss functions, or material utility classes

## How to Install

`npm i ih-ng-css-utility` or `pnpm add ih-ng-css-utility`

## Setup

```
import { IHCssUtilityModule } from 'ih-ng-css-utility';

@NgModule({
  imports: [
    ...,

    IHCssUtilityModule,
  ],
  ...
})
class YourModule {}
```

## How to Use

```
// [ihPM] directive for providing padding and margin
// here 'pValue' is for padding value and 'mValue' is for margin value
<div ihPM pValue="1rem" mValue="1rem"></div>

// you can provide value for 'top', 'right', 'bottom', and 'left' in CSS way, see below
<div ihPM pValue="1rem 1rem 1rem 1rem" mValue="1rem 1rem"></div>

// [ihBR] directive for providing border-radius
<div ihBR="1rem"></div>

```

## Options

If you are curios about Interfaces here is the [Reference](./src/lib/Interfaces/utility.interface.ts)

```
type UnitType = 'px' | 'em' | 'rem' | '%' | 'pt' | 'vw' | 'vh' | '';

/**
 * This is the type for input value just like CSS accept value for border-radios
 */
export type BorderRadiusValueType =
  | `${number}${UnitType}`
  | `${number}${UnitType} ${number}${UnitType}`
  | `${number}${UnitType} ${number}${UnitType} ${number}${UnitType}`
  | `${number}${UnitType} ${number}${UnitType} ${number}${UnitType} ${number}${UnitType}`;

/**
 * This is the type for input value just like CSS accept value for padding, margin, border-radios
 */
export type PaddingMarginValueType =
  | BorderRadiusValueType
  | `-${number}${UnitType}`
  | `-${number}${UnitType} -${number}${UnitType}`
  | `-${number}${UnitType} -${number}${UnitType} -${number}${UnitType}`
  | `-${number}${UnitType} -${number}${UnitType} -${number}${UnitType} -${number}${UnitType}`;
```

## Reach me out

- [LinkedIn](https://www.linkedin.com/in/adnanhaider-sse/)
- [GitHub](https://github.com/Idnan-Haider)
