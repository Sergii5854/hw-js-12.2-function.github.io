window.onload = function () {

  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  function factorial(num) {
    return (num < 2) ? 1 : factorial(num - 1) * num;
  }


  function fib(num) {

  }


  function isSorted(arr) {

  }


  function reverse(str) {

  }


  function indexOf(arr, num) {

  }


  function isPalindrome(str) {

  }


  function missing(array) {

  }

  function isBalanced(str) {

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


  console.group('reverse');
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


  console.group('missing');
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