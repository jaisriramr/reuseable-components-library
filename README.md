# tm-reuseable-components

`tm-reuseable-components` is built upon [@mui/material]

## Installation

```js
npm install tm-reuseable-components
```
## Importing components

You should import individual components like: `tm-reuseable-components/button` rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client

```js
import { Button } from 'tm-reuseable-components';

// or less ideally
import { Button } from 'tm-reuseable-components';
```
## Importing Icons

You can import materil icons under `tm-reuseable-components/Icons`

```js
import {  Icons } from 'tm-ui-components/icons'
```

## Example

```js

import React from 'react'
import { Button } from 'tm-reuseable-components/button';

...

return (
    ...
        <Button variant='contained' color='primary'>Click me</Button>
    ...
)

...

```

