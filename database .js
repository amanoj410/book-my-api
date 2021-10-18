const books =[
    {
      ISBN:"12345 book",
      title:"wings of fire",
      pubDate:"2021-07-07",
      language:"en",
      numPage:816,
      author:[1,2],
      publication:[1],
      category:["tech","programming","cryptography"],
    },
];

const author =[
    {
      id:1,
      name:"Manoj",
      books:["12345book"],
    },
    {
      id:2,
      name:"aravinthraj",
      books:["12345book"],
    },
];

const publication =[
    {
      id:1,
      name:"writex",
      books:["2345book"],
    },
];


module.exports={books,authors,publications}