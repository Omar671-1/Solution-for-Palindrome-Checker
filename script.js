function palindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
       
       // Step 2: Check if the cleaned string is equal to its reverse
       return cleanStr === cleanStr.split('').reverse().join('');
   }
   console.log(palindrome("eye"));
   console.log(palindrome("_eye"));
   console.log(palindrome("race car"));
   console.log(palindrome("not a palindrome"));
   console.log(palindrome("A man, a plan, a canal. Panama"));
   console.log(palindrome("never odd or even"));
   console.log(palindrome("nope")); 
   console.log(palindrome("almostomla"));