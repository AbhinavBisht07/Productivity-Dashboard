// "Quotes powered by the QuoteSlate API"
// https://quoteslate.vercel.app/api/quotes/random?tags=motivation

// https://quotes-api-self.vercel.app/quote

function motivational(){
    let motivationalQuote = document.querySelector(".motivation-2 p")
    let authorName = document.querySelector(".motivation-3 p")

    async function fetchQuote(){
        let rawResponse = await fetch('https://quotes-api-self.vercel.app/quote');
        let response = await rawResponse.json();
        // console.log(response);
        motivationalQuote.innerHTML = "Fetching a fresh quote . . .";
        authorName.innerHTML = ". . .";
        setTimeout(() => {
            motivationalQuote.innerHTML = response.quote;
            authorName.innerHTML = `- ${response.author}`;
        }, 1000);
    }
    fetchQuote()

    //for changing quote on button click
    let changeQuoteBtn = document.querySelector(".motivation-3 button");
    changeQuoteBtn.addEventListener("click", function(){
        fetchQuote();
    })
}

export default motivational;