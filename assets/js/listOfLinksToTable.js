'use strict'

// html page with links modify to table with link in one column
// and text in second column

const table = document.createElement('table');

[...document.links].forEach(({
    href,
    textContent
}) => {
    const row = table.insertRow();

    const cellInfo = row.insertCell();
    const cellLink = row.insertCell();

    cellInfo.textContent = textContent;

    const a = document.createElement('a');
    a.href = href;
    a.textContent = textContent;
    cellLink.append('a');
})
document.body.prepend(table);