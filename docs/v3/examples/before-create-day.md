# Before Create Day

A hook for modifying a day DOM.

## Usage

```js
new HelloWeek({
    selector: '.calendar',
    beforeCreateDay: (data) => {
        return {
            ...data,
            ...{
                node: el(
                    'div',
                    data.attributes,
                    el('span', {}, data.day.toString())
                ),
            },
        };
    },
});
```

[Before Create Day](../demos/before-create-day.html ':include :type=iframe width=100% height=600px')
