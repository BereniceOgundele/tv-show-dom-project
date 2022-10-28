
//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
   makePageForEpisodes(allEpisodes);
     console.log(getAllEpisodes());
}


function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  
  episodeList.forEach( el => {
    let cardEl = document.createElement("div");
    let nameEl = document.createElement("p");
    console.log(el.name);

    nameEl.textContent = el.name;
    cardEl.appendChild(nameEl);
    rootElem.appendChild(cardEl);
  });



}

window.onload = setup;
