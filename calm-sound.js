// loading
window.onload = function () {
    setTimeout(loading, 3100)
    setTimeout(typeWriter, 3700)
    setTimeout(nextType, 14000)

};

function loading() {
    document.getElementById('beforeLoading').style.display = "none";
    document.getElementById('laterLoading').style.display = "block";
};

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("load").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 85);
    }
};


function nextType() {
    document.getElementById('load').style.display = "none";
}


// sound control
function soundControl(sound, V) {
    if (sound.paused) {
        sound.play();
        sound.loop = true;
        document.getElementById(V).className = "visible";
    } else {
        document.getElementById(V).className = "invisible";
        sound.pause();
    }
};


// add sound
var Rain = new Audio("sound/Rain.mp3");
var Thunderstorm = new Audio("sound/Thunderstorm.mp3");
var Wind = new Audio("sound/Wind.mp3");
var Forest = new Audio("sound/Forest.mp3");
var Tropicalforest = new Audio("sound/Tropicalforest.mp3");
var Waterstream = new Audio("sound/Waterstream.mp3");
var Seaside = new Audio("sound/Seaside.mp3");
var Water = new Audio("sound/Water.mp3");
var Bonfire = new Audio("sound/Bonfire.mp3");
var Summernight = new Audio("sound/Summernight.mp3");
var Coffeeshop = new Audio("sound/Coffeeshop.mp3");
var Train = new Audio("sound/Train.mp3");
var Fan = new Audio("sound/Fan.mp3");
var noise = new Audio("sound/noise.mp3");
var Washingmachine = new Audio("sound/Washingmachine.mp3");
var Bubbles = new Audio("sound/Bubbles.mp3");
var Waterfall = new Audio("sound/Waterfall.mp3");
var Cicadas = new Audio("sound/Cicadas.mp3");
var Cityscape = new Audio("sound/Cityscape.mp3");
var Fireplace = new Audio("sound/Fireplace.mp3");
var Oceanwaves = new Audio("sound/Oceanwaves.mp3");
var Rainontent = new Audio("sound/Rainontent.mp3");
var Spaceengine = new Audio("sound/Spaceengine.mp3");
var Underwater = new Audio("sound/Underwater.mp3");


// mute sounds
function muteSounds() {
    document.getElementById('RainV').className = "invisible";
    Rain.pause();
    document.getElementById('ThunderstormV').className = "invisible";
    Thunderstorm.pause();
    document.getElementById('WindV').className = "invisible";
    Wind.pause();
    document.getElementById('ForestV').className = "invisible";
    Forest.pause();
    document.getElementById('TropicalforestV').className = "invisible";
    Tropicalforest.pause();
    document.getElementById('WaterstreamV').className = "invisible";
    Waterstream.pause();
    document.getElementById('SeasideV').className = "invisible";
    Seaside.pause();
    document.getElementById('WaterV').className = "invisible";
    Water.pause();
    document.getElementById('BonfireV').className = "invisible";
    Bonfire.pause();
    document.getElementById('SummernightV').className = "invisible";
    Summernight.pause();
    document.getElementById('CoffeeshopV').className = "invisible";
    Coffeeshop.pause();
    document.getElementById('TrainV').className = "invisible";
    Train.pause();
    document.getElementById('FanV').className = "invisible";
    Fan.pause();
    document.getElementById('noiseV').className = "invisible";
    noise.pause();
    document.getElementById('WashingmachineV').className = "invisible";
    Washingmachine.pause();
    document.getElementById('BubblesV').className = "invisible";
    Bubbles.pause();
    document.getElementById('WaterfallV').className = "invisible";
    Waterfall.pause();
    document.getElementById('CicadasV').className = "invisible";
    Cicadas.pause();
    document.getElementById('CityscapeV').className = "invisible";
    Cityscape.pause();
    document.getElementById('FireplaceV').className = "invisible";
    Fireplace.pause();
    document.getElementById('OceanwavesV').className = "invisible";
    Oceanwaves.pause();
    document.getElementById('RainontentV').className = "invisible";
    Rainontent.pause();
    document.getElementById('SpaceengineV').className = "invisible";
    Spaceengine.pause();
    document.getElementById('UnderwaterV').className = "invisible";
    Underwater.pause();
};


// Rain sound
function RainSound() {
    soundControl(Rain, 'RainV')
};

function RainVolume() {
    var RainV = document.getElementById("RainV").value;
    Rain.volume = RainV;
};


// Thunderstorm sound
function ThunderstormSound() {
    soundControl(Thunderstorm, 'ThunderstormV')
};

function ThunderstormVolume() {
    var ThunderstormV = document.getElementById("ThunderstormV").value;
    Thunderstorm.volume = ThunderstormV;

};


// Wind sound
function WindSound() {
    soundControl(Wind, 'WindV')
};

function WindVolume() {
    var WindV = document.getElementById("WindV").value;
    Wind.volume = WindV;
};


// Forest sound
function ForestSound() {
    soundControl(Forest, 'ForestV')
};

function ForestVolume() {
    var ForestV = document.getElementById("ForestV").value;
    Forest.volume = ForestV;
};


