

/**
 * Changes text for all properties of the NPC
 */
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

/**
 * Changes text for character's name.
 * id: which name to change ('name' for first name or 'sur' for surname).
 */
function changeNameText(id){
  document.getElementById(id).innerHTML = createName();
  generateCharacterText();
}

/**
 * Changes text of the character's profession.
 */
function changeProfessionText(){
  document.getElementById("prof").innerHTML = getProfession();
  generateCharacterText();
}

/**
 * Changes text for the character's race.
 */
function changeRaceText(){
  document.getElementById("race").innerHTML = getRace();
  generateCharacterText();
}

/**
 * Changes text for the character's class.
 */
function changeClassText(){
  document.getElementById("class").innerHTML = getClass();
  generateCharacterText();
}

/**
 * Changes text for the character's personality.
 */
function changePersonalityText(){
  document.getElementById("personality").innerHTML = generatePersonalityTraitsList();
  generateCharacterText();
}

/**
 * Changes text for the character's likes and dislikes.
 */
function changeLikesText(){
  document.getElementById("likes").innerHTML = getLikes();
  generateCharacterText();
}

/**
 * Changes text for the character's alignment.
 */
function changeAlignText(){
  document.getElementById("align").innerHTML = getAlign();
  generateCharacterText();
}

/**
 * Changes text for the character's inventory.
 */
function changeInventoryText(){
  document.getElementById("bag").innerHTML = getInventory();
  generateCharacterText();
}

/**
 * Changes text for the character's money.
 */
function changeMoneyText(){
  document.getElementById("money").innerHTML = getMoney();
  generateCharacterText();
}

/**
 * Writes character information into the textarea.
 * This textarea is used for exporting the information.
 */
function generateCharacterText(){
  var copyText = document.getElementById("copyBox");
  var txt;
  copyText.value = "";
  copyText.value += "Name: "+document.getElementById("name").innerHTML+" "+document.getElementById("sur").innerHTML;
  copyText.value += "\nRace: "+document.getElementById("race").innerHTML;
  copyText.value += "\nClass: "+document.getElementById("class").innerHTML;
  copyText.value += "\nProfession: "+document.getElementById("prof").innerHTML;
  copyText.value += "\n\nPersonality:\n"+document.getElementById("personality").innerHTML;
  copyText.value += document.getElementById("likes").innerHTML;
  copyText.value += "\nAlignment: "+document.getElementById("align").innerHTML;
  copyText.value += "\n\nInventory:\n"+document.getElementById("bag").innerHTML;
  copyText.value += "\n\nMoney:\n"+document.getElementById("money").innerHTML;
  txt = copyText.value;
  copyText.value=txt.replace(/<br>/g,"\n");
}


/**
 * Copies the character information to the user's clipboard for exporting.
 */
function copyCharacterText(){
  var copyText = document.getElementById("copyBox");
  generateCharacterText();
  copyText.select();
  document.execCommand("copy");
  alert("Copied character to clipboard!");
}


/**
 * Generates a name for the character by randomly combining 2-4 name pieces.
 * @return: string of character's name.
 */
function createName(){
	var name = '';
	
	for (i = 0; i < Math.floor((Math.random() * 2) + 2); i++) { 
		name += getNamePiece();
	}

	return name;
}

/**
 * Randomly gets a name piece from the list.
 * @return: string of a name piece.
 */
function getNamePiece(){
	var pieces = ['el', 'li', 'tat', 'io', 'on', 'fa', 'ill', 'eg', 'aer', 'shi', 'lys', 'and',
	'whi', 'dus', 'ney', 'bal', 'kri', 'ten', 'dev', 'ep', 'tin', 'ton', 'ri', 'mynn', 'ben', 'la', 'sam',
	'hag', 'is', 'ya', 'tur', 'pli', 'ble', 'cro', 'stru', 'pa', 'sing', 'rew', 'lynn', 'lou', 'ie', 'zar',
	'an', 'ise', 'tho', 'vag', 'bi', 'en', 'fu', 'dor', 'nor', 'ei', 'zen', 'is', 'val', 'zon',
	'lu', 'tur', 'op', 'sto', 'ep', 'tha', 'dre', 'ac', 'ron'];
	return pieces[Math.floor((Math.random() * pieces.length) + 1)-1];
}

