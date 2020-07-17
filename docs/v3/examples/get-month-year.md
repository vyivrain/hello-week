# Get Month and Year

Get month or year.

## Usage

```js
const calendar = new HelloWeek({
    selector: '.calendar',
    onNavigation: () => {
        console.log('Current Month: ', calendar.getMonth());
        console.log('Current Year: ', calendar.getYear());
    },
});
```

[Get Month & Year](../demos/get-month-year.html ':include :type=iframe width=100% height=600px')
