
const newsInput = document.querySelector('#newsInput');
const newsContainer = document.querySelector(".container");
const API_KEY = "ff92c9f329d04450880f75ef7bdef104";
newsInput.addEventListener('input', (e) => {
    let query = newsInput.value;
    fetchNews()
});
//function serchNews(e) {
//    
//    if (query === "") {
 //       clearSerch()
 //   } else {
//        serchNewsApi(query)
//    }     
//}
function fetchNews(query) {   

    const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2023-01-05&source=id&author&title&description&urlToImage&url&apiKey=${API_KEY}`;
    return fetch(urlAPI)
        .then(response => {
            if (response.status === 404) {
                throw new Error();
            }
            return response.json();
        })
    .then(({articles}) => {
            renderNews(articles)
           return
        })
        .catch(error => {
            console.log(error)
         })
}
//function serchNewsApi(query) {
//    
//    fetchNews(query)
//        .then(data => {
 //           renderNews(data)
 //           return
 //       })
//        .catch(error => {
//            console.log(error)
//         })
//}
function renderNews(articles) {
    const markup = articles.map(({author, title, description, url, urlToImage}) => {
        return `
         
         <article class="news">
        <p><b>author</b>:${author}</p>
        <p><b>title</b>: ${title}</p>
        <p><b>description</b>: ${description}</p>
        <img  class="flags" width='200' src="${urlToImage}" alt="${title}">
        <a href="${url}"><b>utl</b>: ${url}</a>
         </article>
         `;
        }).join("");
    newsContainer.insertAdjacentHTML('beforeend',markup);
      
}

function clearSerch() {
   newsContainer.innerHTML = "";
}