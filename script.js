'use strict';
// Задание: Дано число N, необходимо посчитать количество нулей на конце числа,
// являющегося результатом вычисления факториала N!
(function(x){
    if(x <= 0)
        console.log('0 or less');
     else {
    let factorial = 1, numberAsString, numberOfzeros=0;
    for(let i=1;i<=x;i++)
        factorial *= i;
    numberAsString =''+factorial;
    for(let y=numberAsString.length-1;y>=0;y--){
        if(numberAsString[y]==0)
            numberOfzeros++;
         else
            break; 
    }
    console.log('Factorial of '+x+' = '+factorial+', number of zeroes at the end of the factorial = '+numberOfzeros);
 }
}(15));

// Задание: Написать программу, которая на основании запроса данных с сайта http://jsonplaceholder.typicode.com/users 
// определит пользователей (name), у которых email принадлежит доменам верхнего уровня org или net.
(function sendRequest(){
        let urlTest ='https://jsonplaceholder.typicode.com/users';
        let req = new XMLHttpRequest();
        req.open('GET', urlTest);
        req.onload=function(){
          let data = JSON.parse(req.response);
          data.forEach(element => {
            if(element.email.indexOf('.org') > -1 || element.email.indexOf('.net') >-1 ){
              console.log(element.name);
            }
          });
        };
        req.send();
      }());

