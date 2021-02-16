// local reviews data
const reviews = [
  {
    id: 1,
    name: "steve jobs",
    job: "apple founder",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    text:
      "By March 1976, Wozniak completed the basic design of the Apple I computer and showed it to Jobs, who suggested that they sell it; Wozniak was at first skeptical of the idea but later agreed. In April of that same year, Jobs, Wozniak, and administrative overseer Ronald Wayne founded Apple Computer Company (now called Apple Inc.) as a business partnership in Jobs's parents' Crist Drive home on April 1, 1976.",
  },
  {
    id: 2,
    name: "bill gates",
    job: "microsoft founder",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/330px-Bill_Gates_2018.jpg",
    text:
      "Gates had primary responsibility for Microsoft's product strategy from the company's founding in 1975 until 2006. He gained a reputation for being distant from others; an industry executive complained in 1981 that Gates is notorious for not being reachable by phone and for not returning phone calls",
  },
  {
    id: 3,
    name: "mark zuckerberg",
    job: "facebook founder",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    text:
      "Zuckerberg began using computers and writing software in middle school. His father taught him Atari BASIC Programming in the 1990s, and later hired software developer David Newman to tutor him privately. Zuckerberg took a graduate course in the subject at Mercy College near his home while still in high school. ",
  },
  {
    id: 4,
    name: "sundar pichai",
    job: "google ceo",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sundar_Pichai_WEF_2020.png/330px-Sundar_Pichai_WEF_2020.png",
    text:
      "Pichai worked in engineering and product management at Applied Materials and in management consulting at McKinsey & Company. Pichai joined Google in 2004, where he led the product management and innovation efforts for a suite of Google's client software products, including Google Chrome and Chrome OS, as well as being largely responsible for Google Drive.",
  },
];

//select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function (){
  showPerson(currentItem);
});

// show person based on item
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

//show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
