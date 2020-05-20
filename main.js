let newsList = []
let count = 1;
let time

const apiKey = "babe694f33a04cdab11865f2d27920bb"

const loadNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=money&page=${count}&sortBy=publishedAt&apikey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    let dataList = result.articles
    newsList = newsList.concat(dataList)
    render(newsList)
    console.log("what we get here", result);
}

function publicTime(time) {
    let newTime = time.toString().split("").splice(0, 10).join("")
    let newTime1 = newTime.replace("-", "")
    let newTime2 = newTime1.replace("-", "")
    console.log(newTime2)
    return moment(newTime2, "YYYYMMDD").fromNow()
}

const render = (list) => {
    console.log("you call render adn you have list", list)
    let newsHtml = list.map(item => `
    <div id ="newsArea">
        <div id="news">
            <div id="contentArea">
                <div id="title">${item.title}</div>
                <div id="source">${item.source.name}</div>
                <div id="publishedAt">${publicTime(item.publishedAt)}</div>
               
            </div>
            <div id="imgArea">
                <img src="${item.urlToImage}" alt="abc" width="200px">
            </div>
        </div>
    </div>

`).join("")

    document.getElementById("newsArea").innerHTML = newsHtml
    document.getElementById("page").innerHTML = `Number of pages:  ${newsList.length}`;
}

let page = () => {
    count++;
    loadNews()
}




loadNews()