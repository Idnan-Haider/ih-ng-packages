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

/**
 * This is the type for input value just like CSS accept value for height and width
 */
export type HeightWidthValueType = `${number}${UnitType}`;
