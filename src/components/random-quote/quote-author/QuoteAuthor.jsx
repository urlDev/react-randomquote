import React, { Component } from 'react';

import './quote.styles.css';

class QuoteAuthor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: '',
			author: ''
		};
	}

	componentDidMount() {
		this.getQuote();
	}

	getQuote() {
		fetch(
			'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
		)
			.then((res) => res.json())
			.then((data) => {
				data = data.quotes;
				let quoteNum = Math.floor(Math.random() * data.length);
				let randomQuote = data[quoteNum];

				this.setState({
					quote: randomQuote['quote'],
					author: randomQuote['author']
				});
			});
	}
	getNewQuote = () => {
		this.getQuote();
	};

	render() {
		const { quote, author } = this.state;

		return (
			<div>
				<div id="quote-box">
					<div id="text">
						<p>{quote}</p>
					</div>
					<div id="author">
						<p>{author}</p>
					</div>
					<div className="buttons">
						<a
							id="tweet-quote"
							href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}
							target="_blank"
							title="Post this quote on twitter!"
						>
							<i class="fab fa-twitter-square fa-3x" />
						</a>
						<button id="new-quote" onClick={this.getNewQuote}>
							New Quote
						</button>
					</div>
				</div>
				<div className="byUrl">
					<p>by urlDev</p>
				</div>
			</div>
		);
	}
}
export default QuoteAuthor;
