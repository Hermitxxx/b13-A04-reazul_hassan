## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans 01 => The differences between the questioned DOM methods are given below: 
		  (1) getElementById => it fetches an element (html tag) from the DOM which helps us to modify the element in several ways.It only fetches elements having attribute "id". Syntax : document.getElementById("id")

		  (2) getElementsByClassName => it fetches all the elements (html tags) having same class name and gives a collection of html elements.Its different then getElementById which only fetches one element but the getElementsByClassName fetches multiple elements. Syntax : document.getElementsByClassName("class name")

		  (3) querySelector => its more like getElementById but has a different functionality.It can receive both "id" and "class" selector as parameter while the getElementById can only use "id".The main functionality of it is that if there's multiple element with same id or class selector , it will fetch the First most in the source code.
		  Syntax : document.querySelector("#id") and document.querySelector(".className")

		  (4) querySelectorAll => It will select all the html elements by the provided selector and returns a collection with the name NodeList , it works like an array but not really an array. Syntax : document.querySelectorAll("#id") and document.querySelectorAll(".className")

### 2. How do you create and insert a new element into the DOM?

Ans 02 => <!-- First Create an Element and then insert it into the dom by appenChild method -->
		  const newDiv = document.createElement("div");

		  GET A ELEMENT FROM THE DOM 
		  const section = document.getElementById("hero-section");
		  
		  THEN INSERT THE NEW DIV INTO THE SECTION
		  section.appenChild(newDiv)

### 3. What is Event Bubbling? And how does it work?

Ans 03 => Event bubbling is when you click on a child element and that event also triggers on all its parent elements going upwards. Like if you click a button inside a div, the click event will bubble up to the div, then to body, then to document. It starts from the target element and goes up to the root. Thats how it works basically, the event travels upward through the DOM tree.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans 03 => Event delegation mainly means stopping or minimizing Event bubbling where necessary.Its good practice to use event delegation because sometimes the application we will be making can cause unwanted behaviour because of event bubbling.We stop that bubbling means if a button is clicked the event does not travel upward through the DOM tree and triggers other events.

It's useful to have it for avoiding abnormal behavior of the program due to bubbling.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans 05 => preventDefault() stops the default action of an element. Like if you click a link it normally takes you to another page, but preventDefault() will stop that from happening. Or like when you submit a form it refreshes the page by default, preventDefault() prevents that.

stopPropagation() is different, it stops the event from bubbling up to parent elements. So if you click something and dont want the parent elements to know about it, you use stopPropagation() which ultimately helps us to delegate events and minimze bubbling.

Basically preventDefault() = stops browser default behavior, stopPropagation() = stops event bubbling to parents.


