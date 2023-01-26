const print = (message) => { // Выводит значения в поле результатов, которое почему-то <p></p>
    const container = document.querySelector('[data-container="result"]')
    if (!container) return alert('Container for result not defined')
    container.innerHTML = message 
}

export { print }