export default function getInvoices() {
    const url = 'http://localhost:3001/Invoice';

    return fetch(url)
        .then(response => response.json())

}