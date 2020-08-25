import { Options, DayOptions } from '../interfaces/index';
import { en } from '../langs/index';

export const defaults: Options = {
    selector: '.hello-week',
    lang: en,
    format: 'DD/MM/YYYY',
    monthShort: false,
    weekShort: true,
    defaultDate: null,
    minDate: null,
    maxDate: null,
    disableDaysOfWeek: null,
    timezoneOffset: new Date().getTimezoneOffset(),
    disableDates: null,
    weekStart: 0,
    daysSelected: null,
    daysHighlight: null,
    multiplePick: false,
    disablePastDays: false,
    todayHighlight: true,
    range: false,
    locked: false,
    rtl: false,
    nav: ['◀', '▶'],
    beforeLoad: () => {
        /** callback */
    },
    onLoad: () => {
        /** callback */
    },
    onMonthChange: () => {
        /** callback */
    },
    onSelect: (data: DayOptions) => data,
    beforeCreateDay: (data: DayOptions) => data,
};
