

const showClubs = async() => {
  const fcJSON = await getClubs(); 
  const fcDiv = document.getElementById("fc-div"); 

  if(fcJSON == "") {
    console.log("invalid load of JSON"); 
    return; 
  }

  let num = 1; 

  fcJSON.forEach((club) => {
    const section = document.createElement("section"); 
    section.classList.add("club"); 
    fcDiv.append(section); 

    const name = document.createElement("h1"); 
    name.innerHTML = num+". "+club.name; 
    num++;
    section.append(name); 

    const loc = document.createElement("h3"); 
    loc.innerHTML = club.city; 
    section.append(loc);

    const stadium = document.createElement("p"); 
    stadium.innerHTML = "Stadium Name: "+club.stadiumName; 
    section.append(stadium); 

    const founded = document.createElement("p"); 
    founded.innerHTML = "Founded in "+club.founded; 
    section.append(founded); 

    const topScorersDiv = document.createElement("div");
    const Scoretitle = document.createElement("h3"); 
    Scoretitle.innerHTML = "All-Time Top Scorers:"; 
    topScorersDiv.append(Scoretitle); 

    let i = 1; 
    club.topScorers.forEach((player) => {
      const scorer = document.createElement("ul"); 
      scorer.innerHTML = i + ": "+ player; 
      i++;
      topScorersDiv.append(scorer); 
    });
    // const ScorersList = document.createElement("a");
    topScorersDiv.classList.add("scorerslist"); 
    section.append(topScorersDiv); 

    const img = document.createElement("img"); 
    img.src = "https://assignment13-242.onrender.com/" + club.stadium; 
    img.classList.add("stadiumImage"); 
    console.log(img); 
    section.append(img); 
  });
}

const getClubs = async() => {
  try {
    return (await fetch("https://assignment13-242.onrender.com/api/footballclubs")).json();
  } catch(error) {
    console.log("Error retrieving json"); 
    return ""; 
  }
}

window.onload = () => showClubs(); 