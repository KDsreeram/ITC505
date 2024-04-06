let currentState = "start";

let gameData = {
  start: {
    text: "Do you want to start",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://cdn.openart.ai/uploads/image_34GVXEG2_1692289327599_512.webp",
  },
  start1: {
    text: "Before you lies the mystical land of Atheria. Where will your adventure begin?",
    choices: ["Explore the Shimmering Shores", "Journey to the Whispering Woods"],
    consequences: ["shimmeringShores", "whisperingWoods"],
    image: "https://cdn.openart.ai/uploads/image_Cx5iBT1h_1692289330205_512.webp",
    },
    shimmeringShores: {
    text: "You arrive at the Shimmering Shores. What will you discover?",
    choices: ["Investigate the Crystal Caves", "Search for the Sunken Ruins"],
    consequences: ["crystalCaves", "sunkenRuins"],
    image: "https://www.creativefabrica.com/wp-content/uploads/2023/04/18/Mystical-Magical-Fantasy-Beach-At-Twilight-67512107-1.png",
    },
    whisperingWoods: {
    text: "You enter the enigmatic Whispering Woods. What path will you take?",
    choices: ["Seek the Elven Enclave", "Find the Druid's Circle"],
    consequences: ["elvenEnclave", "druidsCircle"],
    image: "https://www.creativefabrica.com/wp-content/uploads/2023/07/07/Whispering-Woods-A-Magical-Forest-Background-73953882-1.png",
    },
    crystalCaves: {
    text: "You explore the luminescent Crystal Caves. What secrets do they hold?",
    choices: ["Unearth Ancient Artifacts", "Encounter the Cave Spirits"],
    consequences: ["ancientArtifacts", "caveSpirits"],
    image: "https://i.etsystatic.com/42203030/r/il/be72eb/4774326832/il_570xN.4774326832_mlgs.jpg",
    },
    sunkenRuins: {
    text: "You dive into the depths to find the Sunken Ruins. What awaits beneath?",
    choices: ["Recover the Lost Relic", "Meet the Sea People"],
    consequences: ["lostRelic", "seaPeople"],
    image: "https://i.pinimg.com/originals/09/4a/66/094a66f6a0d70011f79747f00bd205b8.jpg",
    },
    elvenEnclave: {
    text: "You find the elusive Elven Enclave. How will you engage with them?",
    choices: ["Form an Alliance", "Learn Ancient Magic"],
    consequences: ["formAlliance", "learnMagic"],
    image: "https://cdna.artstation.com/p/assets/images/images/050/857/502/large/ryan-boyd-ryan-boyd-a3-final-exterior.jpg?1655854332",
    },
    druidsCircle: {
    text: "You come across the Druid's Circle. What mysteries will you unravel?",
    choices: ["Participate in a Ritual", "Seek Wisdom from the Druids"],
    consequences: ["ritualParticipation", "seekWisdom"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyPHhLw9WYc3v4yUepnh3pzaoI5TaRtv6yWwJod4j1A&s",
    },
    ancientArtifacts: {
    text: "You unearth ancient artifacts of immense power. Congratulations!",
    choices: ["Ending 1"],
    image: "https://sadigh.weebly.com/uploads/1/2/7/5/12751077/2304551_orig.jpg",
    },
    caveSpirits: {
    text: "You encounter benevolent spirits guiding you to hidden truths. Congratulations!",
    choices: ["Ending 2"],
    image: "https://images.saatchiart.com/saatchi/654656/art/9829689/8892647-XJIDWUSK-7.jpg",
    },
    lostRelic: {
    text: "You recover a legendary relic from the depths. Congratulations!",
    choices: ["Ending 3"],
    image: "https://i0.wp.com/giantbrain.co.uk/wp-content/uploads/2019/12/ahc25_art_relic-of-ages.png?fit=700%2C436&ssl=1",
    },
    seaPeople: {
    text: "You meet the mysterious Sea People and learn their secrets. Congratulations!",
    choices: ["Ending 4"],
    image: "https://allthatsinteresting.com/thumb/1200.633.https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/06/egyptians-on-boat.jpg",
    },
    formAlliance: {
    text: "You form a powerful alliance with the Elves. Congratulations!",
    choices: ["Ending 5"],
    image: "https://alongextendedparty.com/wp-content/uploads/2021/12/20210119-article-preview-the-last-alliance.png",
    },
    learnMagic: {
    text: "You learn ancient Elven magic, enhancing your abilities. Congratulations!",
    choices: ["Ending 6"],
    image: "https://www.ancient-origins.net/sites/default/files/field/image/Grimoires_0.jpg",
    },
    ritualParticipation: {
    text: "You participate in a Druidic ritual, gaining unique insights. Congratulations!",
    choices: ["Ending 7"],
    image: "https://socialdraft.com/cdn/shop/products/8b018f5ab4ba8c89c560be02d7c9dc7a.png?v=1683669427",
    },
    seekWisdom: {
    text: "You gain profound wisdom from the Druids. Congratulations!",
    choices: ["Ending 8"],
    image: "https://media.swncdn.com/cms/BST/67147-gettyimages-899906782-noipornpan.1200w.tn.jpg",
    },
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();
