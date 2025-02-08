# Structuring a Design System with Unistyles

## Introduction

This guide outlines the structure and principles of our design system implementation using Unistyles. While inspired by various design systems and frameworks, this approach has been refined to optimize for maintainability and ease of use. Use this documentation as a foundation for building your own design system.

## Philosophy

Of course like any design system, opionions vary. But I believe that a design system should be simple and force a set of rules to keep a cohesive design. So here are some of my beliefs:

- Simplicity: Keep the design system straightforward to ensure consistency and ease of use for both designers and developers.
- Cohesion: Create a unified look and feel across all components to strengthen brand recognition and enhance user experience.
- Flexibility: Adapt the system to your specific needs and constraints, as you learn them while building your application. Acknowledge that one solution won’t fit all situations.

## Design Tokens

Design tokens are foundational values that define consistent sizing and spacing across UI components. Our system intentionally limits the token range to:

- Maintain design consistency
- Reduce decision complexity
- Simplify maintenance
- Improve system predictability

### Token System

The system uses a numeric scale with a `$` prefix, where `$100` serves as our base token (8 pixels). All measurements scale proportionally either up or down from this base unit. Negative values can be achieved by using the negative operator (-) with any token.

#### Positive Values

##### Atomic Scale

| Token | Pixels | Scale Factor | Purpose                       |
| ----- | ------ | ------------ | ----------------------------- |
| `$0`  | 0px    | 0× base      | Remove spacing                |
| `$25` | 2px    | 0.25× base   | Minimal spacing, fine details |
| `$50` | 4px    | 0.5× base    | Small spacing                 |

##### Base Scale

| Token  | Pixels | Scale Factor | Purpose                      |
| ------ | ------ | ------------ | ---------------------------- |
| `$100` | 8px    | 1× base      | Standard spacing (base unit) |
| `$150` | 12px   | 1.5× base    | Medium spacing               |
| `$200` | 16px   | 2× base      | Large spacing                |

##### Medium Scale

| Token  | Pixels | Scale Factor | Purpose             |
| ------ | ------ | ------------ | ------------------- |
| `$300` | 24px   | 3× base      | Extra large spacing |
| `$400` | 32px   | 4× base      | Component sizing    |

#### Large Scale

| Token  | Pixels | Scale Factor | Purpose                      |
| ------ | ------ | ------------ | ---------------------------- |
| `$500` | 40px   | 5× base      | Large component sizing       |
| `$600` | 48px   | 6× base      | Extra large component sizing |
| `$800` | 64px   | 8× base      | Maximum component sizing     |

### Example usage of tokens

Define a object with the tokens mapped to values in your `unistyles.ts` file.

```ts
type Tokens = `$${0 | 25 | 50 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 800}`;

const space = {
  // Atomic scale (0-4px)
  $0: 0,
  $25: 2,
  $50: 4,

  // Base scale (8-16px)
  $100: 8, // base unit token
  $150: 12,
  $200: 16,

  // Medium scale (24-32px)
  $300: 24,
  $400: 32,

  // Large scale (40-64px)
  $500: 40,
  $600: 48,
  $800: 64,
} as const satisfies Record<Tokens, number>;
```

### Using Negative Values

Any token can be made negative by using the `-` operator in your styles:

These could also exist as separate tokens, e.g., in a `space` object in the `unistyles.ts` file, but in this example, I have decided to keep it simple and avoid having to maintain a lot of tokens.

```tsx
const styles = StyleSheet.create((theme) => ({
  container: {
    // Using positive tokens
    padding: theme.space.$100, // 8px padding
    height: theme.space.$300, // 24px height

    // Using negative tokens
    marginTop: -theme.space.$50, // -4px top margin
    left: -theme.space.$200, // -16px left position
  },
}));
```

This approach eliminates the need for separate negative tokens while maintaining all functionality.

### Implementation

```tsx
const styles = StyleSheet.create((theme) => ({
  container: {
    // Atomic scale
    gap: theme.space.$25, // 2px gap

    // Base scale
    padding: theme.space.$100, // 8px padding

    // Medium scale
    height: theme.space.$300, // 24px height

    // Large scale
    maxWidth: theme.space.$800, // 64px max width

    // Negative values
    marginTop: -theme.space.$50, // -4px top margin
  },
}));
```
