
## Usage:

Import icons like so:
```jsx
import { DAI } from `react-cryptoicons`
```

Calling the component:
```jsx
<DAI color="pink" 
```

### Props:

**color:** the fill color of the icon. Default is `#000`.

**size:** the pixel size of the icon. Default is `32`.


### Available icons:

The list of available icons can be found in `src/index.tsx`

```
export { $PAC } from './svg/$pac'
export { ABT } from './svg/abt'
export { ACT } from './svg/act'
export { ACTN } from './svg/actn'
export { ADA } from './svg/ada'
...
```

### Notes:
Building takes a little while due to the number of individual imports.
