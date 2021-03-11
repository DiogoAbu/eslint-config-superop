## General rules

**block-scoped-var**: disabled

**brace-style**: error

```ts
// Incorrect
function foo()
{
  return true;
}

// Correct
function foo() {
  return true;
}
```

**camelcase**: error

```ts
// Incorrect
import { no_camelcased } from "external-module";

var my_favorite_color = "#112C85";

// Correct
import { no_camelcased as camelCased } from "external-module";

var myFavoriteColor = "#112C85";
```

**comma-dangle**: disabled

**comma-spacing**: error

```ts
// Incorrect
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);

// Correct
var arr = [1, 2];
var arr = [1,, 3];
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
```

**complexity**: disabled

**consistent-return**: error

```ts
// Incorrect
function bar(condition) {
  if (condition) {
    return undefined;
  }
  return true;
}

// Correct
function bar(condition) {
  if (condition) {
    return undefined;
  }
  // no return statement
}
```

**consistent-this**: warning

```ts
// Incorrect
var that = 42;
var self = this;

// Correct
var that = this;
var self = 42;
```

**curly**: error

```ts
// Incorrect
if (foo) foo++;

while (bar)
  baz();

// Correct
if (foo) {
  foo++;
}

while (bar) {
  baz();
}
```

**default-case**: disabled

**dot-notation**: warning

```ts
// Incorrect
var x = foo["bar"];

// Correct
var x = foo.bar;
var x = foo[bar]; // Property name is a variable
```

**eol-last**: warning

```ts
// Incorrect
function foo() {
  var foo = 2;
}

// Correct
function foo() {
  var foo = 2;
}\n
```

**eqeqeq**: warning

```ts
// Incorrect
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

// Correct
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

**eslint-comments/no-aggregating-enable**: warning

```ts
// Incorrect
/* eslint-disable no-undef */
f();
/* eslint-disable no-var */
var a;
/* eslint-enable */

// Correct
/* eslint-disable no-undef */
f();
/* eslint-disable no-var */
var a;
/* eslint-enable no-var */
/* eslint-enable no-undef */
```

**eslint-comments/no-unlimited-disable**: warning

```ts
// Incorrect
var foo; // eslint-disable-line

// Correct
var foo; // eslint-disable-line no-unused-vars
```

**eslint-comments/no-unused-disable**: warning

```ts
// Incorrect
var foo = bar(); // eslint-disable-line no-undef,eqeqeq

// Correct
var foo = bar(); // eslint-disable-line no-undef
```

**eslint-comments/no-unused-enable**: warning

```ts
// Incorrect
/* eslint-disable no-undef */
doSomething();
/* eslint-enable no-undef-init *

// Correct
/* eslint-disable no-undef */
doSomething();
/* eslint-enable no-undef */
```

**func-names**: disabled

**func-style**: error

```ts
// Incorrect
var foo = function() {
    // ...
};

// Correct
function foo() {
    // ...
}

var foo = () => {};
```

**generator-star-spacing**: error

```ts
// Incorrect
function * generator() {}

const shorthand = { *generator() {} };

class Class {
  static* method() {}
}

// Correct
function* generator() {}

const shorthand = { *generator() {} };

class Class {
  static *method() {}
}

```

**guard-for-in**: disabled

**handle-callback-err**: warning

```ts
// Incorrect
function loadData(err, data) {
  doSomething();
}

// Correct
function loadData(err, data) {
  if (err) {
    console.log(err.stack);
  }
  doSomething();
}
```

**import/first**: error

```ts
// Incorrect
import foo from './foo';
initWith(foo);
import bar from './bar';

// Correct
import foo from './foo';
import bar from './bar';
initWith(foo);
```

**import/newline-after-import**: error

```ts
// Incorrect
import * as foo from 'foo';
const FOO = 'BAR';

// Correct
import * as foo from 'foo';

const FOO = 'BAR';
```

**import/no-duplicates**: error

```ts
// Incorrect
import SomeDefaultClass from './mod';
import * as names from './mod';
// Correct
import SomeDefaultClass, * as names from './mod';
```

**import/order**: disabled

**jest/no-disabled-tests**: warning

```ts
// Incorrect
describe.skip('foo', () => {});

