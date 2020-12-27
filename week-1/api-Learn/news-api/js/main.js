const API_KEY='8308c428fb8ae320787248d17e8cb4a7';

const API_URL=`https://gnews.io/api/v4/search?q=example&token=${API_KEY}`
//call onget news while window is loading
window.onload=function(){
	onGetNews();
}
console.log(API_URL);

function onGetNews(){

	//fetch from api url
	fetch(API_URL,{
		method: 'GET',
	})
		.then((response) => response.json())
		.then((data) => onDisplayNews(data.articles))
		.catch((error) => console.log(error));
}

/****************************
 * Function to display new data from array of news
 */
function onDisplayNews(news_articles){
    console.log(news_articles);
    let infoHtml='';
	news_articles.forEach(function(article){
        infoHtml=infoHtml+`<div id="news">
                            <h3>${article.title}</h3>
                            <div>${article.publishedAt}</div>
                            <img width="100%" src="${article.image}" alt="image">
                            <div>${article.description}</div>
                            <div>${article.source.name}</div>
                            <div>Source :<a>${article.source.url}</a></div>
                        </div>`
    });

    //when complete
    document.getElementById('news-container').innerHTML=infoHtml;
}