var proverbs = new Array(31);
proverbs[0] = "Aby do wiosny";
proverbs[1] = "Bez matki nie ma chatki";
proverbs[2] = "Biednemu zawsze wiatr w oczy";
proverbs[3] = "Bogatemu to i byk się ocieli";
proverbs[4] = "Bo pić trzeba umieć";
proverbs[5] = "Budować zamki na lodzie";
proverbs[6] = "Co łysemu po grzebieniu";
proverbs[7] = "Co ma piernik do wiatraka";
proverbs[8] = "Czyj nasiew tego plon";
proverbs[9] = "Dla głupiego każdy dzień święto";
proverbs[10] = "Dzieci i ryby głosu nie mają";
proverbs[11] = "Aksamity, atłasy sławy nie czynią";
proverbs[12] = "Albo rybki, albo akwarium";
proverbs[13] = "Nosi go, jak Żyda po pustym sklepie";
proverbs[14] = "Co lato odkłada, to zima przejada";
proverbs[15] = "Gdy kota nie ma, myszy harcują";
proverbs[16] = "Gdzie moda panią, rozum sługą";
proverbs[17] = "Gdzie Słowianin, tam i pieśni";
proverbs[18] = "Im kto więcej ma, tym więcej chce";
proverbs[19] = "Idzie luty, podkuj buty";
proverbs[20] = "Jak Kuba Bogu, tak Bóg Kubie";
proverbs[21] = "Jak ty komu, tak on tobie";
proverbs[22] = "Jaki pan, taki kram";
proverbs[23] = "Każda krowa swoje cielę liże";
proverbs[24] = "Kogo nie boli, temu powoli";
proverbs[25] = "Kowal zawinił, cygana powiesili";
proverbs[26] = "Kto ma wioski, ma troski";
proverbs[27] = "Kto rano wstaje, ten jest niewyspany";
proverbs[28] = "Kto się ceni, ten się leni";
proverbs[29] = "Nikt się mądrym nie rodzi, ale staje";
proverbs[30] = "Nie wychylaj nosa, to ci go nie przytrą";

var actors = new Array(11);
actors[0] = "Jack Nicholson";
actors[1] = "Heath Ledger";
actors[2] = "Leonardo DiCaprio";
actors[3] = "Alan Rickman";
actors[4] = "Kevin Spacey";
actors[5] = "Peter Dinklage";
actors[6] = "Bryan Cranston";
actors[7] = "Ian McKellen";
actors[8] = "Benedict Cumberbatch";
actors[9] = "Al Pacino";
actors[10] = "Tom Hanks";
actors[11] = "Johnny Depp";
actors[12] = "Edward Norton";
actors[13] = "Anthony Hopkins";
actors[14] = "Matthew McConaughey";
actors[15] = "Will Smith";
actors[16] = "Clint Eastwood";
actors[17] = "Brad Pitt";
actors[18] = "Jake Gyllenhaal";
actors[19] = "Michael Keaton";
actors[20] = "Eddie Redmayne";
actors[21] = "Ralph Fiennes";
actors[22] = "Robin Williams";
actors[23] = "Robert De Niro";
actors[24] = "Denzel Washington";
actors[25] = "Cezary Pazura";
actors[26] = "Arkadiusz Jakubik";
actors[27] = "Jerzy Stuhr";
actors[28] = "Zbigniew Zamachowski";
actors[29] = "Franciszek Pieczka";
actors[30] = "Piotr Fronczewski";

var animals = new Array(11);
animals[0] = "hippopotamus";
animals[1] = "elephant";
animals[2] = "fallow deer";
animals[3] = "rhinoceros";
animals[4] = "muskrat";
animals[5] = "weasel";
animals[6] = "salmon";
animals[7] = "trout";
animals[8] = "beetle";
animals[9] = "rabbit";
animals[10] = "giraffe";
animals[11] = "nightingale";
animals[12] = "rattlesnake";
animals[13] = "sparrow";
animals[14] = "woodpecker";
animals[15] = "caterpillar";
animals[16] = "cockroach";
animals[17] = "grasshopper";
animals[18] = "guinea pig";
animals[19] = "hummingbird";
animals[20] = "chimpanzee";
animals[21] = "praying mantis";
animals[22] = "hammerhead shark";
animals[23] = "giant panda";
animals[24] = "chinchilla";
animals[25] = "reindeer";
animals[26] = "polar bear";
animals[27] = "squirrel";
animals[28] = "anteater";
animals[29] = "hedgehog";
animals[30] = "pack of wolves";

