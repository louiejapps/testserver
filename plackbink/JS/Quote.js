import { createQuoteItem } from './QuoteItem.js';

export const createQuote = (database, renderQuotes) => {
    const div = document.createElement('div');
    div.id = `quoteList`;

    div.innerHTML = `<p class="loading-message">Loading...</p>`;

    database.ref('slader').limitToLast(50).on('value', (snapshot) => {
        div.replaceChildren();

        if (!snapshot.exists()) {
            div.innerHTML = `<p class="no-quotes-message">No quotes available.</p>`;
            return;
        }

        snapshot.forEach((childSnapshot) => {
            div.prepend(createQuoteItem(childSnapshot.val(), childSnapshot.key, database, renderQuotes));
        });

    });

    return div;
};
