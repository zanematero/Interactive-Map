var fourSquare = fetch("fsq3JjfdCjlBePidRx17mv1EHC/JK/+Yb/iUEem+GsoU4og=", {
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
});
    fourSquare.then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));