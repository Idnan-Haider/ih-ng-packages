/**
 * row (default): left to right in ltr; right to left in rtl
 * row-reverse: right to left in ltr; left to right in rtl
 * column: same as row but top to bottom
 * column-reverse: same as row-reverse but bottom to top
 */
export type FlexDirectionType =
  | 'row'
  | 'row-reverse'
  | 'column-reverse'
  | 'column';

/**
 * nowrap (default): all flex items will be on one line
 * wrap: flex items will wrap onto multiple lines, from top to bottom.
 * wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
 */
export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexFlowType =
  | 'row wrap'
  | 'row-reverse wrap'
  | 'column-reverse wrap'
  | 'column wrap';

/**
 * flex-start (default): items are packed toward the start of the flex-direction.
 * flex-end: items are packed toward the end of the flex-direction.
 * start: items are packed toward the start of the writing-mode direction.
 * end: items are packed toward the end of the writing-mode direction.
 * left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
 * right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.
 * center: items are centered along the line
 * space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line.
 *
 * space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides.
 * The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
 *
 * space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.
 */
export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right';

/**
 * stretch (default): stretch to fill the container (still respect min-width/max-width)
 * flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
 * flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
 * center: items are centered in the cross-axis
 * baseline: items are aligned such as their baselines align
 */
export type AlignItemsType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end';

/**
 * normal (default): items are packed in their default position as if no value was set.
 * flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
 * flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
 * center: items centered in the container
 * space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end
 * space-around: items evenly distributed with equal space around each line
 * space-evenly: items are evenly distributed with equal space around them
 * stretch: lines stretch to take up the remaining space
 */
export type AlignContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'start'
  | 'end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline';

type UnitType = 'px' | 'em' | 'rem';

export type GapType =
  | `${number}${UnitType}`
  | `${number}${UnitType} ${number}${UnitType}`;
