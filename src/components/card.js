import axios from 'axios';

const Card = article => {
	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//

	// create the necessary elements
	let divCard = document.createElement('div');
	let divHeadline = document.createElement('div');
	let divAuthor = document.createElement('div');
	let divImgContainer = document.createElement('div');
	let imgProfilePic = document.createElement('img');
	let spanName = document.createElement('span');

	// attribute all required class names
	divCard.classList.add('card');
	divHeadline.classList.add('headline');
	divAuthor.classList.add('author');
	divImgContainer.classList.add('img-container');

	// set required attributes
	imgProfilePic.setAttribute('src', article.authorPhoto);

	// attribute each element's required text content
	divHeadline.textContent = article.headline;
	spanName.textContent = article.authorName;

	// append all elements to their appropriate parents
	divCard.appendChild(divHeadline);
	divCard.appendChild(divAuthor);
	divAuthor.appendChild(divImgContainer);
	divAuthor.appendChild(spanName);
	divImgContainer.appendChild(imgProfilePic);

	// event listener to log the article's headline
	divCard.addEventListener('click', () => {
		console.log(article.headline);
	});

	// deliver the grand-daddy-o of all divs
	return divCard;
};

const cardAppender = selector => {
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//

	axios
		.get(`https://lambda-times-api.herokuapp.com/articles`)
		.then(futureData => {
			// get an array of all the different article topics as a array
			let dataKeys = Object.keys(futureData.data.articles);

			//loop over that topics/keys array to get at all the articles in each
			dataKeys.forEach(key => {
				let topicsCategory = futureData.data.articles[`${key}`];

				// loop over all the article objects in each topic and post to the Newsletter
				topicsCategory.forEach(article => {
					document.querySelector(selector).appendChild(Card(article));
				});
			});
		})
		// logs the error if it occurs
		.catch(err => console.log(err));
};

export { Card, cardAppender };
