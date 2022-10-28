type PMbrUnitType = 'px' | 'em' | 'rem' | '%' | 'pt' | 'vw' | 'vh' | '';

/**
 * This is the type for input value just like CSS accept value for border-radios
 */
export type BorderRadiusValueType =
  | `${number}${PMbrUnitType}`
  | `${number}${PMbrUnitType} ${number}${PMbrUnitType}`
  | `${number}${PMbrUnitType} ${number}${PMbrUnitType} ${number}${PMbrUnitType}`
  | `${number}${PMbrUnitType} ${number}${PMbrUnitType} ${number}${PMbrUnitType} ${number}${PMbrUnitType}`;

/**
 * This is the type for input value just like CSS accept value for padding, margin, border-radios
 */
export type PaddingMarginValueType =
  | BorderRadiusValueType
  | `-${number}${PMbrUnitType}`
  | `-${number}${PMbrUnitType} -${number}${PMbrUnitType}`
  | `-${number}${PMbrUnitType} -${number}${PMbrUnitType} -${number}${PMbrUnitType}`
  | `-${number}${PMbrUnitType} -${number}${PMbrUnitType} -${number}${PMbrUnitType} -${number}${PMbrUnitType}`;
