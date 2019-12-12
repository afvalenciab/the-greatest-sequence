# The Greatest Sequence
Given a number integer, find the greatest sequence of five consecutive digits.

Check the application in the link below:
[thegreatestsequence.web.app/](https://thegreatestsequence.web.app/)

![Greatest Sequence](https://the-greatest-sequence.s3-us-west-1.amazonaws.com/LandingPage.png)

# Documentation

### Execution

* Web Page: [thegreatestsequence.web.app/](https://thegreatestsequence.web.app/)
* Open in browser the file 'Index.html'.

### Notes about project

Get the number in an array.
```javascript
const listNumbers = number.split('').map(Number);
```


Get the distinct numbers in array and order in a descendent way to find the greatest numbers.
```javascript
const uniqueNumbersDesc = [...new Set(listNumbers)].sort((a,b) => b-a);
```


The loop 'for' finds the different groups of 5 consecutive numbers that start with the greatest number in the array and stores them in a new array.

In case the greatest number in the array does not fulfill the condition, the process is repeated again with the next greatest number.
```javascript
    for (let i=0; i < uniqueNumbersDesc.length ; i++) {
      let maxValue = uniqueNumbersDesc[i];
      listNumbers.filter((item, index) => {
        if ((lengthNumber - index >= 5) && (item === maxValue)) {
          listSequence.push(listNumbers.slice(index, index + 5).join(''));
        } 
      });

    ...

    }
```


Finally, the greatest sequence of five consecutive digits is obtained by consulting the maximum value of the groups obtained.
```javascript
    for (let i=0; i < uniqueNumbersDesc.length ; i++) {

      ...

      if(listSequence.length > 0){
        outputSequenceField.value = ("00000" + Math.max(...listSequence)).slice(-5);
        break;
      }
    }
```
