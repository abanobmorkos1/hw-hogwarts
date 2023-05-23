if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {

////// DAY 1

// Query for your div with the id of container and set it to a variable named $container

const $container = $('#container');

// console.log $container

console.log($container)

// Create an <h1> element and set it to a variable called $h1 and console log it

const $h1 = $('<h1>')

// console.log($h1)

// Add some text inside the h1 element. Example text: 'Hogwarts'

$h1.text("hogwarts")


console.log($h1)
// Why isn't your $h1 it appearing on your page?
  
$container.append($h1)

///////Year2

// h2 element with your name

const $h2 = $('<h2>')
$h2.text('Abanob')

// h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const $h3 = $('<h3>').text('Ravenclaw')
$('#container').append($h3)

// h4 element with your pet's name
const $h4PetName = $('<h4>').text('simba').addClass('dog');
$('#container').append($h4PetName);

// this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
const $h4Wand = $('<h4>').text('Harrypotter');
$('#container').append($h4Wand);

// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):

// list items of

// butter beer
// invisibility cloak (add a class of secret)
// magic map (add a class of secret)
// time turner (add a class of secret)
// leash (for your pet, be sure to give this list element the same class as you gave your pet)
// Bertie Bott's Every Flavor [Jelly] Beans.
// append the unordered list to your container div

const $ul = $('<ul>').attr('storage' , 'trunk')
const items = [
  'butter beer' ,
  'invisibility cloak',
  'magic map',
  'time turner',
  'leash',
  "Bertie Botts Every Flavor [Jelly] Beans"
] 

for (const item of items) {
  const $li = $('<li>').text(item);
  if (item === 'invisibility cloak' || item === 'magic map' || item === 'time turner') {
    $li.addClass('secret');
  } else if (item === 'leash') {
    $li.addClass('dog');
  }
  $ul.append($li);
  $('#container').append($h1);    
};
$('#container').append($ul)
// Make a table
// Hint: Look under More Examples, <p>Simple table with header</p> at MDN to see the correct HTML element layout
// Right above your table add an h5 that says 'Spring 2017'
const $h5 = $('<h5>').text('Spring 2017')
const $table = $('<table>')
$('#container').append($table)


// Inside the table add a thead element
// Inside the thead element add two th elements
const $thead = $('<thead></thead>')
$table.append($thead , thead2)


// in the second th add the text Classes

const thead2 = $('<thead></thead>').text('Classes')
$table.append($thead , thead2)

// Create a tr element and add two td elements inside.
// in the first td add the day Monday
// in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
// Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
// In your main.css file, add a gray 1px solid border around your table, th elements and td elements
// In your main.css file, add a rule that will center your table on the page
// !!!!!!!!!!!!! Did this part in html and css



// Break your wand! (select the element that contains your wand and remove it)
$container.removeClass('$h4')
// Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
$('#container ul:firstchild').remove()
// Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
// !!!!! how do i add an element to an existent list? !!!!!
// Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
$h4PetName.css('coloredr','red')
// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)

// Have your pet come back (remove your pet from the DOM, put it back in its original location)



// School is so fun!

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Accident! You transmogrified your pet's leash into half cabbage
// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
// add an attribute of color:CHARTREUSE; in your main.css for all elements that have a class of cabbage
// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)


// Year 7
// Though your time at Hogwarts is nearly over, your journey of learning has just begun

// Update your class schedule to read 'Fall 2018'
// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
// Add some CSS to your page. Feel free to experiment and make this page your own
// Take a screenshot of your page and add it to your homework folder
})