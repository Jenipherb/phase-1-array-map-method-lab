const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

UpperCaseTest(tutorials);  
  return tutorials
}

function UpperCaseTest(tutorials)
  {
    for(let i = 0; i < tutorials.length; i++)
    {
      let sentance = tutorials[i];
      let words = sentance.split(' ');
      
      for(let j = 0; j < words.length; j++)
      {
        words[j] = words[j][0].toUpperCase() + words[j].substr(1);
      }

      words.join(' ');

      sentance = words;
      tutorials[i] = sentance;
    }

  }


//function titleCased(){
  //return titleCased.charAt(0).toUpperCase() + titleCased.slice(1);
  //return titleCased.map(tutorials => {
    //return tutorials.charAt(0).toUpperCase() + tutorials.sustring(1).toLowerCase(); 
  //})
//}

//const caps = tutorials.split(' ').map(capitalize).join(' ')
//console.log(titleCased(['what does the this keyword mean?']));
