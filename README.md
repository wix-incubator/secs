# secs

it is [ms](https://github.com/zeit/ms), but for seconds.

```js
import ms from 'ms';

function secs(...args) {
  return Math.round(ms(...args) / 1000);
}
```