// Tropicalforest sound
function TropicalforestSound() {
    soundControl(Tropicalforest, 'TropicalforestV')
};

function TropicalforestVolume() {
    var TropicalforestV = document.getElementById("TropicalforestV").value;
    Tropicalforest.volume = TropicalforestV;
};


// Waterstream sound
function WaterstreamSound() {
    soundControl(Waterstream, 'WaterstreamV')
};

function WaterstreamVolume() {
    var WaterstreamV = document.getElementById("WaterstreamV").value;
    Waterstream.volume = WaterstreamV;
};


// Seaside sound
function SeasideSound() {
    soundControl(Seaside, 'SeasideV')
};

function SeasideVolume() {
    var SeasideV = document.getElementById("SeasideV").value;
    Seaside.volume = SeasideV;
};


// Water sound
function WaterSound() {
    soundControl(Water, 'WaterV')
};

function WaterVolume() {
    var WaterV = document.getElementById("WaterV").value;
    Water.volume = WaterV;
};


// Bonfire sound
function BonfireSound() {
    soundControl(Bonfire, 'BonfireV')
};

function BonfireVolume() {
    var BonfireV = document.getElementById("BonfireV").value;
    Bonfire.volume = BonfireV;
};


// Summernight sound
function SummernightSound() {
    soundControl(Summernight, 'SummernightV')
};

function SummernightVolume() {
    var SummernightV = document.getElementById("SummernightV").value;
    Summernight.volume = SummernightV;
};


// Coffeeshop sound
function CoffeeshopSound() {
    soundControl(Coffeeshop, 'CoffeeshopV')
};

function CoffeeshopVolume() {
    var CoffeeshopV = document.getElementById("CoffeeshopV").value;
    Coffeeshop.volume = CoffeeshopV;
};


// Train sound
function TrainSound() {
    soundControl(Train, 'TrainV')
};

function TrainVolume() {
    var TrainV = document.getElementById("TrainV").value;
    Train.volume = TrainV;
};


// Fan sound
function FanSound() {
    soundControl(Fan, 'FanV')
};

function FanVolume() {
    var FanV = document.getElementById("FanV").value;
    Fan.volume = FanV;
};


// noise sound
function noiseSound() {
    soundControl(noise, 'noiseV')
};

function noiseVolume() {
    var noiseV = document.getElementById("noiseV").value;
    noise.volume = noiseV;
};


// Washingmachine sound
function WashingmachineSound() {
    soundControl(Washingmachine, 'WashingmachineV')
};

function WashingmachineVolume() {
    var WashingmachineV = document.getElementById("WashingmachineV").value;
    Washingmachine.volume = WashingmachineV;
};


// Bubbles sound
function BubblesSound() {
    soundControl(Bubbles, 'BubblesV')
};

function BubblesVolume() {
    var BubblesV = document.getElementById("BubblesV").value;
    Bubbles.volume = BubblesV;
};


// Waterfall sound
function WaterfallSound() {
    soundControl(Waterfall, 'WaterfallV')
};

function WaterfallVolume() {
    var WaterfallV = document.getElementById("WaterfallV").value;
    Waterfall.volume = WaterfallV;
};


// Cicadas sound
function CicadasSound() {
    soundControl(Cicadas, 'CicadasV')
};

function CicadasVolume() {
    var CicadasV = document.getElementById("CicadasV").value;
    Cicadas.volume = CicadasV;
};


// Fireplace sound
function FireplaceSound() {
    soundControl(Fireplace, 'FireplaceV')
};

function FireplaceVolume() {
    var FireplaceV = document.getElementById("FireplaceV").value;
    Fireplace.volume = FireplaceV;
};


// Oceanwaves sound
function OceanwavesSound() {
    soundControl(Oceanwaves, 'OceanwavesV')
};

function OceanwavesVolume() {
    var OceanwavesV = document.getElementById("OceanwavesV").value;
    Oceanwaves.volume = OceanwavesV;
};


// Rainontent sound
function RainontentSound() {
    soundControl(Rainontent, 'RainontentV')
};

function RainontentVolume() {
    var RainontentV = document.getElementById("RainontentV").value;
    Rainontent.volume = RainontentV;
};


// Spaceengine sound
function SpaceengineSound() {
    soundControl(Spaceengine, 'SpaceengineV')
};

function SpaceengineVolume() {
    var SpaceengineV = document.getElementById("SpaceengineV").value;
    Spaceengine.volume = SpaceengineV;
};



// Underwater sound
function UnderwaterSound() {
    soundControl(Underwater, 'UnderwaterV')
};

function UnderwaterVolume() {
    var UnderwaterV = document.getElementById("UnderwaterV").value;
    Underwater.volume = UnderwaterV;
};


// Cityscape sound
function CityscapeSound() {
    soundControl(Cityscape, 'CityscapeV')
};

function CityscapeVolume() {
    var CityscapeV = document.getElementById("CityscapeV").value;
    Cityscape.volume = CityscapeV;
};

var i = 0;
var txt = ' برای دوستانی است که هنگام کار و یا قبل از خواب، علاقه به شنیدن اصوات آرامش بخش  دارند ';