// Correct
describe('foo', () => {});
```

**jest/no-focused-tests**: warning

```ts
// Incorrect
describe.only('foo', () => {});

// Correct
describe('foo', () => {});
```

**jest/no-identical-title**: warning

```ts
// Incorrect
describe('foo', () => {
  it('should do bar', () => {});
  it('should do bar', () => {}); // Has the same title as the previous test
});

// Correct
describe('foo', () => {
  it('should do foo', () => {});
  it('should do bar', () => {});
});
```

**jest/valid-expect**: warning

```ts
// Incorrect
expect();
expect(true).toBeDefined;
expect().toEqual('something');

// Correct
expect(true).toBeDefined();
expect('something').toEqual('something');
```

**jsx-quotes**: warning

```tsx
// Incorrect
<Component prop="foo" />

// Correct
<Component prop='foo' />
<Component prop="'" />
```

**key-spacing**: disabled

**keyword-spacing**: warning

```ts
// Incorrect
if (foo) {
  // ...
}else if (bar) {
  // ...
}else {
  // ...
}

// Correct
if (foo) {
  // ...
} else if (bar) {
  // ...
} else {
  // ...
}
```

**linebreak-style**: error

```ts
// Incorrect
function foo(params) { // \r\n
    // ... \r\n
}// \r\n

// Correct
function foo(params) { // \n
    // ... \n
}// \n
```

**lines-around-comment**: error

```ts
// Incorrect

// Correct
```

**max-depth**: disabled

**max-len**: disabled

**max-nested-callbacks**: disabled

**max-params**: disabled

**max-statements**: disabled

**new-cap**: error

```ts
// Incorrect
var friend = new person();

// Correct
var friend = Person();
var friend = new Person();
```

**new-parens**: warning

```ts
// Incorrect
var person = new Person;
var person = new (Person);

// Correct
var person = new Person();
var person = new (Person)();
```

**no-alert**: warning

```ts
// Incorrect
alert("here!");

// Correct
customAlert("Something happened!");
```

**no-array-constructor**: warning

```ts
// Incorrect
Array(0, 1, 2);
new Array(0, 1, 2);

// Correct
Array(500);
new Array(someOtherArray.length);
[0, 1, 2];
```

**no-bitwise**: warning

```ts
// Incorrect
var x = y | z;
var x = y & z;

// Correct
var x = y || z;
var x = y && z;
```

**no-caller**: warning

```ts
// Incorrect
function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}

// Correct
function foo(n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}
```

**no-catch-shadow**: warning

```ts
// Incorrect

// Correct
```

**no-cond-assign**: warning

```ts
// Incorrect
if (x = 0) {
  // ...
}

// Correct
if (x === 0) {
  // ...
}
```

**no-console**: disabled

**no-const-assign**: error

```ts
// Incorrect
const a = 0;
a = 1;

// Correct
const a = 0;
console.log(a);

let b = 0;
b = 1;
```

**no-constant-condition**: disabled

**no-control-regex**: warning

```ts
// Incorrect
var pattern1 = /\x1f/;
var pattern2 = new RegExp("\x1f");

// Correct
var pattern1 = /\x20/;
var pattern2 = new RegExp("\x20");
```

**no-debugger**: warning

```ts
// Incorrect
function isTruthy(x) {
  debugger;
  return Boolean(x);
}

// Correct
function isTruthy(x) {
  return Boolean(x); // set a breakpoint at this line
}
```

**no-delete-var**: warning

```ts
// Incorrect

// Correct
```

**no-div-regex**: warning

```ts
// Incorrect
var x;
delete x;
```

**no-dupe-class-members**: error

```ts
// Incorrect
class Foo {
  bar() { }
  bar() { }
}

class Foo {
  bar() { }
  get bar() { }
}

// Correct
class Foo {
  bar() { }
  qux() { }
}

class Foo {
  get bar() { }
  set bar(value) { }
}
```

**no-dupe-keys**: error

```ts
// Incorrect
var foo = {
  foo: "foo",
  foo: "qux",
};

// Correct
var foo = {
  foo: "foo",
  qux: "qux",
};
```

**no-else-return**: error

```ts
// Incorrect
if (x) {
  return y;
} else {
  return z;
}