/**
 * Randomly gets a profession from the list.
 * @return: string of character's profession
 */
function getProfession(){
	var professions = ['escort', 'servant', 'noble', 'landlord', 'inkeep', 'bartender', 'merchant', 'mercenary',
	'craftsman', 'comedian', 'guard', 'soldier', 'urchin', 'outlaw', 'performer',
	'convict', 'conman', 'adventurer', 'acolyte', 'hero', 'slave', 'royal'];
	return professions[Math.floor((Math.random() * professions.length) + 1)-1];
}

/**
 * Randomly gets a race from the list.
 * @return: string of character's race
 */
function getRace(){
	var races = ['human', 'elf', 'half-elf', 'drow', 'half-orc', 'tiefling', 'gnome',
	'dwarf', 'dragonborn', 'halfling'];
	return races[Math.floor((Math.random() * races.length) + 1)-1];
}

/**
 * Randomly gets a class from the list.
 * @return: string of character's class
 */
function getClass(){
	var classes = ['barbarian', 'monk', 'fighter', 'paladin', 'rogue', 'ranger',
	'bard', 'wizard', 'warlock', 'sorcerer', 'cleric', 'druid'];
	return classes[Math.floor((Math.random() * classes.length) + 1)-1];
}


/**
 * Randomly generates an alignment based on the DND alignment chart.
 * @return: string of character's alignment
 */
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
	
	//"neutral neutral" is commonly called "true neutral".
	if(align=="neutral neutral"){
		align = "true neutral";
	}
	
	return align;
}

/**
 * Randomly generates 5 personality traits for the character.
 * Traits are grouped into positive/negative pairs to avoid a contradictory personality.
 * @return: string of character's personality traits
 */
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
			
	
	//Generates list of traits. The length is cut in half because
	//Traits are grouped into pairs. This chooses which pair.
	var traitsidlist = makeTraitsIdList(traits.length/2, 5);
	
	for (i = 0; i < traitsidlist.length; i++) { 
		//Randomly select either the positive trait of the pair (+0)
		//or the negative trait (+1)
		if(Math.floor((Math.random() * 2) + 1)-1 ==1){
			personality+=traits[traitsidlist[i]*2]+" "+"<br>";
		}else {
			personality+=traits[traitsidlist[i]*2+1]+" "+"<br>";
		}
	}
	
	return personality;
	
}

/**
 * Randomly generates likes and dislikes for a character by 
 * choosing random items from the list.
 * @return: string of character's likes and dislikes.
 */
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

/**
 * Generate an inventory for the character ranging from 1-5 items.
 * @return: string containing character's inventory.
 */
function getInventory(){
	var inventory = "";
	var count;
	
	var items = ['rope','sword','lesser healing potion', 'ration', 'apple', 'bread loaf', 'dagger',
	'amulet', 'book', 'candle', 'crowbar', 'bow', 'crossbow', 'arrow', 'dice set', 'flask',
	'hammer', 'pen', 'jewel', 'torch', 'vial', 'rock', 'trinket', 'staff'];
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
	
	//Fill in line breaks for formatting purposes
	for (i = 0; i < 5-idList.length; i++) { 
		inventory+="<br>";
	}
	
	return inventory;
}

/**
 * Generates character's money in terms of typical DND currency.
 * Money ranges from 0 to 20 of each currency
 * @return: string containing character's money information.
 */
function getMoney(){
	var money="";
	
	money+="GP: "+Math.floor((Math.random() * 20))+"<br>";
	money+="SP: "+Math.floor((Math.random() * 20))+"<br>";
	money+="CP: "+Math.floor((Math.random() * 20))+"<br>";
	
	//Line breaks for formatting
	money+="<br><br>";
	
	return money;
}

/**
 * Generates an array of unique numbers to prevent repeats in personality/inventory.
 * maxrand: the greatest possible index value.
 * num: the amount of values to generate.
 * @return: an array of unique index values.
 */
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
