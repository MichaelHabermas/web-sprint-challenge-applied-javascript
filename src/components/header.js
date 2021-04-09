const Header = (title, date, temp) => {
	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>

	// create the necessary elements
	let divHeader = document.createElement('div');
	let spanDate = document.createElement('span');
	let h1Title = document.createElement('h1');
	let spanTemp = document.createElement('spam');

	// attribute all required class names
	divHeader.classList.add('header');
	spanDate.classList.add('date');
	spanTemp.classList.add('temp');

	// attribute each element's required text content
	h1Title.textContent = title;
	spanDate.textContent = date;
	spanTemp.textContent = temp;

	// append all elements to their appropriate parents
	divHeader.appendChild(spanDate);
	divHeader.appendChild(h1Title);
	divHeader.appendChild(spanTemp);

	// deliver the grand-daddy-o of all divs
	return divHeader;
};

const headerAppender = selector => {
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//
	// creates and appends the header, but isnt reuseable for anything except this One header? I think that's what's wanted, but I dont like it. But it works. Sew buttons.
	document.querySelector(selector).appendChild(Header('Lambda Times', 'January 6, 2021', '26°'));
};

export { Header, headerAppender };
