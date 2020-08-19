---
tags: [javascript]
title: ">>> operator in JavaScript"
description: Some details about JavaScript's unsigned right shift operator '>>>' with other bit shift operator information sprinkled on top.
date: "2020-08-19"
---

## A bit of << and >> before

Before we discuss '**>>>**', we need a small introduction for **<<** (left shift) and **>>** (right shift) operators.

_They shift the bits of the left operand by the number of places specified in the right operand in the direction of arrows_.

**Example:** `0010 << 1` will result in `0100` and `0100 >> 1` will be `0010`.

Importantly, they preserve the sign of the number. That means negative numbers stay negative after the shift.

## >>>

<kbd>**>>>**</kbd> operator is called "_unsigned right shift operator_" or "_zero-fill right shift operator_".

If you do `x >>> y`, it shifts y number of bits to the right and fills 0s from left. The bits pushed out from the right are discarded. And, it doesn't preserve the sign after the shift.

## >> vs >>>

A negative sign (-) is represented by setting the left most bit as 1. When `>>` is used on a negative number, the result will again get a 1 as the left most bit to preserve the sign. But, `>>>` pushes 0s from left even on negative numbers without preserving the sign bit. So, the result is always going to be a positive number.

When you observe the following, you'll see `>>` always keeps 1 as the left bit if there was a 1 before.

```js
10000000000000000000000000000010 >> 1; // 11000000000000000000000000000001
10000000000000000000000000000010 >>> 1; // 01000000000000000000000000000001

10000000000000000000000000000100 >> 2; // 11100000000000000000000000000001
10000000000000000000000000000100 >>> 2; // 00100000000000000000000000000001

10000000000000000000000000100000 >> 4; // 11111000000000000000000000000010
10000000000000000000000000100000 >>> 4; // 00001000000000000000000000000010
```

## >>> 0

Let's try _not shifting_ using shift operators.

```js
1 >> 0; // 1      Ok

-1 >> 0; // -1    Looks good

1 >>> 0; // 1     Makes sense

-1 >>> 0; // 4294967295  I'm JavaScript
```

## Wait, what?

How is that if I shift zero bits, I get a large number?

To understand that, let's use `toString(2)` to see the results in binary.

```js
(1 >> 0).toString(2); // 1
(-1 >> 0).toString(2); // -1
(1 >>> 0).toString(2); // 1
(-1 >>> 0).toString(2); // 11111111111111111111111111111111  (4294967295 in decimal)
```

Negative numbers are generally represented with 2's complement.

```js
2's complement = reverse the bits and add 1

1 in 32-bit binary // 00000000000000000000000000000001
1's complement of 1 = flip all bits = // 11111111111111111111111111111110
2's complement of = 1's complement + 1 // 11111111111111111111111111111110 + 1

-1 // 11111111111111111111111111111111
```

So, what happened was,

- -1 gets converted it to 2's complement.
- Shift zero number of bits to the right. That means do not shift any bits.
- Return the result as an unsigned 32-bit integer.

This always results in an unsigned integer between 0 (all 0 bits) and 0xFFFFFFFF (all 1 bits) because after `>>>` operation, the 1s on the left no longer represent signedness of number.

## So is that all?

No, it's not. This is JavaScript we're talking about.

_When life gives lemons, JavaScript tries to make orange juice out of it._

```js
-1 >>> 0; // 4294967295  Ok, I get it

// But,

"lemons" >> 0; // 0     🤷‍♂️
"lemons" >>> 0; // 0     🤷‍♂️

undefined >> 0; // 0     🤷‍♂️
undefined >>> 0; // 0     🤷‍♂️

null >> 0; // 0     🤷‍♂️
null >>> 0; // 0     🤷‍♂️
```

That's JavaScript coercion gods working their magic.

When `>>>` failed coercing "lemons" to a number, it resulted in 0 to ensure an integer result.

## An example usage

```tsx
let numbers = [1, 2, 3, 4, 5];

numbers.splice(numbers.indexOf(6), 1);

// numbers -> [1,2,3,4] --- Oops
```

Whenever you use `splice` with `indexOf()` in JS, always check if index is > 0. Otherwise if element is not found, `.splice(-1, 1)` removes the last element.

The '_420 byte alternative to a popular library_' way to write this is,

```tsx
numbers.splice(numbers.indexOf(element) >>> 0, 1);
```

If `indexOf(element)` is -1, We know `-1 >>> 0` will be `4294967295`. So splice wouldn't remove anything wrong.

Seriously, don't write code like that. Unless you are trying to save the world with 50 fewer bytes of course!

## What does <<< do then?

It doesn't exist. It'd be useless because there won't be any difference between `<<<` and `<<` even if it existed. Think about it.

Use your new-found `>>>` powers carefully. The best way to use is to avoid it.

### References

[Stackoverflow](https://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it)

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)

[ExploringJS](https://exploringjs.com/impatient-js/ch_numbers.html#bitwise-shift-operators)
