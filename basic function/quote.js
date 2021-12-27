const quotes = [
  {
    quote: 'When life gives you lemons, make lemonade',
    author: 'Elbert Hubbard',
  },
  {
    quote: "The world is your oyster. It's up to yo to find the pears.",
    author: 'Chris Gardner',
  },
  {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman',
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
    author: 'Bill Keane',
  },
  {
    quote: '사람을 낙원으로 삼지 마라',
    author: 'anonymous',
  },
  {
    quote: '좋았다면 추억이고, 나빴다면 경험이다.',
    author: 'anonymous',
  },
  {
    quote: '그냥, 가. 보. 자. 고.',
    author: 'anonymous',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
