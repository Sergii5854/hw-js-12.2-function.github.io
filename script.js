window.onload = function () {

// isPrime - Returns true or false, indicating whether the given number is prime.
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

// factorial - Returns a number that is the factorial of the given number.
  function factorial(num) {
    return (num < 2) ? 1 : factorial(num - 1) * num;
  }

// fib - Returns the nth Fibonacci number.
  function fib(num) {
    return num < 1 ? 0
        : num <= 2 ? 1
            : fib(num - 1) + fib(num - 2);
  }

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
  function isSorted(arr) {
    return arr.every(function (x, i) {
      return i === 0 || x >= arr[i - 1];
    });
  }

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
  function reverse(str) {
    return str.split("").reverse().join("");
  }

//indexOf - Implement the indexOf function for arrays.
  function indexOf(arr, num) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      if (arr[i] === num) {
        return i
      }
    }
    return -1;
  }

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
  function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split("").reverse().join("") ? true : false;
  }

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
  function missing(array) {
    var missing = undefined;
    var sorted = array.sort(function (a, b) {
      return a - b;
    });
    var max = Math.max.apply(null, array);

    for (var i = 1; i < max; i++) {
      if (sorted.indexOf(i) === -1) {

        return missing = i
      }
    }
    return missing
  }

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
  function isBalanced(str) {
    if (str.indexOf('}{') >= 0) {
      return false
    }
    var parentheses = "[]{}()";
    var stack = []; //Parentheses stack
    var i; //Index in the string
    var character; //Character in the string

    for (i = 0; character = str[i++];) {

      var bracePosition = parentheses.indexOf(character);
      var braceType;

      if (!~bracePosition) {
        continue;
      }

      braceType = bracePosition % 2 ? 'closed' : 'open';

      if (braceType === 'closed') {
        if (!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1)
          return false;
      } else {
        stack.push(character);
      }
    }

    return !stack.length;
  }

  console.group('isPrime');
  console.info(isPrime(0), 'right answer is : false ');
  console.info(isPrime(1), 'right answer is : false ');
  console.info(isPrime(17), 'right answer is : true ');
  console.info(isPrime(10000000000000), 'right answer is : false ');
  console.groupEnd();


  console.group('Factorial');
  console.info(factorial(0), 'right answer is : 1 ');
  console.info(factorial(1), 'right answer is : 1 ');
  console.info(factorial(6), 'right answer is : 720 ');
  console.groupEnd();


  console.group('Fibonacci');
  console.info(fib(0), 'right answer is : 0 ');
  console.info(fib(1), 'right answer is : 1 ');
  console.info(fib(10), 'right answer is : 55 ');
  console.info(fib(20), 'right answer is : 6765 ');
  console.groupEnd();


  console.group('isSorted');
  console.info(isSorted([]), 'right answer is : true ');
  console.info(isSorted([-Infinity, -5, 0, 3, 9]), 'right answer is : true ');
  console.info(isSorted([3, 9, -3, 10]), 'right answer is : false ');
  console.groupEnd();


  console.group('Reverse');
  console.info(reverse(''), 'right answer is : "" ');
  console.info(reverse('abcdef'), 'right answer is : fedcba ');
  console.groupEnd();

  console.group('indexOf');
  console.info(indexOf([1, 2, 3], 1), 'right answer is : 0 ');
  console.info(indexOf([1, 2, 3], 4), 'right answer is : -1 ');
  console.groupEnd();


  console.group('isPalindrome');
  console.info(isPalindrome(''), 'right answer is : true ');
  console.info(isPalindrome('abcdcba'), 'right answer is : true ');
  console.info(isPalindrome('abcd'), 'right answer is : false ');
  console.info(isPalindrome('A man a plan a canal Panama'), 'right answer is : true ');
  console.groupEnd();


  console.group('Missing');
  console.info(missing([]), 'right answer is : undefined ');
  console.info(missing([1, 4, 3]), 'right answer is : 2 ');
  console.info(missing([2, 3, 4]), 'right answer is : 1 ');
  console.info(missing([5, 1, 4, 2]), 'right answer is : 3 ');
  console.info(missing([1, 2, 3, 4]), 'right answer is : undefined ');
  console.groupEnd();


  console.group('isBalanced');
  console.info(isBalanced('}{'), 'right answer is : false ');
  console.info(isBalanced('{{}'), 'right answer is : false ');
  console.info(isBalanced('{}{}'), 'right answer is : false ');
  console.info(isBalanced('foo { bar { baz } boo }'), 'right answer is : true ');
  console.info(isBalanced('foo { bar { baz }'), 'right answer is : false ');
  console.info(isBalanced('foo { bar } }'), 'right answer is : false ');
  console.groupEnd();


};