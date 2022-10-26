let text = 'Numele meu este Cotoi Andrei Georgel';
let stringarr = ['numele', 'andrei'];

function hash(input, dictionary) {
	try {
		if (typeof input !== 'string') {
			throw 'Input should be a string';
		}

		var newString = input;

		if (typeof dictionary !== 'object') {
			throw 'Invalid dictionary format';
		}
		else {
			dictionary.forEach(element => {
				if (typeof element !== 'string') {
					throw 'Invalid dictionary format';
				}
				else {
					var matched;
					if (input.includes(element) === true) {
						matched = element;
						for (let i = 1; i < matched.length - 1; i++) {
							matched = matched.replace(matched[i], '#');
						}
						newString = newString.replace(element, matched);
					}
					else if (input.includes(element[0].toUpperCase() + element.substring(1))) {
						matched = element[0].toUpperCase() + element.substring(1);
						for (let i = 1; i < matched.length - 1; i++) {
							matched = matched.replace(matched[i], '#');
						}
						newString = newString.replace(element[0].toUpperCase() + element.substring(1), matched);
					}
					else {
						console.warn(`Element '${element}' has not been found.`);
					}
				}
			});
		}
		return newString;
	}
	catch(error) {
		throw error;
	}
}

const app = {
	hash
};

module.exports = app;

hash(text, stringarr);

// let word = 'andrei';
// let newstr = text.match(word[0].toUpperCase() + word.substring(1))
// console.log(text.includes(word[0].toUpperCase() + word.substring(1)));