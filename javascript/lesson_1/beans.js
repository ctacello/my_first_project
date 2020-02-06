function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, chr) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === chr) {counter++;}
    }
    return counter;
  }

  countChar();