import axios from 'axios';

const Tabs = topics => {
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//

	// create the parent div element with the necessary class
	let divTopics = document.createElement('div');
	divTopics.classList.add('topics');

	// create and append a div to a parent div 'divTopics' for each topic in the parameter 'topics'
	topics.forEach(topic => {
		let div = document.createElement('div');
		div.classList.add('tab');
		div.textContent = topic;

		// gives each tab an event listener to filter the articles. MOSTLY Finished
		div.addEventListener('click', e => {
			let currentCards = document.querySelectorAll('.cards-container .card');
			currentCards.forEach(card => {
				card.classList.add('cardHide');
				card.classList.remove('cardShow');
				// console.log(card);
				// need something i can check the card against to see if matches the tab
				if (card.classList.value.includes(topic)) {
					card.classList.remove('cardHide');
					// console.log(card);
					card.classList.add('cardShow');
				}
			});
		});

		divTopics.appendChild(div);
	});

	// deliver the grand-daddy-o of all divs
	return divTopics;
};

const tabsAppender = selector => {
	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//

	axios
		.get(`https://lambda-times-api.herokuapp.com/topics`)
		.then(futureData => {
			// In One.....'JORDAN!' <swish>my code</swish>
			document.querySelector(selector).appendChild(Tabs(futureData.data.topics));
		})
		// logs the error if it occurs
		.catch(err => console.log(err));
};

export { Tabs, tabsAppender };
