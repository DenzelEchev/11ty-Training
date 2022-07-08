const {html} = require('common-tags');

function Card(title, link, linkText) {
    return html`
    <div class="card_container">
        <h2 class="card_title">${title}</h2>
        <a class="card_link" href="${link}">${linkText}</a>
    </div>
    `;
}

module.exports = Card;