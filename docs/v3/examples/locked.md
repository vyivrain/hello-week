# Locked

Locks all days in calendar.

## Usage

```js
const calendar = new HelloWeek({
    selector: '.calendar',
    locked: true,
});

document.querySelector('.btn').addEventListener('click', () => {
    calendar.setOptions({}, (prevOption) => {
        return {
            ...prevOption,
            locked: !prevOption.locked,
        };
    });
});
```

[Locked](../demos/locked.html ':include :type=iframe width=100% height=600px')
