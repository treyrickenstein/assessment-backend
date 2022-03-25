const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/compliment", (req, res) => {
  const compliments = ["your day will be great!",
					 "be hopeful!",
					 "Your the bein deep trouble.",
           
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


// app.get("/api/fortune", (req, res) => {
//   const fortune = ["You will soon be surrounded by good friends and laughter.", 
//   "You can see a lot just by looking.",
//   "When your heart is pure, your mind is clear.",

// ];

// let randomIndex1 = Math.floor(Math.random() * fortunes.length);
// let randomFortune = fortunes[randomIndex1];

// res.status(200).send(randomFortune);

// });


app.listen(4000, () => console.log("Server running on 4000"));