var kitchen = new Array(31);
kitchen[0] = "mutton broth";
kitchen[1] = "oxtail soup";
kitchen[2] = "potatoes and mince";
kitchen[3] = "curry and rice";
kitchen[4] = "strawberries and cream";
kitchen[5] = "mint sauce";
kitchen[6] = "Cornish pasties";
kitchen[7] = "sponge and custard";
kitchen[8] = "beans on toast";
kitchen[9] = "peaches and cream";
kitchen[10] = "bacon and eggs";
kitchen[11] = "casserole";
kitchen[12] = "buffet meal";
kitchen[13] = "bean soup";
kitchen[14] = "thick soup";
kitchen[15] = "mushroom soup";
kitchen[16] = "vegetable soup";
kitchen[17] = "tomato soup";
kitchen[18] = "clear soup";
kitchen[19] = "potato soup";
kitchen[20] = "chicken noodle";
kitchen[21] = "roast veal";
kitchen[22] = "roast pork";
kitchen[23] = "roast beef";
kitchen[24] = "meat pastry";
kitchen[25] = "vegetarian cuisine";
kitchen[26] = "Polish cuisine";
kitchen[27] = "bacon and eggs";
kitchen[28] = "scrambled egg";
kitchen[29] = "toasted sandwich";
kitchen[30] = "cheeseburger";

var truePassword = "";
var hidePassword = "";
var quantity = 0;
var lenght = 0;
var ok = new Audio("Content/music/ok.wav");
var miss = new Audio("Content/music/miss.wav");
var music = new Audio("Content/music/music.mp3");
var selectedLevel = "";
var time = 80;
var	missQuantity = 9;
var end = false;

function GetLastRecords() {
    $("#tblResultLastGames tbody tr").remove();
    $.ajax({
        type: 'POST',
        url: "/Home/GetLast5Games",
        dataType: 'json',
        data: { id: '' },
        success: function (data) {
            var items = '';

            $.each(data, function (i, item) {
                var rows = "<tr>"
                    + "<td class='recordsLastGame'>" + item.ResultsID + "</td>"
                    + "<td class='recordsLastGame'>" + item.Date + "</td>"
                    + "</tr>";
                $('#tblResultLastGames tbody').append(rows);
            });
        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });
    return false;
}

function SaveLastGame()
{
    var std = {};
    //std.Number = $("#Number").val();
    //std.Number = numberHits;
    $.ajax({
        type: "POST",
        url: "/Home/NewResult", // the URL of the controller action method
        //data: '{std: ' + JSON.stringify(std) + '}',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            GetLastRecords();
        },
        error: function (req, status, error) {
            alert("Błąd wstawiania danych");
        }
    });
}

function write_truePassword()
{
	document.getElementById("password").innerHTML = hidePassword;
}

function show()
{
	document.getElementById("contentUP").innerHTML = '<div id="time">Gra na czas: 80 sekund</div><div id="password">„Twoje hasło”</div>';
    document.getElementById("contentDown").innerHTML = '<div id="animation"><img src="Content/img/s0.jpg" alt=""/></div><div id="alphabet"></div><div style="clear:both;"></div>';
	choiceOfLevel();
	music.pause();
}

function timer()
	{
		
		if (end == false)
		{
				time--;
		
		
			if (time > 4 )
			{
				document.getElementById("time").innerHTML = 'Pozostało Ci: '+time+' sekund';
			}
			else if (time > 1)
			{
				document.getElementById("time").innerHTML = 'Pozostały Ci: '+time+' sekundy';
			}
			else if (time >= 1)
			{
				document.getElementById("time").innerHTML = 'Pozostała Ci: '+time+' sekunda';
			}
			else 
			{
				document.getElementById("time").innerHTML = 'Przekroczona ilość czasu';
				music.play();
				document.getElementById("alphabet").innerHTML = "Przegrałeś/aś! Twoje hasło to: " +truePassword+ 
				'<br/><br/><button class="buttonstart wow tada"  data-wow-duration="6000ms" onclick="show()" data-wow-iteration="infinite"><span>Jeszcze raz!</span></button>';
			}
			setTimeout("timer()", 1000);  
		}
		
		
	}	

var alphabet = new Array(35);
alphabet[0] = "A";
alphabet[1] = "Ą";
alphabet[2] = "B";
alphabet[3] = "C";
alphabet[4] = "Ć";
alphabet[5] = "D";
alphabet[6] = "E";
alphabet[7] = "Ę";
alphabet[8] = "F";
alphabet[9] = "G";
alphabet[10] = "H";
alphabet[11] = "I";
alphabet[12] = "J";
alphabet[13] = "K";
alphabet[14] = "L";
alphabet[15] = "Ł";
alphabet[16] = "M";
alphabet[17] = "N";
alphabet[18] = "Ń";
alphabet[19] = "O";
alphabet[20] = "Ó";
alphabet[21] = "P";
alphabet[22] = "Q";
alphabet[23] = "R";
alphabet[24] = "S";
alphabet[25] = "Ś";
alphabet[26] = "T";
alphabet[27] = "U";
alphabet[28] = "V";
alphabet[29] = "W";
alphabet[30] = "X";
alphabet[31] = "Y";
alphabet[32] = "Z";
alphabet[33] = "Ź";
alphabet[34] = "Ż";

// window.onload = choiceOfLevel;

