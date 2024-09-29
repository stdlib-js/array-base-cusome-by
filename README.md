<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cusomeBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Cumulatively test whether at least `n` array elements in a provided array pass a test implemented by a predicate function.



<section class="usage">

## Usage

```javascript
import cusomeBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-cusome-by@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-cusome-by@esm/index.mjs';
```

#### cusomeBy( x, n, predicate\[, thisArg ] )

Cumulatively tests whether at least `n` array elements in a provided array pass a test implemented by a predicate function.

```javascript
function fcn( value) {
    return ( value > 0 );
}

var x = [ 0, 0, 0, 1, 1 ];

var y = cusomeBy( x, 2, fcn );
// returns [ false, false, false , false, true ]
```

The invoked `predicate` function is provided three arguments:

-   **value**: collection element.
-   **index**: collection index.
-   **collection**: input collection.

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( v ) {
    this.count += 1;
    return ( v > 0 );
}

var x = [ 0, 0, 0, 1, 1 ];

var context = {
    'count': 0
};

var bool = cusomeBy( x, 1, fcn, context );
// returns [ false, false, false, true, true ]

var count = context.count;
// returns 4
```

#### cusomeBy.assign( x, n, out, stride, offset, predicate\[, thisArg ] )

Cumulatively tests whether at least `n` array elements in a provided array pass a test implemented by a predicate function and assigns the results to a provided output array.

```javascript
function fcn( v ) {
    return ( v > 0 );
}

var x = [ 0, 0, 0, 1, 1 ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cusomeBy.assign( x, 2, y, 2, 0, fcn );
// returns [ false, null, false, null, false, null, false, null, true, null ]

var bool = ( out === y );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@esm/index.mjs';
import cusomeBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-cusome-by@esm/index.mjs';

function fcn( value ) {
    return ( value > 0 );
}

// Create an array of random values:
var x = bernoulli( 10, 0.8 );
console.log( x );

// Cumulatively test whether at least three array elements are positive:
var y = cusomeBy( x, 3, fcn );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-cusome-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-cusome-by

[test-image]: https://github.com/stdlib-js/array-base-cusome-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-cusome-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-cusome-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-cusome-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-cusome-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-cusome-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-cusome-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-cusome-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-cusome-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-cusome-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-cusome-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-cusome-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-cusome-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-cusome-by/main/LICENSE

</section>

<!-- /.links -->