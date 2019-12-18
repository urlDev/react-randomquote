import React from 'react';
import QuoteAuthor from '../random-quote/quote-author/QuoteAuthor';
import './random-quote.styles.css';

class RandomQuote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			author: ''
		};
	}

	render() {
		return (
			<div className="title">
				<QuoteAuthor />
			</div>
		);
	}
}

export default RandomQuote;
