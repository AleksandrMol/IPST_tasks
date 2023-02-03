function submitHandle (event) {
    event.preventDefault();
    let formParent = event.target.closest("form");
    formParent.submit();
}

function clearHandle (event) {
    event.preventDefault();
    let formParent = event.target.closest("form");
    formParent.reset();
}
