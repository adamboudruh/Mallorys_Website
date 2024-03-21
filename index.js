const requestURL = 'https://api.thecatapi.com/v1/images/search?api_key=live_CACrAHKlFXw8pQCqhN3cvkP0hziyp1C15DbWMm9qSIpLvaFXaRi1C2POqP1ynNyz'
const kittenBtn = document.querySelector('#kitten-btn');

kittenBtn.addEventListener('click', async () => {
    console.log('Button clicked.');
    const response = await fetch(requestURL, {
        method: 'GET'
    });
    const data = await response.json();
    console.log(data);
    kittenBtn.setAttribute('src', data[0].url);
})