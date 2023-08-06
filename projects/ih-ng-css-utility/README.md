# IH NG CSS Utility

This is like a plug-and-play library that provides multiple directives. Each directive is a CSS helper to set CSS on DOM dynamically and on run time.

## Features

- Set CSS dynamically on run time.
- No need of bootstrap, tailwind, css file, scss functions, or material utility classes

## Available Utility Directives

- [ihPM](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/directives/padding-margin.directive.ts) For setting padding or margin or both
- [ihBR](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/directives/border-radius.directive.ts) For setting border radius
- [ihHW](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/directives/height-width.directive.ts) For setting height or width or both
- [ihFW](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/directives/font-weight.directive.ts) For setting Font Weight
- [ihFS](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/directives/font-size.directive.ts) For setting Font Size
- [ihFlex](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/directives/flex.directive.ts) For setting Flex properties

### Other utilities are in Queue, Hopefully, you'll get 2 utilities per minor version they are coming on every weekend.

## How to Install

```shell
npm i ih-ng-css-utility
```

OR

```shell
pnpm add ih-ng-css-utility
```

## Setup

```ts
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

```html
// [ihPM] directive for providing padding and margin // here 'pValue' is for padding value and 'mValue' is for margin value
<div ihPM pValue="1rem" mValue="1rem"></div>

// you can provide value for 'top', 'right', 'bottom', and 'left' in CSS way, see below
<div ihPM pValue="1rem 1rem 1rem 1rem" mValue="1rem 1rem"></div>

// [ihBR] directive for providing border-radius
<div ihBR="1rem"></div>

// [ihFW] directive for providing font-weight
<span ihFW="600">Some Text Here</span>

// [ihFS] directive for providing font-size
<span ihFS="large">Some Text Here</span>

// [ihHW] directive for providing width or height
<div ihHW hValue="1rem" wValue="10px"></div>

// [ihFlex] directive for display Flex and its properties
<div ihFlex flexDirection="row" justifyContent="space-between"></div>
```

## Options

If you are curios about Interfaces here is the [Reference](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-css-utility/src/lib/Interfaces/utility.interface.ts)

```ts
type UnitType = "px" | "em" | "rem" | "%" | "pt" | "vw" | "vh" | "";

/**
 * This is the type for input value just like CSS accept value for border-radios
 */
export type BorderRadiusValueType = `${number}${UnitType}` | `${number}${UnitType} ${number}${UnitType}` | `${number}${UnitType} ${number}${UnitType} ${number}${UnitType}` | `${number}${UnitType} ${number}${UnitType} ${number}${UnitType} ${number}${UnitType}`;

/**
 * This is the type for input value just like CSS accept value for padding, margin, border-radios
 */
export type PaddingMarginValueType = BorderRadiusValueType | `-${number}${UnitType}` | `-${number}${UnitType} -${number}${UnitType}` | `-${number}${UnitType} -${number}${UnitType} -${number}${UnitType}` | `-${number}${UnitType} -${number}${UnitType} -${number}${UnitType} -${number}${UnitType}`;

/**
 * This is the type for input value just like CSS accept value for height and width
 */
export type HeightWidthValueType = `${number}${UnitType}`;

/**
 * This is the type for input value just like CSS accept value for font weight
 */
export type FontWeightValueType = "unset" | "normal" | "revert" | "lighter" | "initial" | "inherit" | "bold" | "bolder" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

/**
 * This is the type for input value just like CSS accept value for font size
 */
export type FontSizeValueType = `${number}${UnitType}` | "initial" | "inherit" | "unset" | "medium" | "revert" | "large" | "larger" | "x-large" | "xx-large" | "xxx-large" | "small" | "smaller" | "x-small" | "xx-small";
```

## Reach me out

- [LinkedIn](https://www.linkedin.com/in/adnanhaider-sse/)
- [GitHub](https://github.com/Idnan-Haider)
