
function elephantDetail() {
    const audio = new Audio("audio/Elefant.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Elephants are the largest of all land animals.Elephants are considered the strongest mammal on the planet. Elephants drink up to 160 liters of water a day.";
}
function lionDetail(){
    const audio = new Audio("audio/lion.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Lions can go up to four days without drinking water.The average male lion weighs around 180 kg (400 lb) while the average female lion weighs around 130 kg (290 lb).";
}

function wolfDetail(){
    const audio = new Audio("audio/wolf.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Wolves are the largest members of the dog family.Wolves have about 200 million scent cells.";
}

function crocodileDetail(){
    const audio = new Audio("audio/alligator.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "They are the biggest reptiles on Earth.Crocodiles don’t chew their food. Crocodiles really do produce tears.";
}

function pigDetail(){
    const audio = new Audio("audio/pigs.mp3");
    audio.play();
 document.querySelector("#fact").innerHTML ="Pigs are intelligent animals.Pigs have poor eyesight, but a great sense of smell. ";
}

function foxDetail(){
    const audio = new Audio("audio/fox.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Foxes have large, triangular ears.A fox’s home or burrow is called a den.";

}
function cowDetail(){
    const audio = new Audio("audio/cow.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "They eat about 40 pounds of food a day.They are colorblind to red and green colors.Most of the time, we see a cow standing, but they sit down and stand up around fourteen times each day. ";

}
function gorillaDetail(){
    const audio = new Audio("audio/Gorilla.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Gorillas eat so much vegetation that they rarely need to drink water.Gorillas are social animals and live in groups called troops or bands. ";

}
function tigerDetail(){
    const audio = new Audio("audio/Tiger.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Every tiger is unique, no two tigers have the same stripe pattern.One swipe from a Tiger’s front hand is enough to kill a person or an animal, or at least break one’s bones. ";

}function owlDetail(){
    const audio = new Audio("audio/owl.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Owls are nocturnal and prefer to stay awake and be active at night.Although owls mostly vary in size and appearance, they have one interesting ability in common – they can turn their heads an astonishing 270 degrees! ";

}
function bearDetail(){
    const audio = new Audio("audio/bear.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Brown bears, black bears, and polar bears hibernate in the winter for about 100 days. Though bears are large animals, they can run very fast, reaching speeds of up to 35 miles per hour. ";

}
function cricketsDetail(){
    const audio = new Audio("audio/crickets.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Crickets are known for their chirp.A cricket has ears located on its knees, just below the joint of the front legs.";

}
function unicornDetail(){
    const audio = new Audio("audio/unicorn.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "According to mythology, whoever touches a pure White Unicorn, will find happiness and joy in his entire life. Unicorns love eating rainbows. ";

}function parrotDetail(){
    const audio = new Audio("audio/RedParot.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Parrots are great at mimicking. They can easily mimic sounds, words, and even certain human actions.";

}function camelDetail(){
    const audio = new Audio("audio/camel.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Camels can drink nearly 200 litres of water in one day. Camels can live for 40 to 50 years. ";

}function leopardDetail(){
    const audio = new Audio("audio/Leopard.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Leopards can leap horizontally to 6m, vertically 3m, and can reach running speeds to 58km per hour. They are excellent swimmers as well. ";

}function squirrelDetail(){
    const audio = new Audio("audio/squirrel.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " Squirrels are born blind.Squirrel’s front teeth will continue to grow throughout its life.";

}
function frogDetail(){
    const audio = new Audio("audio/frogs.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Frogs don’t drink water using their mouths, they absorb water through their permeable skin.Frogs come in many different sizes and colors. ";

}function goatDetail(){
    const audio = new Audio("audio/goat.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = " A baby goat is called a kid, but did you know that, because of that, a goat giving birth is said to be “kidding”? ";

}function horseDetail(){
    const audio = new Audio("audio/horse.mp3");
    audio.play();
    document.querySelector("#fact").innerHTML = "Horses do sleep standing up! They sleep laying down too, but only for short times. ";

}

function display(){
    var random= Math.floor(Math.random() * 8) + 0;
    var bigSize = ["url('img/junimg.jpg')",
                   "url('img/8.jpg')",
                   "url('img/1.jpg')",
                   "url('img/2.jpg')",
                   "url('img/3.jpg')",
                   "url('img/4.jpg')",
                   "url('img/5.jpg')",
                   "url('img/6.jpg')"
                   ];
    document.getElementById("image").style.backgroundImage=bigSize[random];
    document.getElementById("image").style.backgroundPosition = "center center";
    document.getElementById("image").style.backgroundSize = "contain";
  }