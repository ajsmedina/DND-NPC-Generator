
var name = document.querySelector('.name');
var surname = document.querySelector('.surname');

function changeAllText(){
	changeNameText('name');
	changeNameText('sur');
	changeProfessionText();
	changeRaceText();
	changeClassText();
	changePersonalityText();
}

function changeNameText(id){
  document.getElementById(id).innerHTML = createName();
}
function changeProfessionText(){
  document.getElementById("prof").innerHTML = getProfession();
}

function changeRaceText(){
  document.getElementById("race").innerHTML = getRace();
}

function changeClassText(){
  document.getElementById("class").innerHTML = getClass();
}
function changePersonalityText(){
  document.getElementById("personality").innerHTML = generatePersonalityTraitsList();
}

function createName(){
	var name = '';
	
	for (i = 0; i < Math.floor((Math.random() * 2) + 2); i++) { 
		name += getNamePiece();
	}

	return name;
}

function getNamePiece(){
	var pieces = ['el', 'li', 'tat', 'io', 'on', 'fa', 'ill', 'eg', 'aer', 'shi', 'lys', 'and',
	'whi', 'dus', 'ney', 'bal', 'kri', 'ten', 'dev', 'ep', 'tin', 'ton', 'ri', 'mynn', 'ben', 'la', 'sam',
	'hag', 'is', 'ya', 'tur', 'pli', 'ble', 'cro', 'stru', 'pa', 'sing', 'rew', 'lynn', 'lou', 'ie', 'zar',
	'an', 'ise', 'tho', 'vag', 'bi', 'en', 'fu', 'dor', 'nor', 'ei', 'zen', 'is', 'val', 'zon',
	'lu', 'tur', 'op', 'sto', 'ep', 'tha', 'dre', 'ac', 'ron'];
	return pieces[Math.floor((Math.random() * pieces.length) + 1)-1];
}

function getProfession(){
	var professions = ['escort', 'servant', 'noble', 'landlord', 'inkeep', 'bartender', 'merchant', 'mercenary',
	'craftsman', 'comedian', 'guard', 'soldier', 'urchin', 'outlaw', 'performer',
	'convict', 'conman', 'adventurer', 'acolyte', 'hero', 'slave', 'royal'];
	return professions[Math.floor((Math.random() * professions.length) + 1)-1];
}

function getRace(){
	var races = ['human', 'elf', 'half-elf', 'drow', 'half-orc', 'tiefling', 'gnome',
	'dwarf', 'dragonborn', 'halfling'];
	return races[Math.floor((Math.random() * races.length) + 1)-1];
}

function getClass(){
	var classes = ['barbarian', 'monk', 'fighter', 'paladin', 'rogue', 'ranger',
	'bard', 'wizard', 'warlock', 'sorcerer', 'cleric', 'druid'];
	return classes[Math.floor((Math.random() * classes.length) + 1)-1];
}

function getNoun(){
	var nouns = ['cats', 'swords', 'elves', 'spiders', 'magic', 'slaves',
	'dragons', 'royalty', 'knights', 'donkeys', 'ogres', 'orcs', 'humans',
	'rocks', 'snow', 'rain', 'food', 'apples', 'baked goods', 'meat', 
	'ale', 'cheese', 'wine', 'men', 'women', 'children'];
	return nouns[Math.floor((Math.random() * nouns.length) + 1)-1];
}

function generatePersonalityTraitsList(){
	var personality = "";
	
	var poslist = ['smart', 'friendly', 'charismatic', 'muscular', 'brave', 'compassionate'];
	var neglist = ['dumb', 'rude', 'repulsive', 'weak', 'cowardly', 'apathetic'];
	
	var traits = ['smart', 'dumb',
					'friendly','rude',
					'charismatic', 'repulsive',
					'strong', 'weak',
					'brave', 'cowardly',
					'compassionate', 'apathetic',
					'loyal', 'unloyal',
					'honest', 'liar',
					'cooperative', 'uncooperative',
					'calm', 'histeric',
					'dependable', 'flaky',
					'fair', 'unfair',
					'humble','conceited',
					'mature', 'naive',
					'patient', 'impatient',
					'responsible', 'irresponsible',
					'independent', 'uneasy',
					'assertive', 'anxious',
					'funny', 'serious',
					'gently', 'rough',
					'outgoing', 'shy',
					'tactical', 'spontaneous'];
			
	
	var traitsidlist = makeTraitsIdList(traits.length/2);
	
	for (i = 0; i < traitsidlist.length; i++) { 
		if(Math.floor((Math.random() * 2) + 1)-1 ==1){
			personality+=traits[traitsidlist[i]*2]+" ";
		}else {
			personality+=traits[traitsidlist[i]*2+1]+" ";
		}
	}
	
	return personality;
	
}

function makeTraitsIdList(maxrand){
	var idlist = [];
	var id;
	for (i = 0; i < 5; i++) { 
		do{
			id = Math.floor((Math.random() * maxrand) + 1)-1;
		}
		while(idlist.indexOf(id) != -1);
		idlist[idlist.length] = id;
	}
	return idlist;
}

function getPersonalityTrait(){
	var traits = ['cats', 'swords', 'elves', 'spiders', 'magic', 'slaves',
	'dragons', 'royalty', 'knights', 'donkeys', 'ogres', 'orcs', 'humans',
	'rocks', 'snow', 'rain', 'food', 'apples', 'baked goods', 'meat', 
	'ale', 'cheese', 'wine', 'men', 'women', 'children'];
	return traits[Math.floor((Math.random() * nouns.length) + 1)-1];
	
}

function getPosTrait(){
	
	var trai
	return traits[Math.floor((Math.random() * nouns.length) + 1)-1];
}


var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', changeNameText);
}

