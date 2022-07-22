// https://newsapi.org/v2/top-headlines?country=in&apiKey=faa4be120672496ab2d47b2a2de16ebe
// news api key : faa4be120672496ab2d47b2a2de16ebe

//Example request
// var url = 'https://newsapi.org/v2/everything?' +
// 'q=Apple&' +
// 'from=2022-07-22&' +
// 'sortBy=popularity&' +
// 'apiKey=faa4be120672496ab2d47b2a2de16ebe';

// var req = new Request(url);

// fetch(req)
// .then(function(response) {
// console.log(response.json());
// })
let main= document.getElementById("newsAccordion");
const xhr= new XMLHttpRequest();
    let api_key='faa4be120672496ab2d47b2a2de16ebe';
    //open the object
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`,true);//true for asynchronous

    //what to do when response is ready
    xhr.onload= function () {
        // 200 status means ok everything
        if(this.status===200){
            let json =JSON.parse(this.responseText);
            let articles =json.articles;
            str="";
            articles.forEach(function (element, index) {
            
                let news= `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body" style="background-color: rgb(250, 244, 236);">
                    Source: ${element["source"].name} 
                    <br>
                   ${element["content"]}  <a href="${element["url"]}">...more</a>
                   <hr>
                
                   ${element["publishedAt"]} BY ${element["author"]}
                  
                    <hr>
                    <img src="${element["urlToImage"]}" style="width:70vw;"> 
                    </div>
                </div>
            </div>`;
            str+=news;
            main.innerHTML = str;
             } );
            
        }
        else{
            console.error("error")
        }
    }

    // send  the request
    
    xhr.send();

