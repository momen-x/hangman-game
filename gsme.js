let array_countTry=[0,1,2,3,4,5,6,7,8];
let counter=0;
let allowTry=9;




let word={
    programming_languge:['java script','java','python','c#','php','go','mysql','fortner','scala'],
    Poys_name:['Ahamed','mohammed','Hasan','Mosa','Moaz','Hosny','Moamen','Iprahim'],
    Girls_name:['Haya','Sara','Yasmain','Tasnim','Shahed','Farah','Huda'],
    Contry:['Palestine','Qatar','Egypt','Syria','Jorden','Moroco'],
}

//to macke the object key as array
let category_key=Object.keys(word);
//to select one key by random way 
let category=category_key[Math.floor(Math.random()*category_key.length)];
document.getElementById('cetogory').innerHTML=category;
let arrLen=word[category].length;
//to select random word
let randomWord=word[category][Math.floor(Math.random()*arrLen)]

document.getElementById('gameDraw').style.visibility='hidden';

/////////////////////////////////////////////////////////
let strLen=randomWord.length;
let txt=document.createTextNode(`guss the word , it's have ${strLen} leaters ,your allow try is 9 times`);
let txt3=document.createElement('h3');
txt3.id='Hi';
txt3.appendChild(txt);
let head=document.getElementById('head');
head.classList.add('details');
head.appendChild(txt3);

//////////////////////////////////////////////////

let last=document.getElementsByClassName('feet')[0];
for (let i = 0; i < randomWord.length; i++) {

    let spa=document.createElement('span');
    spa.id='spa'+i;
    last.appendChild(spa);
    
}
///////////////////////////////////////////////////

randomWord=randomWord.toUpperCase();
console.log(randomWord)



/////////////////////////////////////////////////
let win_array=[];
let isWin=false;
let isLose=false;
////////////////////////////////////////////////

function getLetters(leaters){


    let tit=document.getElementById('Hi');   
    let char1=document.getElementById(leaters);
    let newText='the char exist in : ';
    
  
 
let isExistChar=false;



 

   if((!isWin)&&(!isLose)&&(!char1.classList.contains('put')/**this class to granti not select same char more one time */)){

    char1.classList.add('put');

    for (let i = 0; i < randomWord.length; i++) {
        if(char1.innerHTML==randomWord.charAt(i)){
            let id="spa"+i;
            let item=document.getElementById(id);

            isExistChar=true;
            win_array.push(randomWord.charAt(i));
        newText+=(i+1)+",";
       item.innerHTML=randomWord.charAt(i);
        item.classList.add('correctPut');

        tit.innerHTML=newText;
    }
    }
    // 


if(!isExistChar&&allowTry!=counter){
 document.getElementById(array_countTry[counter]).style.visibility='visible';    
    
    counter++;
    tit.innerHTML=`this guss is incorrect  ,your allow try is ${allowTry-counter} times`;
}
  
   }


let isFound=true;
   for (let i = 0; i < randomWord.length; i++) {
if(!(win_array.includes(randomWord.charAt(i)))){
    isFound=false;break;
}     
    }
    if(allowTry==counter){
        isLose=true;
         tit.innerHTML=`nah you are loser the correct word is ${randomWord}`
         document.getElementById(array_countTry[8]).style.visibility='visible';    
    document.getElementsByClassName('leatersButton')[0].classList.add('finiched');
           /** هنا لازم اعمل الي بتعيد عند الخسارة */
           setInterval(function(){    tit.innerHTML+='.';},1000);
           setTimeout(function(){location.reload();},2400);
       return;
     }

    
    
    
    if(isFound){isWin=true;
        /** المفروض اخليها الان تعيد */
        document.getElementsByClassName('leatersButton')[0].classList.add('finiched');
        tit.innerHTML='pravo you win';
        setInterval(function(){    tit.innerHTML+='.';},1000);
        setTimeout(function(){location.reload();},2400);
   return;
    }
    console.log('is win ='+isWin);
}
   
    
   

    