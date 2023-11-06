const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/footballclubs", (req, res) => {
  const footballclubs = []; 
  footballclubs[0] = {
    name: "Liverpool FC", 
    city: "Liverpool, England", 
    stadiumName: "Anfield", 
    founded: "1894", 
    topScorers: ["Ian Rush", "Roger Hunt", "Mohamed Salah" ,"Steven Gerrard" ,"Robbie Fowler"],
    // stadium: "https://membership-magazine.liverpoolfc.com/issue11/images/12_anfield_history/anfield_lead_CGI.png"
    stadium: "images/anfield.png"
  }; 
  footballclubs[1] = {
    name: "Barcelona FC", 
    city: "Barcelona, Spain", 
    stadiumName: "Camp Nou", 
    founded: "1899", 
    topScorers: ["Lionel Messi", "César Rodríguez", "Luis Suárez", "László Kubala", "Samuel Eto'o"],
    // stadium: "https://e0.365dm.com/16/03/1600x900/barcelona-nou-camp-new-nou-camp_3428469.jpg?20160309081919"
    stadium: "images/campnou.jpg"
  };
  footballclubs[2] = {
    name: "Real Madrid CF", 
    city: "Madrid, Spain", 
    stadiumName: "Santiago Bernabeu", 
    founded: "1902", 
    topScorers: ["Cristiano Ronaldo", "Karim Benzema","Raúl", "Alfredo Di Stéfano", "Santillana"],
    // stadium: "https://i.pinimg.com/originals/7c/e9/7a/7ce97af94d1ec5e411dafdf5890a62a2.jpg"
    stadium: "images/bernabeu.jpg"
  }; 
  footballclubs[3] = {
    name: "Bayern Munich",
    city: "Munich, Germany", 
    stadiumName: "Allianz Arena", 
    founded: "1900", 
    topScorers: ["Gerd Muller", "Robert Lewandowski", "Thomas Muller" ,"Karl-Heinz Rummenigge" ,"Rainer Ohlhauser"],
    // stadium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1gU4W-y4eWgiR85W-CVM9-PXji4njILT8f15hWRM3Hy4xLIlM5Q5I07D_TXxWUQthpo&usqp=CAU"
    stadium: "images/allianz.jpg"
  };
  footballclubs[4] = {
    name: "AC Milan", 
    city: "Milan, Italy", 
    stadiumName: "San Siro", 
    founded: "1899", 
    topScorers: ["Gunnar Nordahl", "Andriy Shevchenko" ,"Gianni Rivera" ,"José Altafini", "Aldo Bofi"],
    // stadium: "https://www.insideworldfootball.com/app/uploads/2012/10/san_siro.jpg"
    stadium: "images/san_siro.jpg"
  }; 

  res.json(footballclubs); 
});

app.listen(3001, () => {
  console.log("Listening..."); 
});