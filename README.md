# ⌨️ Support

The Midonis Support package.

## Introduction

### `Str.after()`

The `Str.after` method returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:

```ts
import { Str } from "@midonis/support"

Str.after('Hello World!', 'Hello')

// ' World!'
```

### `Str.afterLast()`

The `Str.afterLast` method returns everything after the last occurrence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```ts
import { Str } from "@midonis/support"

Str.afterLast('App/Http/Controllers/Controller', '/')

// 'Controller'
```

### `Str.before()`

The `Str.before` method returns everything before the given value in a string. The entire string will be returned if the value does not exist within the string:

```ts
import { Str } from "@midonis/support"

Str.before('Hello World!', 'World!')

// 'Hello '
```

### `Str.beforeLast()`

The `Str.beforeLast` method returns everything before the last occurrence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```ts
import { Str } from "@midonis/support"

Str.beforeLast('This is my string', 'my')

// 'This is '
```

### `Str.between()`

The `Str.between` method returns the portion of a string between two values:

```ts
import { Str } from "@midonis/support"

Str.between('This is my string', 'This', 'string')

// ' is my '
```

### `Str.camel()`

The `Str.camel` method converts the given string to `camelCase`:

```ts
import { Str } from "@midonis/support"

Str.camel('foo_bar')

// 'fooBar'
```

### `Str.lcfirst()`

The `Str.lcfirst` method makes a string's first character lowercase:

```ts
import { Str } from "@midonis/support"

Str.lcfirst('FooBar')

// 'fooBar'
```

### `Str.lower()`

The `Str.lower` method converts the given string to lower-case:

```ts
import { Str } from "@midonis/support"

Str.lower('FOOBAR')

// 'foobar'
```

### `Str.remove()`

The `Str.remove` method removes any occurrence of the given string in the subject:

```ts
import { Str } from "@midonis/support"

Str.remove('o', 'fooBar')

// 'fBar'
```

You may also pass `false` as a third argument to the `remove` method to ignore case when removing strings.

### `Str.reverse()`

The `Str.reverse` method reverses the given string:

```ts
import { Str } from "@midonis/support"

Str.reverse('hello')

// 'olleh'
```

### `Str.ucfirst()`

The `Str.ucfirst` method makes a string's first character uppercase:

```ts
import { Str } from "@midonis/support"

Str.ucfirst('fooBar')

// 'FooBar'
```

### `Str.upper()`

The `Str.upper` method converts the given string to upper-case:

```ts
import { Str } from "@midonis/support"

Str.upper('foobar')

// 'FOOBAR'
```

## License

@midonis/support is an open-sourced software licensed under the [MIT license](LICENSE.md).
