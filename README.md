**Modern, lightweight utility toolkit for JavaScript and TypeScript — including object, array, string, date, and validation helpers.**

[![npm version](https://img.shields.io/npm/v/microkitjs.svg)](https://www.npmjs.com/package/microkitjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Features

- 🧠 **Object utilities:** `pick()`, `omit()`, `hasField()`
- 🔢 **Array utilities:** `unique()`, `flatten()`
- 🔡 **String utilities:** `capitalize()`, `kebabCase()`
- 📅 **Date utilities:** `isToday()`, `formatDate()`
- ✔️ **Validation utilities:** `isEmail()`, `isEmpty()`

---

## Installation

```bash
npm install microkitjs
# or
yarn add microkitjs
```

# Usage

## Import individual utilities or the whole package:

```

import { pick, unique, capitalize, isToday, isEmail } from 'microkitjs';
```

## 🧠 Object Utilities

```

const user = { name: 'Alice', age: 30, email: 'alice@example.com', active: true };

pick(user, ['name', 'email']);
// => { name: 'Alice', email: 'alice@example.com' }

omit(user, ['age', 'active']);
// => { name: 'Alice', email: 'alice@example.com' }

hasField(user, 'email');
// => true

hasField(user, 'password');
// => false
```

## 🔢 Array Utilities

```

unique([1, 2, 2, 3, 4, 4]);
// => [1, 2, 3, 4]

flatten([1, [2, 3], [4, [5]]]);
// => [1, 2, 3, 4, [5]] // Note: only one level flattened
```

## 🔡 String Utilities

```

capitalize('hello world');
// => 'Hello world'

kebabCase('Hello World Example');
// => 'hello-world-example'
```

## 📅 Date Utilities

```

isToday(new Date());
// => true (if run on the same day)

formatDate(new Date(), 'YYYY-MM-DD');
// => '2025-06-15' (example output)
```

## ✔️ Validation Utilities

```

isEmail('test@example.com');
// => true

isEmail('invalid-email');
// => false

isEmpty('');
// => true

isEmpty('not empty');
// => false
```

Contributing
We welcome contributions! Whether it's fixing bugs, improving docs, or adding new utilities, feel free to open issues and pull requests on the GitHub repository.

---

## License

### MIT © Nurul Islam Rimon

## Links

[GitHub Repository](https://github.com/nurulislamrimon/microkitjs)

[Issues](https://github.com/nurulislamrimon/microkitjs/issues)

Enjoy using microkitjs! 🚀
