# Min & Max Dates

Restrict the range of selectable dates with the minDate and maxDate options. Set the beginning and end dates

## Usage

```js
const to = new HelloWeek({
    selector: '.to',
    todayHighlight: false,
    onSelect: () => {
        from.setMinDate(to.getDaySelected());
        from.update();
    },
});

const from = new HelloWeek({
    selector: '.from',
    todayHighlight: false,
    onSelect: () => {
        to.setMaxDate(from.getDaySelected());
        to.update();
    },
});
```

[Min & Max](../demos/min-max.html ':include :type=iframe width=100% height=600px')
