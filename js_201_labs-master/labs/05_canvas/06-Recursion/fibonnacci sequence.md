# Fibonnacci Sequence

In this lab you should write a recursive implementation of the fibonnacci sequence.

The fibonnacci sequence can be calculated with this formula:

```js
nextNumber = previousNumber + previousPreviousNumber
```

If the sequence starts with 0.

The next number is just 1

```text
0, 1
^  ^
```

Since there are now two numbers, the next number is the first and second position added together `0 + 1`

```text
0, 1, 1
   ^  ^
```

The next number is `1 + 1`

```text
0, 1, 1, 2
```

And so on

```text
0, 1, 1, 2, 3, 5, 8, 13 ...
```

The typical recursive function that is asked of interviewees is to calculate the next number in the sequece, or to calculate position `n`.

```javascript

function fib(n){
    ...
}

```

```javascript
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
...

```

Once you have a recursive version working, write an alternative function that does it _without_ using recursion.

Put both in a sandbox project and display the results of:

```js
fib(12)
fib(234)
fib(999)
fib(55)
fib(754)
fib(345)
fib(222)
fib(555)
```
