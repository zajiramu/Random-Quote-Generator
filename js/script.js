/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * 'quotes' object array 
 *  each quote object has two properties, the quote as a string & the source or person who stated the quote, also as a string
***/

const quotes = [
  {
      quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams",
      source: "Dr. Seuss"
  },
  {
      quote: "Get busy living or get busy dying",
      source: "Andy Dufresne",
      citation: "The Shawshank Redemption",
      year: 1994
  },
  {
      quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do",
      source: "Mark Twain"
  },
  {
      quote: "Those who dare to fail miserably can achieve greatly",
      source: "John F. Kennedy"
  },
  {
      quote: "It is hard to fail, but it is worse never to have tried to succeed",
      source: "Theodore Roosevelt"
  },
  {
      quote: "If you want to live a happy life, tie it to a goal, not to people or things",
      source: "Albert Einstein"
  },
  {
      quote: "Never let the fear of striking out keep you from playing the game",
      source: "Babe Ruth"
  },
  {
      quote: "The successful warrior is the average man, with laser-like focus",
      source: "Bruce Lee"
  },
  {
      quote: "The successful warrior is the average man, with laser-like focus",
      source: "Ray Bradbury"
  },
  {
      quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present",
      source: "Bill Keane"
  },
  {
      quote: "You miss 100 percent of the shots you never take",
      source: "Wayne Gretzky"
  },
  {
      quote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it",
      source: "Henry Ford"
  } ];


/***
 * `getRandomQuote` function
 *  generates a random int between 0 and length-1 
 *  where length is the length of the quotes array 
 *  and uses this int to index, retrieve, and return a quote object 
***/

function getRandomQuote() {
    // get length of quotes array 
    let quotesLength = quotes.length;
    // generate random # from 0 up to & including length-1
    let randInt = Math.floor( Math.random() * quotesLength );
    // index quotes array using random int from above line
    // and return resulting random quote object 
    return quotes[randInt];
}


/***
 * `printQuote` function
 *  calls getRandomQuote to get a random quote object
 *  and builds a string literal of HTML using the returned quote object
 *  appends the built HTML string literal to the document so that it can be displayed
 *  on the page
***/

function printQuote() {
    // set randQuote to random quote object returned by calling function getRandomQuote
    const randQuote = getRandomQuote();
    // create initial quote HTML string literal for displaying the quote on the webpage
    //s set quoteHTML to this string
    let quoteHTML = `<p class = "quote">${randQuote.quote}</p>
                     <p class = "source">${randQuote.source}`;
    // if random quote object has a citation property 
    if(randQuote.citation) {
        // modify quote HTML string literal to include the citation 
        quoteHTML += `<span class="citation">${randQuote.citation}</span>`;
    }   
    // endif
    // if random quote object has a year property 
    if(randQuote.year) {
        // modify quote HTML string literal to include the year
        quoteHTML += `<span class="year">${randQuote.year}</span>`; 
    }
    // endif
    // finish creating quote HTML string literal; add closing 'p' tag
    quoteHTML += `</p>`;
    // set quoteDiv to the HTML div element object that'll contain the quote 
    let quoteDiv = document.getElementById('quote-box');
    // set innerHTML property of quoteDiv to the HTML quote string literal above 
    quoteDiv.innerHTML = quoteHTML;
}

/***
 * 'getRandomColor' function
 *  generates and returns a random CSS hex color value
 *  for e.g. #FFF011
***/

function getRandomColor() {

    // set hexDigits to string containing 0-9 and a-f
    // these represent valid hex values
    let hexDigits = '0123456789abcdef';

    // set hexDigitsArray to the array consisting of the 
    // comma separated list of values returned by using the spread operator
    // on the string variable hexDigits above
    let hexDigitsArray = [...hexDigits];

    // set hexColor to '#' 
    // this '#' starts every css hex color value string
    let hexColor = '#';

    // loop six times
    for( let i = 1; i < 6; i++) {
        // generate random integer between 0 & length of hexDigitsArray - 1
        let randomInteger = Math.floor( Math.random() * hexDigitsArray.length );
        // concatenate randomly indexed hex digit to hexColor string
        hexColor += hexDigitsArray[ randomInteger ];
    }

    // return hexColor
    // this now contains a random css hex color string
    // for e.g. #ab1ff2
    return hexColor;
}

/***
 * 'refreshQuote' function
 *  refreshes the page to display a random quote from the quotes objects array
 *  every 3 seconds regardless of if the 'Show another quote' button is clicked 
***/

function refreshQuote() {

    // set webPage to the div element in the DOM
    // containing the quote 
    let webPage = document.getElementsByTagName('body');

    // set the background color of the div in quoteDiv
    // to the random color generated by getRandomColor()
    webPage.style.backgroundColor = getRandomColor();

    // call function printQuote to generate & print a random quote on the page
    printQuote();
}

// call function setInterval with a 3 second (3000ms) delay as the second argument
// and function refreshQuote as the first argument for the action to repeat
// calls function refreshQuote after every 3 seconds
setInterval(refreshQuote,3000);

/***
 * click event listener for the print quote button
 * uses printQuote as event handler function
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);