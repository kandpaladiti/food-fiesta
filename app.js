// local reviews data
const reviews = [
  {
    id: 1,
    name: "North Indian Dish",
    dish: "Dal Makhani",
    img:
      "https://recipesofhome.com/wp-content/uploads/2020/12/dal-makhani-recipe-1024x683.jpg",
    text:
      "Dal makhani is the queen of all dal recipes. You can easily find this popular dal recipe from all of the dhabas to most indian restaurants menu. This creamy dal makhani is the most popular north indian recipes that everyone wants to eat.",
  },
  {
    id: 2,
    name: "South Indian Dish",
    dish: "Idli and Sambhar",
    img:
      "https://www.tarladalal.com/td_cont_img/Idli-(2).JPG",
    text:
      "When one mentions South Indian food, idli, dosa and vada are the first dishes that come to one's mind - and it's fair enough because these dishes are popular in all the South Indian states. It is a daring risk to venture into the question of which state they originated in - so we will not touch upon that, but the fact remains that these are much-loved foods all over South India. Served with the quintessential Sambhar and Chutney."
  },
  {
    id: 3,
    name: "Gujarati Dish",
    dish: "Khaman - The Sponge Snack",
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/Dhokla_20180327130008.jpg",
    text:
      "A tasty and healthy steamed snack made from freshly ground lentils and chickpea flour, it is very similar to its humble cousin, the world-famous -dhokla. Popular adaptations of the khaman include Ameri khaman, Nylon khaman and Masala khaman.",
  },
  {
    id: 4,
    name: "Maharashtrian Dish",
    dish: "Kothimbir Vadi",
    img:
      "https://www.crazymasalafood.com/wp-content/images/kothimbir-vadi-1.jpg",
    text:
      "Kothimbir is the Marathi word for coriander. In Maharashtra, we can have theses vadis with tomato sauce. These are prepared with besan (gram flour) and a thick paste is prepared. The mixture is prepared and all spices are cooked and then it form a thick rectangular base, which is cut into square pieces and served with tils (sesame) spread all over.",
  },
];

// select items
const img = document.getElementById("person-img");
const category = document.getElementById("category");
const dish = document.getElementById("dish");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
  showPerson();
});

// show person based on item

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  category.textContent = item.name;
  dish.textContent = item.dish;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click',function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});
// show prev person

prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click',function(){
currentItem = Math.floor(Math.random() * reviews.length);
console.log(currentItem);
showPerson();
});