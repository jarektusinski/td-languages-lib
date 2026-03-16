/**
 * Left-to-right text direction constant.
 */
const LEFT_TO_RIGHT = 'ltr' as const;

/**
 * Right-to-left text direction constant.
 */
const RIGHT_TO_LEFT = 'rtl' as const;

/**
 * Top-to-bottom text direction constant.
 */
const TOP_TO_BOTTOM = 'ttb' as const;

/**
 * All supported orientation values.
 */
const ORIENTATIONS = [LEFT_TO_RIGHT, RIGHT_TO_LEFT, TOP_TO_BOTTOM] as const;

/**
 * A single orientation value, either 'ltr', 'rtl', or 'ttb'.
 */
type Orientation = typeof ORIENTATIONS[number];

/**
 * Horizontal orientations are left-to-right or right-to-left.
 */
const HORIZONTAL_ORIENTATIONS = [LEFT_TO_RIGHT, RIGHT_TO_LEFT] as const;

/**
 * Horizontal orientation type.
 */
type HorizontalOrientation = typeof HORIZONTAL_ORIENTATIONS[number];

/**
 * Vertical orientation type, currently only top-to-bottom.
 */
type VerticalOrientation = typeof TOP_TO_BOTTOM;

/**
 * Text orientation object.
 * - 'char' is the character flow direction.
 * - 'line' is the line flow direction.
 */
type TextOrientation = {
    char: HorizontalOrientation;
    line: VerticalOrientation;
} | {
    char: VerticalOrientation;
    line: typeof RIGHT_TO_LEFT;
}

/**
 * Multi text orientation accepts either a single orientation object or a non-empty array of them.
 */
type MultiTextOrientation = TextOrientation | [TextOrientation, TextOrientation, ...TextOrientation[]];

/**
 * Left-to-right text orientation preset.
 */
const LEFT_TO_RIGHT_TEXT_ORIENTATION: TextOrientation = {
    char: LEFT_TO_RIGHT,
    line: TOP_TO_BOTTOM
} as const;

/**
 * Right-to-left text orientation preset.
 */
const RIGHT_TO_LEFT_TEXT_ORIENTATION: TextOrientation = {
    char: RIGHT_TO_LEFT,
    line: TOP_TO_BOTTOM
} as const;

/**
 * Top-to-bottom text orientation preset.
 */
const TOP_TO_BOTTOM_TEXT_ORIENTATION: TextOrientation = {
    char: TOP_TO_BOTTOM,
    line: RIGHT_TO_LEFT
} as const;

/**
 * Multi orientation preset array.
 */
const MULTI_TEXT_ORIENTATION: MultiTextOrientation = [LEFT_TO_RIGHT_TEXT_ORIENTATION, TOP_TO_BOTTOM_TEXT_ORIENTATION ] as const;

export type {
    Orientation,
    HorizontalOrientation,
    VerticalOrientation,
    TextOrientation,
    MultiTextOrientation
}

export default {
    LEFT_TO_RIGHT,
    RIGHT_TO_LEFT,
    TOP_TO_BOTTOM,
    ORIENTATIONS,
    HORIZONTAL_ORIENTATIONS,
    LEFT_TO_RIGHT_TEXT_ORIENTATION,
    RIGHT_TO_LEFT_TEXT_ORIENTATION,
    TOP_TO_BOTTOM_TEXT_ORIENTATION,
    MULTI_TEXT_ORIENTATION
}
