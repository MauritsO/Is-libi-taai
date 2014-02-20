
	var quotes=new Array()
	
	//change the quotes if desired. Add/ delete additional quotes as desired.
	
	quotes[0]='Ja libson is taai. <i>-Maurits Offerhaus</i>'
	
	quotes[1]='Ja, zo taai als een taai taai pop! <i>-Henry Ford</i>'
	
	quotes[2]='Ja man.'
	
	quotes[3]='Best wel.'
	
	quotes[4]='Taaier dan taai.'
	
	quotes[5]='Ja, het leven is zwaar.'
	
	quotes[6]='Liberoonie is zwaar.'
	
	quotes[7]='Life is tough, but it\'s tougher when you\'re stupid.  <i>-John Wayne</i>'
	
	quotes[8]='Jepskerdoodles.'
	
	quotes[9]='Jeppers.'
	
	quotes[10]='Uhu :3'
	
	quotes[11]='Taaier dan een penisu tussen je billen. <i>-Banno Postma</i>'
	
	quotes[12]='Ja.'
	
	quotes[13]='Libi is een synoniem voor taai...'
	
	quotes[14]='Life is a bitch, and one day you\'ll marry one.'
	
	quotes[15]='Zo taai als een zure beffer.'
	
	quotes[16]='Libi is als een laatste hapje donner bewaren voor later.  <i>-David van der Kooij</i>'
	
	quotes[17]='Libi is even taai als godsdienst. <i>-Lois Mooiman</i>'
	
	quotes[18]='Ja, Fucking taai.'
	
	quotes[19]='Ja, taaier dan squats zonder gewichten.<i>-Lucas Twisk</i>'
	
	quotes[20]='Taaier dan een infinite afveeg-drol.'
	
	quotes[21]='libi + libi = letterlijk kanker'
	
	quotes[22]='Taaier dan een droge boterham.'
	
	quotes[23]='Taaier dan een steak die een dag in de pan heeft gelegen.'
	
	quotes[24]='Zijn negers zwart?'
	
	quotes[25]='Taaier dan met je sokken in een plas water stappen.'
	
	quotes[26]='Taaier dan een accidental boner als je bij je schoonmoeder op schoot zit.'
	
	
	var whichquote=Math.floor(Math.random()*(quotes.length));
	document.write('<a id="texts">' + quotes[whichquote] + '</a>');

	$( "#quotes" ).click(function() {
	var whichquote=Math.floor(Math.random()*(quotes.length));
	  $( "#texts" ).fadeOut(300, function() {
	    $( "#texts" ).html(quotes[whichquote]);
	    $( "#texts" ).fadeIn(300);
	  });
	});