// Correct
if (x) {
  return y;
}
return z;
```

**no-empty**: disabled

**no-empty-character-class**: warning

```ts
// Incorrect
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null

// Correct
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]
```

**no-eq-null**: disabled

**no-eval**: error

```ts
// Incorrect
value = eval("obj." + key);

// Correct
value = obj[key];
```

**no-ex-assign**: warning

```ts
// Incorrect
try {
  // ...
} catch (e) {
  e = 10;
}

// Correct
try {
  // ...
} catch (e) {
  var foo = 10;
}
```

**no-extend-native**: warning

```ts
// Incorrect
Object.prototype.a = 'a';
```

**no-extra-bind**: warning

```ts
// Incorrect
var x = function () {
  foo();
}.bind(bar);

// Correct
var x = function () {
  this.foo();
}.bind(bar);
```

**no-extra-boolean-cast**: warning

```ts
// Incorrect
var foo = Boolean(!!bar);

// Correct
var foo = !!bar;
var foo = Boolean(bar);
```

**no-extra-parens**: disabled

**no-extra-semi**: warning

```ts
// Incorrect
var x = 5;;

// Correct
var x = 5;
```

**no-fallthrough**: warning

```ts
// Incorrect
switch(foo) {
  case 1:
    doSomething();

  case 2:
    doSomething();
}

// Correct
switch(foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
}
```

**no-floating-decimal**: warning

```ts
// Incorrect
var num = .5;
var num = 2.;
var num = -.7;

// Correct
var num = 0.5;
var num = 2.0;
var num = -0.7;
```

**no-func-assign**: warning

```ts
// Incorrect
function foo() {}
foo = bar;

// Correct
var foo = function () {}
foo = bar;
```

**no-implied-eval**: warning

```ts
// Incorrect
setTimeout("alert('Hi!');", 100);

// Correct
setTimeout(() => {
  alert("Hi!");
}, 100);
```

**no-inner-declarations**: disabled

**no-invalid-regexp**: warning

```ts
// Incorrect
RegExp('[');

// Correct
RegExp('.');
```

**no-iterator**: warning

```ts
// Incorrect
Foo.prototype.__iterator__ = function() {
  return new FooIterator(this);
};

foo.__iterator__ = function () {};
```

**no-label-var**: warning

```ts
// Incorrect

// Correct
```

**no-labels**: warning

```ts
// Incorrect
label:
  while(true) {
    // ...
  }

// Correct
var f = {
  label: "foo"
};

while(true) {
  // ...
}
```

**no-lone-blocks**: warning

```ts
// Incorrect
if (foo) {
  bar();
  {
    baz();
  }
}

// Correct
if (foo) {
  if (bar) {
    baz();
  }
}
```

**no-lonely-if**: error

```ts
// Incorrect
if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  }
}

// Correct
if (condition) {
  // ...
} else if (anotherCondition) {
  // ...
}
```

**no-loop-func**: error

```ts
// Incorrect
for (var i = 10; i; i--) {
  (function() { return i; })();
}

// Correct
var a = function() {};
for (var i = 10; i; i--) {
  a();
}
```

**no-mixed-requires**: warning

```ts
// Incorrect

// Correct
```

**no-mixed-spaces-and-tabs**: warning

```ts
// Incorrect

// Correct
```

**no-multi-spaces**: error

```ts
// Incorrect

// Correct
```

**no-multi-str**: disabled

**no-native-reassign**: disabled

**no-negated-in-lhs**: warning

```ts
// Incorrect

// Correct
```

**no-nested-ternary**: disabled

**no-new**: warning

```ts
// Incorrect

// Correct
```

**no-new-func**: error

```ts
// Incorrect

// Correct
```

**no-new-object**: warning

```ts
// Incorrect

// Correct
```

**no-new-require**: warning

```ts
// Incorrect

// Correct
```

**no-new-wrappers**: warning

```ts
// Incorrect

// Correct
```

**no-obj-calls**: warning

```ts
// Incorrect

// Correct
```

**no-octal**: warning

```ts
// Incorrect

// Correct
```

**no-octal-escape**: warning

```ts
// Incorrect

