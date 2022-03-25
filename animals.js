// what animals could a person be -
//Bat, Beaver, racoon, fox, skunk, squirrel, white-tail deer, bunny, woodchuck, bald eagle, seagull, owl, moth, canada geese, turkey, woodpecker, butterfly, coyote, mourning dove, swan, mouse
// assign each answer a point value in a category, add those up and store that somewhere. Maybe divide animals up in categories
//ok maybe make a variable for each animal, store all the points in each one depending on the question, and then whatever one has the highest number wins!
// so, for each answer a number will be added into certain animal variables. At the end, whichever variable has the higest number is the animal that is chosen + then displayed to the page.

document.getElementById("form1").onsubmit = function () {
  //displays the response DOM element
  document.getElementById("response").style.display = "block";

  //resets the DOM element on submit
  document.getElementById("answer").innerHTML = "";

  travel = document.querySelector('input[name = "travel"]:checked').value;

  diet = document.querySelector('input[name = "diet"]:checked').value;

  sleep = document.querySelector('input[name = "sleep"]:checked').value;

  scary = document.querySelector('input[name = "scary"]:checked').value;

  temper = document.querySelector('input[name = "temper"]:checked').value;

  season = document.querySelector('input[name = "season"]:checked').value;

  activity = document.querySelector('input[name = "activity"]:checked').value;

  color = document.querySelector('input[name = "color"]:checked').value;

  smart = document.querySelector('input[name = "smart"]:checked').value;

  social = document.querySelector('input[name = "social"]:checked').value;

  // initialize score variables
  let bat = 0;
  let beaver = 0;
  let raccoon = 0;
  let fox = 0;
  let skunk = 0;
  let squirrel = 0;
  let deer = 0;
  let bunny = 0;
  let woodchuck = 0;
  let eagle = 0;
  let seagull = 0;
  let owl = 0;
  let moth = 0;
  let geese = 0;
  let turkey = 0;
  let butterfly = 0;
  let coyote = 0;
  let dove = 0;
  let swan = 0;
  let mouse = 0;
  let snapper = 0;
  let turtle = 0;
  let snake = 0;
  let salamander = 0;
  let frog = 0;

  //function to calculate score for each question
  function eachscore(x) {
    if (x === "walking") {
      console.log("TEST");
      fox = fox + 1;
      deer = deer + 1;
      coyote = coyote + 1;
      skunk = skunk + 1;
      turkey = turkey + 1;
    }
    if (x == "flying") {
      bat = bat + 1;
      eagle = eagle + 1;
      seagull = seagull + 1;
      owl = owl + 1;
      moth = moth + 1;
      dove = dove + 2;
      butterfly = butterfly + 1;
    }
    if (x == "swimming") {
      snapper = snapper + 1;
      swan = swan + 1;
      geese = geese + 1;
      turtle = turtle + 2;
      frog = frog + 1;
      beaver = beaver + 2;
    }
    if (x == "scurrying") {
      mouse = mouse + 1;
      squirrel = squirrel + 1;
      bunny = bunny + 1;
      raccoon = raccoon + 1;
      woodchuck = woodchuck + 1;
      snake = snake + 1;
      salamander = salamander + 1;
    } // Q2 options
    if (x == "garbage") {
      raccoon = raccoon + 2;
      skunk = skunk + 1;
      mouse = mouse + 1;
      squirrel = squirrel + 2;
    }
    if (x == "veg") {
      bunny = bunny + 2;
      moth = moth + 1;
      butterfly = butterfly + 1;
      dove = dove + 1;
      geese = geese + 1;
      turkey = turkey + 1;
      turtle = turtle + 1;
      woodchuck = woodchuck + 1;
      beaver = beaver + 1;
    }
    if (x == "meat") {
      fox = fox + 2;
      seagull = seagull + 2;
      eagle = eagle + 2;
      coyote = coyote + 2;
      snake = snake + 2;
      owl = owl + 2;
    }
    if (x == "whatever") {
      deer = deer + 2;
      snapper = snapper + 2;
      bat = bat + 2;
      frog = frog + 2;
      salamander = salamander + 1;
    }
    // Q3 options sleep
    if (x == "morning") {
      squirrel = squirrel + 1;
      butterfly = butterfly + 1;
      turkey = turkey + 1;
      swan = swan + 1;
    }
    if (x == "night") {
      moth = moth + 1;
      owl = owl + 1;
      frog = frog + 1;
      bat = bat + 1;
      coyote = coyote + 1;
      mouse = mouse + 1;
    }
    if (x == "whenever") {
      raccoon = raccoon + 1;
      turtle = turtle + 1;
      salamander = salamander + 1;
      skunk = skunk + 1;
    } // Q4 options
    if (x == "very") {
      skunk = skunk + 1;
      snapper = snapper + 1;
      coyote = coyote + 1;
      snake = snake + 1;
    }
    if (x == "kinda") {
      bat = bat + 1;
      geese = geese + 1;
      moth = moth + 1;
      owl = owl + 1;
      eagle = eagle + 1;
      beaver = beaver + 1;
    }
    if (x == "annoying") {
      raccoon = raccoon + 1;
      squirrel = squirrel + 1;
      seagull = seagull + 1;
      deer = deer + 1;
      mouse = mouse + 1;
      turkey = turkey + 1;
      fox = fox + 1;
    }
    if (x == "not") {
      butterfly = butterfly + 1;
      dove = dove + 1;
      bunny = bunny + 1;
      turtle = turtle + 1;
      frog = frog + 1;
      salamander = salamander + 1;
      swan = swan + 1;
      woodchuck = woodchuck + 1;
    }
    // Q5 options
    if (x == "cranky") {
      snapper = snapper + 2;
      beaver = beaver + 1;
      geese = geese + 2;
    }
    if (x == "grumpy") {
      seagull = seagull + 1;
      turkey = turkey + 1;
      skunk = skunk + 1;
      owl = owl + 1;
      eagle = eagle + 1;
    }
    if (x == "startled") {
      mouse = mouse + 1;
      deer = deer + 1;
      dove = dove + 1;
      bunny = bunny + 1;
      frog = frog + 1;
      fox = fox + 1;
      snake = snake + 1;
      woodchuck = woodchuck + 1;
    }
    if (x == "chill") {
      turtle = turtle + 1;
      moth = moth + 1;
      bat = bat + 1;
      beaver = beaver + 1;
      salamander = salamander + 2;
      swan = swan + 1;
    }
    //Q6
    if (x == "spring") {
      moth = moth + 2;
      bunny = bunny + 1;
      turtle = turtle + 1;
      frog = frog + 1;
      salamander = salamander + 1;
      swan = swan + 1;
    }
    if (x == "summer") {
      butterfly = butterfly + 2;
      seagull = seagull + 1;
      snapper + 1;
      bat = bat + 1;
      skunk = skunk + 1;
      beaver = beaver + 1;
      snake = snake + 1;
      deer = deer + 1;
      eagle = eagle + 1;
    }
    if (x == "fall") {
      raccoon = raccoon + 1;
      geese = geese + 1;
      squirrel = squirrel + 1;
    }
    if (x == "winter") {
      woodchuck = woodchuck + 1;
      fox = fox + 1;
      coyote = coyote + 1;
      dove = dove + 1;
    }
    // Q7
    if (x == "sleeping") {
      squirrel = squirrel + 1;
      turtle = turtle + 1;
      mouse = mouse + 1;
      dove = dove + 1;
      snapper = snapper + 1;
      moth = moth + 1;
    }
    if (x == "scream") {
      turkey = turkey + 1;
      fox = fox + 1;
      eagle = eagle + 1;
      frog = frog + 1;
      bat = bat + 2;
      seagull = seagull + 1;
    }
    if (x == "eating") {
      butterfly = butterfly + 1;
      geese = geese + 1;
      bunny = bunny + 1;
      swan = swan + 1;
      raccoon = raccoon + 2;
      woodchuck = woodchuck + 2;
    }
    if (x == "sneaking") {
      snake = snake + 1;
      beaver = beaver + 1;
      skunk = skunk + 1;
      coyote = coyote + 1;
      deer = deer + 1;
      fox = fox + 1;
      owl = owl + 2;
    }
    // Q8
    if (x == "brown") {
      beaver = beaver + 1;
      raccoon = raccoon + 1;
      deer = deer + 2;
      bat = bat + 1;
      mouse = mouse + 1;
      owl = owl + 1;
      squirrel = squirrel + 1;
      eagle = eagle + 1;
      dove = dove + 1;
      woodchuck = woodchuck + 1;
    }
    if (x == "green") {
      frog = frog + 1;
      moth = moth + 1;
      snake = snake + 1;
      turtle = turtle + 1;
      snapper = snapper + 1;
      geese = geese + 1;
    }
    if (x == "white") {
      swan = swan + 1;
      bunny = bunny + 1;
      seagull = seagull + 1;
      coyote = coyote + 1;
      skunk = skunk + 1;
    }
    if (x == "red") {
      fox = fox + 1;
      salamander = salamander + 1;
      turkey = turkey + 1;
      butterfly = butterfly + 1;
    }
    // Q9
    if (x == "genius") {
      owl = owl + 1;
      bat = bat + 1;
      butterfly = butterfly + 1;
    }
    if (x == "smart") {
      fox = fox + 1;
      seagull = seagull + 1;
      eagle = eagle + 1;
      swan = swan + 1;
      snake = snake + 1;
      coyote = coyote + 1;
      raccoon = raccoon + 1;
    }
    if (x == "average") {
      mouse = mouse + 1;
      turkey = turkey + 2;
      geese = geese + 1;
      snapper = snapper + 1;
      beaver = beaver + 1;
      woodchuck = woodchuck + 1;
    }
    if (x == "dumb") {
      dove = dove + 1;
      bunny = bunny + 1;
      deer = deer + 1;
      salamander = salamander + 1;
      squirrel = squirrel + 1;
    }
    // Q10
    if (x == "social") {
      butterfly = butterfly + 1;
      beaver = beaver + 1;
      mouse = mouse + 1;
    }
    if (x == "friends") {
      turtle = turtle + 1;
      bunny = bunny + 1;
      squirrel = squirrel + 1;
      raccoon = raccoon + 1;
      geese = geese + 1;
    }
    if (x == "few") {
      turkey = turkey + 1;
      seagull = seagull + 1;
      dove = dove + 1;
      moth = moth + 1;
      deer = deer + 1;
      swan = swan + 1;
      eagle = eagle + 1;
      skunk = skunk + 2;
      frog = frog + 1;
    }
    if (x == "none") {
      salamander = salamander + 1;
      owl = owl + 1;
      woodchuck = woodchuck + 1;
      coyote = coyote + 1;
      snapper = snapper + 1;
      snake = snake + 1;
      fox = fox + 1;
    }
  }

  // for the above function, you could also change the 1 to a variable so you could give more points for certain questions

  //call function for each question
  eachscore(eval("travel"));
  eachscore(eval("diet"));
  eachscore(eval("sleep"));
  eachscore(eval("scary"));
  eachscore(eval("temper"));
  eachscore(eval("season"));
  eachscore(eval("activity"));
  eachscore(eval("color"));
  eachscore(eval("smart"));
  eachscore(eval("social"));

  all = [
    bat,
    beaver,
    raccoon,
    fox,
    skunk,
    squirrel,
    deer,
    bunny,
    woodchuck,
    eagle,
    seagull,
    owl,
    moth,
    geese,
    turkey,
    butterfly,
    coyote,
    dove,
    swan,
    mouse,
    snapper,
    turtle,
    snake,
    salamander,
    frog,
  ];

  //get the max score  in the array
  maxscore = Math.max.apply(Math, all);

  // object holding scores and feedback
  scores = [
    { index: 0, feedback: "Little Brown Bat" },
    { index: 1, feedback: "beaver" },
    { index: 2, feedback: "raccoon" },
    { index: 3, feedback: "red fox" },
    { index: 4, feedback: "skunk" },
    { index: 5, feedback: "squirrel" },
    { index: 6, feedback: "deer" },
    { index: 7, feedback: "bunny" },
    { index: 8, feedback: "woodchuck" },
    { index: 9, feedback: "bald eagle" },
    { index: 10, feedback: "seagull" },
    { index: 11, feedback: "barn owl" },
    { index: 12, feedback: "luna moth" },
    { index: 13, feedback: "geese" },
    { index: 14, feedback: "turkey" },
    { index: 15, feedback: "monarch butterfly" },
    { index: 16, feedback: "coyote" },
    { index: 17, feedback: "mourning dove" },
    { index: 18, feedback: "swan" },
    { index: 19, feedback: "field mouse" },
    { index: 20, feedback: "snapper" },
    { index: 21, feedback: "turtle" },
    { index: 22, feedback: "snake" },
    { index: 23, feedback: "salamander" },
    { index: 24, feedback: "frog" },
  ];

  //figure out which index # holds the max score
  for (i = 0; i < all.length; i++) {
    if (all[i] == maxscore) {
      //this gets one answer, the last one it encounters with a match
      document.getElementById("answer").innerHTML = scores[i].feedback;

      //this version would allow for appending multiple answers; replace statement above
      //document.getElementById("answer").innerHTML += scores[i].feedback + "; ";
    }
  }

  return false; // required to not refresh the page; just leave this here
}; // end the submit function
