## React learning note

refer from OSU prof. Rob Hess, [CS 499 – Advanced Web Development](https://web.engr.oregonstate.edu/~hessro/teaching/cs499-w22)

#### Week 5

spinkit: [Loading animation](https://tobiasahlin.com/spinkit/)

import React from 'react'; // import react package

import ReactDOM from 'react-dom'; // connect react with web browser dom

why className? not reserved words,but React use the vanila javascript, so, document.getElementById('something').className+="new-class-name".

- className can just used in the original HTML tag, rather than the self-built tag
- className should search from the root location, also where the first tag comes out
- props are immutable and unchangable
- [deployment](https://create-react-app.dev/docs/deployment/), one account-one user, multiple pages deployment. e.g. [react-demo](https://osuyuanqi.github.io/react-demo/), [rawreact1](https://osuyuanqi.github.io/rawreact1)