// Correct
```

**no-path-concat**: warning

```ts
// Incorrect

// Correct
```

**no-plusplus**: disabled

**no-process-exit**: disabled

**no-proto**: warning

```ts
// Incorrect

// Correct
```

**no-redeclare**: disabled

**no-regex-spaces**: warning

```ts
// Incorrect

// Correct
```

**no-reserved-keys**: disabled

**no-restricted-modules**: warning

```ts
// Incorrect

// Correct
```

**no-return-assign**: warning

```ts
// Incorrect

// Correct
```

**no-script-url**: warning

```ts
// Incorrect

// Correct
```

**no-self-compare**: warning

```ts
// Incorrect

// Correct
```

**no-sequences**: warning

```ts
// Incorrect

// Correct
```

**no-shadow**: warning

```ts
// Incorrect

// Correct
```

**no-shadow-restricted-names**: warning

```ts
// Incorrect

// Correct
```

**no-spaced-func**: warning

```ts
// Incorrect

// Correct
```

**no-sparse-arrays**: warning

```ts
// Incorrect

// Correct
```

**no-sync**: disabled

**no-ternary**: disabled

**no-trailing-spaces**: warning

```ts
// Incorrect

// Correct
```

**no-undef**: error

```ts
// Incorrect

// Correct
```

**no-undef-init**: warning

```ts
// Incorrect

// Correct
```

**no-undefined**: disabled

**no-underscore-dangle**: error

```ts
// Incorrect

// Correct
```

**no-unexpected-multiline**: error

```ts
// Incorrect

// Correct
```

**no-unreachable**: error

```ts
// Incorrect

// Correct
```

**no-unused-expressions**: disabled

**no-unused-vars**: disabled

**no-use-before-define**: error

```ts
// Incorrect

// Correct
```

**no-var**: error

```ts
// Incorrect

// Correct
```

**no-void**: warning

```ts
// Incorrect

// Correct
```

**no-warning-comments**: disabled

**no-with**: warning

```ts
// Incorrect

// Correct
```

**object-curly-newline**: disabled

**object-shorthand**: error

```ts
// Incorrect

// Correct
```

**one-var**: disabled

**prefer-arrow-callback**: error

```ts
// Incorrect

// Correct
```

**prefer-const**: error

```ts
// Incorrect

// Correct
```

**prefer-numeric-literals**: error

```ts
// Incorrect

// Correct
```

**prefer-rest-params**: error

```ts
// Incorrect

// Correct
```

**prefer-spread**: error

```ts
// Incorrect

// Correct
```

**prettier/prettier**: error

```ts
// Incorrect

// Correct
```

**quote-props**: disabled

**quotes**: warning

```ts
// Incorrect

// Correct
```

**radix**: warning

```ts
// Incorrect

// Correct
```

**react-hooks/exhaustive-deps**: error

```ts
// Incorrect

// Correct
```

**react-hooks/rules-of-hooks**: error

```ts
// Incorrect

// Correct
```

**react-native/no-color-literals**: warning

```ts
// Incorrect

// Correct
```

**react-native/no-inline-styles**: warning

```ts
// Incorrect

// Correct
```

**react-native/no-unused-styles**: warning

```ts
// Incorrect

// Correct
```

**react-native/split-platform-components**: error

```ts
// Incorrect

// Correct
```

**react/destructuring-assignment**: error

```ts
// Incorrect

// Correct
```

**react/display-name**: disabled

**react/forbid-component-props**: disabled

**react/function-component-definition**: disabled

**react/jsx-boolean-value**: error

```ts
// Incorrect

// Correct
```

**react/jsx-filename-extension**: warning

```ts
// Incorrect

// Correct
```

**react/jsx-max-depth**: error

```ts
// Incorrect

// Correct
```

**react/jsx-no-bind**: error

```ts
// Incorrect

// Correct
```

**react/jsx-no-comment-textnodes**: warning

```ts
// Incorrect

// Correct
```

**react/jsx-no-duplicate-props**: error

```ts
// Incorrect

// Correct
```

**react/jsx-no-literals**: disabled

**react/jsx-no-undef**: error

```ts
// Incorrect

// Correct
```

**react/jsx-pascal-case**: error

```ts
// Incorrect

