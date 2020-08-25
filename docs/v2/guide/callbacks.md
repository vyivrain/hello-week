# Callbacks

This gives you the ability to listen for any changes and perform your own actions.

**Quick Example:**

```js
new HelloWeek({
    onSelect: () => {},
});
```

## Properties

| Property        | Value Type   | Description                                |
| --------------- | ------------ | ------------------------------------------ |
| `onLoad`        | `attachable` | Dispatch immediately after initialization. |
| `onMonthChange` | `attachable` | Dispatch after month change.               |
| `onSelect`      | `attachable` | Dispatch on select the day.                |
| `onClear`       | `attachable` | Dispatch on clear calendar.                |
