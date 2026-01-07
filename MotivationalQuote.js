// "Quotes powered by the QuoteSlate API"
// https://quoteslate.vercel.app/api/quotes/random?tags=motivation

// https://quotes-api-self.vercel.app/quote

function motivational(){
    let motivationalQuote = document.querySelector(".motivation-2 p")
    let authorName = document.querySelector(".motivation-3 p")

    async function fetchQuote(){
        let rawResponse = await fetch('https://quotes-api-self.vercel.app/quote');
        let response = await rawResponse.json();
        console.log(response);
        setTimeout(() => {
            motivationalQuote.innerHTML = response.quote;
            authorName.innerHTML = `- ${response.author}`;
        }, 1000);
    }
    fetchQuote()
}

export default motivational;