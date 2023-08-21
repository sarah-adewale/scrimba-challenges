// given this

// <div id="rating">
//   <span>*</span>
//   <span>*</span>
//   <span>*</span>
//   <span>*</span>
//   <span>*</span>
// </div>

// create a function in javascript when the span element is clicked, the class active should be added to the span 
// element and all element after it. also class active should be removed from all span element after it if there are any

function addActiveClass(event) {
  const spans = document.querySelectorAll('#rating span');

  // Remove 'active' class from all spans
  spans.forEach(span => span.classList.remove('active'));

  // Find the clicked span index
  const clickedIndex = Array.from(spans).indexOf(event.target);

  // Add 'active' class to the clicked span and subsequent spans
  for (let i = clickedIndex; i < spans.length; i++) {
    spans[i].classList.add('active');
  }
}

const spanElements = document.querySelectorAll('#rating span');
spanElements.forEach(span => {
  span.addEventListener('click', addActiveClass);
});


// function addEventListenerToSpans() {
//   const ratingDiv = document.getElementById('rating');
//   const spans = ratingDiv.getElementsByTagName('span');

//   for (let i = 0; i < spans.length; i++) {
//     spans[i].addEventListener('click', function () {
//       // Add 'active' class to the clicked span and all spans after it
//       for (let j = i; j < spans.length; j++) {
//         spans[j].classList.add('active');
//       }

//       // Remove 'active' class from all spans before the clicked span
//       for (let j = 0; j < i; j++) {
//         spans[j].classList.remove('active');
//       }
//     });
//   }
// }

// // Call the function to add the event listeners to the span elements
// addEventListenerToSpans();