function choiceOfLevel()
{
	 truePassword = "";
	 hidePassword = "";
     quantity = 0;
	 lenght = 0;
     selectedLevel = "";
     time = 80;
     missQuantity = 9;
     end = false;
	 document.getElementById("alphabet").innerHTML = '<p>Wybór poziomu gry:</p><button class="buttonl" onclick="choiceOfTopic(1)"><span>Łatwy - 9 szans</span></button><button class="buttonl" onclick="choiceOfTopic(2)"><span>Średni - 7 szans</span></button><button class="buttonl" onclick="choiceOfTopic(3)"><span>Trudny - 5 szans</span></button>';
	
}

function choiceOfTopic(level)
{
	
	 switch(level){
		case 1:
			selectedLevel = 'easy';
			break;
		case 2:
			selectedLevel = 'medium';
			quantity =+ 2;
			break;
		case 3:
			selectedLevel = 'hard';
			quantity =+ 4;
			break;
	 }
	 
    document.getElementById("alphabet").innerHTML = 'Wybór kategorii pytań: <p>PL:</p><button class="button" onclick="passwordSelection(proverbs)"><span>Przysłowia </span></button><button class="button" onclick="passwordSelection(actors)"><span>Aktorzy </span></button><div style="clear: both;"> </div>ANG:<br/><button class="button" onclick="passwordSelection(animals)"><span>Animals </span></button><button class="button" onclick="passwordSelection(kitchen)"><span>Kitchen </span></button>'; 
	 
}

function passwordSelection(type)
{
	timer();
	document.getElementById("alphabet").innerHTML = ""; 
	
	var randomNumber = Math.floor(Math.random() * 31);

	switch(type) {
		case actors:
			truePassword = actors[randomNumber];
			break;
		case proverbs:
			truePassword = proverbs[randomNumber];
			break;
		case animals:
			truePassword = animals[randomNumber];
			break;
		case kitchen:
			truePassword = kitchen[randomNumber];
			break;
		}

	truePassword = truePassword.toUpperCase();	

	lenght = truePassword.length;

	for (i = 0; i<lenght; i++)
	{
		if (truePassword.charAt(i)==" ")
		{
			hidePassword = hidePassword + " ";
		}
		else if(truePassword.charAt(i)==",")
		{
			hidePassword = hidePassword + ",";
		}
		else 
		{
			hidePassword = hidePassword + "-";
		}
	}	
	
	start();
}

function start()
{
    SaveLastGame();

	var tresc_diva = "";
	
	for (i=0; i<=34; i++)
	{	
		var element = "letter" + i;
		tresc_diva = tresc_diva + '<div class = "letters" onclick = "sprawdz('+i+')" id="'+element+'">'+ alphabet[i] +'</div>';
		if ((i+1)%7==0) tresc_diva = tresc_diva +'<div style ="clear:both;"></div>';
	}
	
	
	document.getElementById("alphabet").innerHTML = tresc_diva;
		
		
	write_truePassword();
}

String.prototype.setLetter = function(place, letter)
{
	if (place > this.length -1)
	{
		return this.toString();
	}
	else
	{
		return this.substr(0, place) + letter + this.substr(place+1);
	}
}

function sprawdz(nr)
{
	var hitsuccess = false;
	
	for (i=0; i < lenght; i++)
	{
		if(truePassword.charAt(i) == alphabet[nr])
		{
			hidePassword = hidePassword.setLetter(i, alphabet[nr]);
			hitsuccess = true;
		}
	}
	
	if (hitsuccess == true)
	{
		ok.pause();
		ok.currentTime = 0;
		ok.play();
		
		var element = "letter" + nr;
		document.getElementById(element).style.background = "#103300";
		document.getElementById(element).style.color = "#36c000";
	    document.getElementById(element).style.border = "3px solid #36c000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick","");
		write_truePassword();
	}
	else
	{	
		miss.pause();
		miss.currentTime = 0;
		miss.play();
		var element = "letter" + nr;
		document.getElementById(element).style.background = "#470000";
		document.getElementById(element).style.color = "#d40000";
	    document.getElementById(element).style.border = "3px solid #d40000";
		document.getElementById(element).style.cursor = "default";
		
		document.getElementById(element).setAttribute("onclick","");
		quantity ++;
		
        var picture = "Content/img/s" + quantity + ".jpg";
		document.getElementById("animation").innerHTML = '<img src="'+picture+'" alt=""/>';
	}
	
	if (truePassword == hidePassword)
	{
		music.play();
		document.getElementById("alphabet").innerHTML = "Wygrałeś/aś! Twoje hasło to: " +truePassword+ 
		'<br/><br/><button class="buttonstart wow tada"  data-wow-duration="6000ms" onclick="show()" data-wow-iteration="infinite"><span>Jeszcze raz!</span></button>';
		end = true;
	}
	
	if (quantity>=missQuantity)
	{
		music.play();
				document.getElementById("alphabet").innerHTML = "Przegrałeś/aś! Twoje hasło to: " +truePassword+ 
		'<br/><br/><button class="buttonstart wow tada"  data-wow-duration="6000ms" onclick="show()" data-wow-iteration="infinite"><span>Jeszcze raz!</span></button>';
		end = true;
	}
	
	
}