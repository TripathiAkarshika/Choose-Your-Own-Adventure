// Story stages and data
const storyStages = {
    start: {
        text: "You are standing at the gates of Hogwarts. Do you want to go inside or stay outside?",
    choices: ["Go inside", "Stay outside"],
        consequence: ["inside", "outside"],
        image: "https://as2.ftcdn.net/v2/jpg/04/96/54/77/1000_F_496547749_dvcKqQigsEu7moHo5k1P5uAG2ueRcwVi.jpg"
    },
    inside: {
        text: "You enter Hogwarts and are greeted by Professor McGonagall. She tells you to choose a house: Gryffindor or Slytherin.",
    choices: ["Choose Gryffindor", "Choose Slytherin"],
        consequence: ["gryffindor", "slytherin"],
        image: "https://www.looper.com/img/gallery/the-sorting-hat-theory-that-changes-everything-about-harry-potter/did-ron-and-hermione-also-choose-their-hogwarts-houses-1626107258.jpg"
    },
    outside: {
        text: "You decide to stay outside. You see a dark figures in the distance. Do you approach it ? ",
    choices: ["Approach", "Run away"],
    consequence: ["approach", "run_away"],
        image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/Harry-Potter-Dementor-Fan-Theory-2.jpg"
    },
gryffindor: {
    text: "You choose Gryffindor and are welcomed into the house. You quickly become friends with Harry, Ron, and Hermione.One day, you find a hidden room in the castle. Do you enter ? ",
    choices: ["Enter the room", "Leave the room"],
        consequence: ["enter_room", "leave_room"],
            image: "https://preview.redd.it/favorite-room-in-hogwarts-mine-is-the-music-room-v0-kfgqqwmpubna1.jpg?width=1080&crop=smart&auto=webp&s=3ededdfd00e1afd8b545d8b3c3ba0230c044ce8a"
},
slytherin: {
    text: "You choose Slytherin and gain power, but also make enemies along the way. You overhear a conversation about the Dark Lord’s return. Do you investigate ? ",
    choices: ["Investigate", "Ignore"],
        consequence: ["investigate", "ignore"],
            image: "https://cdn.mos.cms.futurecdn.net/cPJ3cLQeE87F2EhM2u9mna-1200-80.jpeg"
},
approach: {
    text: "You approach the dark figure and discover it's a Death Eater !You are captured and sent to Azkaban. However, you manage to escape after years in captivity.",
    choices: ["Escape", "Remain in Azkaban"],
        consequence: ["escape", "azkaban"],
            image: "https://i.pinimg.com/originals/07/6d/7a/076d7a413f496139186aa9e96397bcef.jpg"
},
run_away: {
    text: "You run away and escape the figure, finding a hidden part of the castle where you discover the Philosopher's Stone. Do you take it?",
    choices: ["Take the Stone", "Leave the Stone"],
        consequence: ["take_stone", "leave_stone"],
            image: "https://medias.spotern.com/spots/w640/10/10313-1541078027.jpg"
},
enter_room: {
    text: "Inside the hidden room, you find the Sword of Gryffindor. A mysterious voice tells you to wield it in battle against a dark force. Do you accept the challenge ? ",
    choices: ["Accept the challenge", "Refuse the challenge"],
        consequence: ["challenge", "refuse_challenge"],
            image: "https://i.pinimg.com/originals/bd/8d/9f/bd8d9fe8f25d9f12f073fbf56816c584.jpg"
},
leave_room: {
    text: "You decide not to enter the room. As you turn away, you bumpinto Dumbledore, who warns you of a great danger that looms over Hogwarts."
        ,
        choices: [],
            consequence: [],
                image: "https://media.harrypotterfanzone.com/dumbledore-at-the-hogwarts-doors.jpg"
},
investigate: {
    text: "You investigate and discover a plot to resurrect Voldemort. You must decide whether to stop it or join the Death Eaters.",
    choices: ["Stop the plot", "Join the Death Eaters"],
        consequence: ["stop_plot", "join_death_eaters"],
            image: "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2024/09/04180119/harry-potter-inconsistency.jpeg"
},
ignore: {
    text: "You ignore the conversation and continue with your studies. However, you later regret not getting involved when Voldemort returns.",
    choices: [],
        consequence: [],
            image: "https://preview.redd.it/who-enjoyed-seeing-these-pencil-writings-during-study-hall-v0-570nzj3gbloa1.jpg?width=640&crop=smart&auto=webp&s=380a6893cffb162f3fa6b1cc64261200adb095e4"
},
escape: {
    text: "After years in Azkaban, you manage to escape with the help of a mysterious ally. You join the Order of the Phoenix and fight against Voldemort.",
    choices: [],
        consequence: [],
            image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Harry-Potter-Dumbledores-Army.jpeg"
},
azkaban: {
    text: "You remain in Azkaban and miss the opportunity to join the fight against Voldemort. You spend your days thinking about what could have been.",
    choices: [],
        consequence: [],
            image: "https://www.syfy.com/sites/syfy/files/harry_potter_prison_azkaban_5.jpg"
},
take_stone: {
    text: "You take the Philosopher's Stone and gain eternal life. But with great power comes great responsibility. You must protect the stone from dark forces.",
    choices: [],
        consequence: [],
            image: "https://i.pinimg.com/736x/19/36/2b/19362bb20701b042d580b5569a58c6ec.jpg"
},
leave_stone: {
    text: "You leave the Stone behind, understanding that some things are not meant to be owned. You become a respected wizard, known for your wisdom.",
    choices: [],
        consequence: [],
            image: "https://www.slashfilm.com/img/gallery/the-14-best-harry-potter-scenes-ranked/5-harry-builds-dumbledores-army-the-order-of-the-phoenix-1662492303.jpg"
},
challenge: {
    text: "You accept the challenge and defeat the dark force threatening Hogwarts with the Sword of Gryffindor. You become a hero.",
    choices: [],
        consequence: [],
            image: "https://i.pinimg.com/originals/18/51/de/1851de563af7c758b1e9b34b721fd266.jpg"
},
refuse_challenge: {
    text: "You refuse the challenge, but later regret your decision asthe dark force overwhelms the castle. You wish you had taken action.",
    choices: [],
        consequence: [],
            image: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egamesider.2Ecom.2Fs3.2Ffrgsg.2F1280.2Fharry-potter.2Fdefault_2023-11-20_459d5d45-0a8f-489e-a182-0ff84daaa8dd.2Epng/1200x675/quality/80/harry-potter-jk-rowling-erreur-regret.jpg"
},
stop_plot: {
    text: "You stop the plot to resurrect Voldemort and save the wizarding world. You become a hero in the magical community.",
    choices: [],
        consequence: [],
            image: "https://media.harrypotterfanzone.com/ron-celebrates-a-quidditch-win.jpg"
},
join_death_eaters: {
    text: "You join the Death Eaters and rise to power, but live in constant fear of betrayal. Eventually, Voldemort’s downfall comes, and you face the consequences.",
    choices: [],
        consequence: [],
            image: "https://imgix.ranker.com/list_img_v2/19164/3059164/original/3059164?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355"
}
    };
// Variables to track game state
let currentStage = 'start';
// Start the game
function startGame() {
    currentStage = 'start'; // Reset to the starting point
    updatePage(currentStage);
}
// Update the page with the current story and choices
function updatePage(stage) {
    const currentData = storyStages[stage];
    // Update story text
    document.getElementById("story-text").innerText = currentData.text;
    // Update image
    document.getElementById("story-image").src = currentData.image;
    // Update choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = ''; // Clear previous choices
    currentData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => {
            const nextStage = currentData.consequence[index];
            updatePage(nextStage);
        };
        choicesContainer.appendChild(button);
    });
    // If no choices, end the game
    if (currentData.choices.length === 0) {
        endGame(stage);
    }
}
// End the game (no more choices, just an ending)
function endGame(stage) {
    const finalText = storyStages[stage].text;
    document.getElementById("story-text").innerText = finalText;
    document.getElementById("choices-container").innerHTML = ''; // Remove
    choices
    document.getElementById("story-image").src = storyStages[stage].image;
}
// Initialize the game on page load
document.addEventListener('DOMContentLoaded', startGame);
// Set last modified time
document.getElementById('lastModified').textContent = document.lastModified
    ;