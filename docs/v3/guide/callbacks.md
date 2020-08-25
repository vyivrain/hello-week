# Callbacks

This gives you the ability to listen for any changes and perform your own actions.

**Quick Example:**

```js
new HelloWeek({
  onMonthChange: () => {}
  onSelect: () => {}
});
```

## Properties

| Property                  | Value Type   | Description                                |
| ------------------------- | ------------ | ------------------------------------------ |
| `onMonthChange() => void` | `attachable` | Triggered when the user change month/year. |
| `onSelect() => void`      | `attachable` | Triggered when the user clicks on a day.   |