// Correct
```

**react/jsx-props-no-spreading**: disabled

**react/jsx-sort-props**: error

```ts
// Incorrect

// Correct
```

**react/jsx-uses-react**: warning

```ts
// Incorrect

// Correct
```

**react/jsx-uses-vars**: warning

```ts
// Incorrect

// Correct
```

**react/no-did-mount-set-state**: warning

```ts
// Incorrect

// Correct
```

**react/no-did-update-set-state**: warning

```ts
// Incorrect

// Correct
```

**react/no-multi-comp**: error

```ts
// Incorrect

// Correct
```

**react/no-set-state**: disabled

**react/no-string-refs**: warning

```ts
// Incorrect

// Correct
```

**react/no-unknown-property**: disabled

**react/no-unused-state**: disabled

**react/prop-types**: disabled

**react/react-in-jsx-scope**: warning

```ts
// Incorrect

// Correct
```

**react/self-closing-comp**: warning

```ts
// Incorrect

// Correct
```

**react/style-prop-object**: error

```ts
// Incorrect

// Correct
```

**react/wrap-multilines**: disabled

**require-await**: error

```ts
// Incorrect

// Correct
```

**semi**: warning

```ts
// Incorrect

// Correct
```

**semi-spacing**: warning

```ts
// Incorrect

// Correct
```

**simple-import-sort/imports**: error

```ts
// Incorrect

// Correct
```

**sort-imports**: disabled

**sort-vars**: disabled

**space-in-brackets**: disabled

**space-in-parens**: error

```ts
// Incorrect

// Correct
```

**space-infix-ops**: warning

```ts
// Incorrect

// Correct
```

**space-unary-ops**: warning

```ts
// Incorrect

// Correct
```

**use-isnan**: warning

```ts
// Incorrect

// Correct
```

**valid-jsdoc**: disabled

**valid-typeof**: warning

```ts
// Incorrect

// Correct
```

**vars-on-top**: disabled

**wrap-iife**: disabled

**wrap-regex**: disabled

**yoda**: warning

```ts
// Incorrect

// Correct
```

## Rules for: `*.js`

**unused-imports/no-unused-imports**: error

```ts
// Incorrect

// Correct
```

**unused-imports/no-unused-vars**: warning

```ts
// Incorrect

// Correct
```

## Rules for: `*.ts` `*.tsx`

**@typescript-eslint/await-thenable**: error

```ts
// Incorrect
await 'value';

// Correct
await Promise.resolve('value');
```

**@typescript-eslint/ban-ts-comment**: disabled

**@typescript-eslint/ban-ts-ignore**: disabled

**@typescript-eslint/brace-style**: error

```ts
// Incorrect

// Correct
```

**@typescript-eslint/explicit-function-return-type**: disabled

**@typescript-eslint/explicit-module-boundary-types**: error

```ts
// Incorrect

// Correct
```

**@typescript-eslint/naming-convention**: error

```ts
// Incorrect

// Correct
```

**@typescript-eslint/no-empty-interface**: disabled

**@typescript-eslint/no-explicit-any**: disabled

**@typescript-eslint/no-non-null-assertion**: disabled

**@typescript-eslint/no-unnecessary-type-assertion**: disabled

**@typescript-eslint/no-unsafe-assignment**: disabled

**@typescript-eslint/no-unsafe-call**: disabled

**@typescript-eslint/no-unsafe-member-access**: disabled

**@typescript-eslint/no-unsafe-return**: disabled

**@typescript-eslint/no-unused-vars**: disabled

**@typescript-eslint/no-use-before-define**: error

```ts
// Incorrect

// Correct
```

**@typescript-eslint/promise-function-async**: error

```ts
// Incorrect

// Correct
```

**@typescript-eslint/require-await**: error

```ts
// Incorrect

// Correct
```

**@typescript-eslint/return-await**: error

```ts
// Incorrect

// Correct
```

**brace-style**: disabled

**camelcase**: disabled

**no-use-before-define**: disabled

**require-await**: disabled

**unused-imports/no-unused-imports-ts**: error

```ts
// Incorrect

// Correct
```

**unused-imports/no-unused-vars-ts**: disabled

