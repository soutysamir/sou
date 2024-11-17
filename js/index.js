

var randomIndex='';
 var previousIndex= -1;
function addQuote() {
    var quote= [{
   quoteStatment: `“Life isn't about finding yourself. Life is about creating yourself.”`,
     author: ` ― George Bernard Shaw</p>`,
          },
    { quoteStatment: `“I have not failed. I've just found 10,000 ways that won't work.”`,
        author: ` ― Thomas A. Edison</p>`},
     { quoteStatment: `“You can never get a cup of tea large enough or a book long enough to suit me.”`,
        author: ` ― C.S. Lewis</p>`},
     { quoteStatment: `“It is never too late to be what you might have been.”`,
        author: ` ― George Eliot</p>`},
    { quoteStatment: `“There are only two ways to live your life. One is as though nothing is a miracle.
                     The other is as though everything is a miracle.”`,
    author: ` ― Albert Einstein</p>`},
        { quoteStatment: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening,
     And live like it's heaven on earth.”`,
     author: ` -William W. Purkey`},
        
        
        ]
        
        
        do{                                                                  
          randomIndex = Math.floor(Math.random() *quote.length );                              //6                          //6                // ydy random tany
                                                        
        }while(randomIndex==previousIndex);                                                  //hal 6== -1  false          //hal 6==6 true
                                                                                              //p==5
        document.getElementById('wordQuote').innerHTML=(quote[randomIndex].quoteStatment);
         document.getElementById('author').innerHTML=(quote[randomIndex].author);            //print6
         console.log(randomIndex); 
         previousIndex=randomIndex;                                                         // previousIndex==6

      } 
      
         










        
       











 

     