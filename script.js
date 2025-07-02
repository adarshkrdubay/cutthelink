const button = document.getElementById("submit");
const result = document.getElementById("shortened-link");
const responseDiv = document.getElementById("response");
const responsenonDiv = document.getElementById("responsenon");
const resulterrer =document.getElementById("errer");

const base_url = "https://testuset.pythonanywhere.com/";

function isValidUrl(inputUrl) {
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?(\?.*)?$/;

    return urlPattern.test(inputUrl);
}
function shortenUrl(inputLink) {
    const url = encodeURIComponent(inputLink);

    const shortenUrl = `${base_url}/shorten`;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ long_url: inputLink })
    };

    return fetch(shortenUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.short_url) {
                return data.short_url;
            } else {
                throw new Error("Error occurred while shortening the URL.");
            }
        })
        .catch(error => {
            console.error("An error occurred:", error.message);
            throw error; // Re-throw the error to be caught at the caller
        });
}

button.addEventListener("click", () => {
    const url = document.getElementById("original-url").value;

    if (url === "") {
        resulterrer.textContent="No url provided"
        responsenonDiv.style.display = 'block';
    } else if (isValidUrl(url)) {
        responsenonDiv.style.display = 'none';
        button.textContent = "Wait";
        
        shortenUrl(url)
            .then(shortenedUrl => {
                responsenonDiv.style.display = 'none';
                console.log(`Shortened URL: ${shortenedUrl}`);
                result.textContent = shortenedUrl;
                result.href = shortenedUrl;
                responseDiv.style.display = 'block';
                button.textContent = "Shorten";
            })
            .catch(error => {
                console.error("An error occurred:", error.message);
                resulterrer.innerText = error.message;
                responsenonDiv.style.display = 'block';
                button.textContent = "Shorten";
            });
    } else {
         responseDiv.style.display = 'none';
        resulterrer.innerText = "Invalid URL";
        responsenonDiv.style.display = 'block';
          
        
    }
});
            
