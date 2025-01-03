const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");

let keyword = "";
let page = 1;

async function search(){
  keyword = searchBox.value;
  const url = `http://www.google.com/search/result'${page}`;

  const response = await fetch(url)
  const data = await response.json();

  if(page === 1){
    searchResult.innerHTML = "";
}

  const results = data.results;
  
  results.map((result) =>{
  const = document.creatElement("");
  scr= result.urls.small;
  const Link = document.creatElement("a");
  Link.href = result.link.html;
  Link.target = "_blank";

  Link.appendChild();
  searchResult.appendChild(link);
})
}

searchForm.addEventlistener("submit",(e) =>{
  e.preventDefault();
  page = 1;
  searchImages();
})  
  
