

function changeAllText(){
	changeNameText('name');
	changeNameText('sur');
	changeProfessionText();
	changeRaceText();
	changeClassText();
	changePersonalityText();
	changeLikesText();
	changeAlignText();
	changeInventoryText();
	changeMoneyText();
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
function changeLikesText(){
  document.getElementById("likes").innerHTML = getLikes();
}
function changeAlignText(){
  document.getElementById("align").innerHTML = getAlign();
}
function changeInventoryText(){
  document.getElementById("bag").innerHTML = getInventory();
}
function changeMoneyText(){
  document.getElementById("money").innerHTML = getMoney();
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

function getAlign(){
	var align = "";
	var randnum;
	
	randnum = Math.floor((Math.random() * 3) + 1);
	if(randnum==1){
		align+="lawful ";
	} else if(randnum==2){
		align+="neutral ";
	} else {
		align+="chaotic ";
	}
	
	randnum = Math.floor((Math.random() * 3) + 1);
	if(randnum==1){
		align+="good";
	} else if(randnum==2){
		align+="neutral";
	} else {
		align+="evil";
	}
	
	if(align=="neutral neutral"){
		align = "true neutral";
	}
	
	return align;
}


function generatePersonalityTraitsList(){
	var personality = "";
	
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
					'gentle', 'rough',
					'outgoing', 'shy',
					'tactical', 'spontaneous',
					'level-headed', 'hot-headed'];
			
	
	var traitsidlist = makeTraitsIdList(traits.length/2, 5);
	
	for (i = 0; i < traitsidlist.length; i++) { 
		if(Math.floor((Math.random() * 2) + 1)-1 ==1){
			personality+=traits[traitsidlist[i]*2]+" "+"<br>";
		}else {
			personality+=traits[traitsidlist[i]*2+1]+" "+"<br>";
		}
	}
	
	return personality;
	
}

function getLikes(){
	var likes = "<br>";
	
	var nouns = ['cats', 'swords', 'elves', 'spiders', 'magic', 'slavery',
	'dragons', 'royalty', 'knights', 'donkeys', 'ogres', 'orcs', 'humans',
	'rocks', 'snow', 'rain', 'food', 'apples', 'baked goods', 'meat', 
	'ale', 'cheese', 'wine', 'men', 'women', 'children', 'chicken', 'art', 'vegetables', 'fire', 'fish',
	'religion'];
	
	var idList = makeTraitsIdList(nouns.length, 8)
	
	likes+="Loves: " +nouns[idList[0]]+"<br>";
	likes+="Likes: " +nouns[idList[1]]+" "+nouns[idList[2]]+" "+nouns[idList[3]]+"<br>";
	likes+="Dislikes: " +nouns[idList[4]]+" "+nouns[idList[5]]+" "+nouns[idList[6]]+"<br>";
	likes+="Fears: " +nouns[idList[7]]+"<br>";
	
	return likes;
}

function getInventory(){
	var inventory = "";
	var count;
	
	var items = ['rope','sword','lesser healing potion', 'ration', 'apple', 'bread loaf', 'dagger',
	'amulet', 'book', 'candle', 'crowbar', 'bow', 'crossbow', 'arrow', 'dice set', 'flask',
	'hammer', 'pen', 'jewel', 'torch', 'vial', 'rock', 'trinket'];
	var idList = makeTraitsIdList(items.length, Math.floor((Math.random() * 5) + 1))
	
	for (i = 0; i < idList.length; i++) { 
		count = Math.floor((Math.random() * 5) + 1);
		inventory += count+" "+items[idList[i]];
		if(count>1){
			if(inventory[inventory.length-1]=="h"){
				inventory+="e";
			}
			inventory+="s";
		}
		inventory+="<br>";
	}
	
	for (i = 0; i < 5-idList.length; i++) { 
		inventory+="<br>";
	}
	
	return inventory;
}

function getMoney(){
	var money="";
	
	money+="GP: "+Math.floor((Math.random() * 20))+"<br>";
	money+="SP: "+Math.floor((Math.random() * 20))+"<br>";
	money+="CP: "+Math.floor((Math.random() * 20))+"<br>";
	money+="<br><br>";
	
	return money;
}

function makeTraitsIdList(maxrand, num){
	var idlist = [];
	var id;
	for (i = 0; i < num; i++) { 
		do{
			id = Math.floor((Math.random() * maxrand) + 1)-1;
		}
		while(idlist.indexOf(id) != -1);
		idlist[idlist.length] = id;
	}
	return idlist;
}
