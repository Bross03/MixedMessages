console.log("Welcome to pedro's fortune teller");
console.log("It provides 100% accurate predictions about your love life, carrer, cause and age of death");
const career=['tech', 'business','art','marketing', 'engineering','film making'];
const quality=['Excellent','amazing','incredible','average','mediocre','a complete failure','decent','horrible','bad','good'];
const living=['Italy','England','Canada','America','Brazil','Japan'];
const nameOfGirls=[null,null,null,null,'Emily',"Hannah","Madison","Ashley","Sarah","Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren","Alyssa","Kayla","Abigail","Brianna","Olivia"];
const causesOfDeath=['a car accident', 'cancer', 'heart disease','covid', 'hypothermia','a stroke','diabetes','old age'];

function careerPrediction(){
    
    const careerIndividual=career[Math.floor(Math.random()*career.length)];
    const qualityCareer=quality[Math.floor(Math.random()*quality.length)];
    const placeOfLiving=living[Math.floor(Math.random()*living.length)];
    
    console.log('You will have a career in '+careerIndividual+' which will be '+qualityCareer);

    if(qualityCareer==='a complete failure'){
        console.log('You will live on the street');
    }else{
        console.log('You will end up living in '+placeOfLiving);
    }
}
function loveLifePrediction(){
    const wifeName=nameOfGirls[Math.floor(Math.random()*nameOfGirls.length)];
    let lengthMarriage=Math.floor(Math.random()*50);
    if(wifeName!==null){

        console.log('You will marry a woman named '+wifeName);

        if(lengthMarriage<10){
            if(lengthMarriage===0){
                console.log('But your marriage will last less than a year :(');
            }else{
                console.log('But your marriage will only last '+lengthMarriage+' years');
            }
        }else if(lengthMarriage>40){
            console.log('You will have a very happy marriage and will be together for the rest of your lives!');
        }else{
            console.log('You will be married for '+lengthMarriage+' years');
        }

    }else{
        console.log('You will never find love and will die alone');
    }
}
function deathPrediction(){
    let ageOfDeath;
    let causeDeath;
  
    ageOfDeath=Math.floor(Math.random()*40)+60;
    causeDeath=causesOfDeath[Math.floor(Math.random()*causesOfDeath.length)];
    if(causeDeath==='old age'){
        ageOfDeath=Math.floor(Math.random()*40)+80;
    }
    console.log('You will die at '+ ageOfDeath+' due to '+causeDeath);
}
careerPrediction();
loveLifePrediction();
deathPrediction();