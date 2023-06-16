

/**
 * @returns {Promise<Object>} Quote information
 */
const fetchQuote = async () => {

    const response = await fetch('https://strangerthings-quotes.vercel.app/api/quotes');
    const data = await response.json();

    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const StrangerThingsApp = async (element) => {

    element.innerHTML = 'Loading...';

    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {

        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);

    }

    await fetchQuote().then(renderQuote)

    nextQuoteButton.addEventListener('click', async () => {
        element.replaceChildren(quoteLabel, authorLabel);
        renderQuote(await fetchQuote());
    });


}