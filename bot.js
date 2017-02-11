var HTTPS = require('https');
	var cool = require('cool-ascii-faces');
	

	var botID = process.env.BOT_ID;
	

	function respond() {
	  var request = JSON.parse(this.req.chunks[0]),
	      botRegex = /^\/week/;  botRegexDL = /^\/ros/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
	      botRegexAd=/^\/standings/;botRegexGTA = /^\/DL/; botRegexSC = /^\/sch/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
	      botRegexP = /^\/ply/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
	      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
	      botRegexSlut = /^\/help/; botRegexWelcome = /^\/welcome/;
	      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexL = /^\/takethis/; botRegexCash = /^\/cash/;
	      botRegexWut = /^\/wut/; botRegexTrade = /^\/trade/; botRegexNooo = /^\/plzno/;
	      botRegexDaf = /^\/dafuq/; botRegexAyy = /^\/ayy/; botRegexSchedule = /^\/schedule/;
	      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
	      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
	  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
	                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
	                "MIA","BUF","SF","WAS","NYJ","TB"]
	  if(request.text && botRegex.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://daddyleagues.com/MFLMaddenLg/schedules");
	    this.res.end();
	  }
	  else if(request.text && botRegexSlut.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("'Command' -- 'Function' \n/rules -- MFLMaddenLg rules  \n/sch 'team initials' -- Team Schedule  \n/ply 'Player Name' -- Player Info  \n/ros 'team initials' -- Team Roster  \n/week -- Weekly Schedule  \n/DL -- DaddyLeagues Page  \n/standings -- Division Standings  \n/twitch 'username' -- Twitch Stream");
	    this.res.end();
	  } 
	  else if(request.text && botRegexWelcome.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://i.imgur.com/GfJNU68.gif");
	    this.res.end();
	  } 
	  else if(request.text && botRegexProp.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
	    this.res.end();
	  }
	  else if(request.text && botRegexKys.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://www.wikihow.com/Tie-a-Noose");
	    this.res.end();
	  } 
	  else if(request.text && botRegexL.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://pbs.twimg.com/profile_images/711399945853607936/qdGJrEH7.jpg");
	    this.res.end();
	  } 
	  else if(request.text && botRegexDaf.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
	    this.res.end();
	  } 
	  else if(request.text && botRegexCash.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://i2.kym-cdn.com/photos/images/facebook/001/209/784/5de.png");
	    this.res.end();
	  } 
	  else if(request.text && botRegexWut.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://scontent-atl3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/15802423_676357055876908_4292183087745335296_n.jpg?ig_cache_key=MTQyNTA1ODQzMzE3NDY1MDI2NA%3D%3D.2");
	    this.res.end();
	  } 
	  else if(request.text && botRegexTrade.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://docs.google.com/document/d/1kwQ8LUja0_0UbJhRhste4TFseSyxVFlhAI9Slps1oqg/edit");
	    this.res.end();
	  } 
	  else if(request.text && botRegexNooo.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://www.gifbin.com/bin/092009/1253886001_office-no.gif");
	    this.res.end();
	  } 
	  else if(request.text && botRegexDL.test(request.text)) {
	    this.res.writeHead(200);
	    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
	    postMessage("http://daddyleagues.com/MFLMaddenLg/team/"+request.text.substring(5,8)+"/depthchart");
	    this.res.end();
	  } 
	  
	  else if(request.text && botRegexOW.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("www.daddyleagues.com/maddenrating/");
	    this.res.end();
	  } 
	  else if(request.text && botRegexSalt.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://i.imgur.com/B5BSVqH.png");
	    this.res.end();
	  } 
	  else if(request.text && botRegexAd.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://daddyleagues.com/MFLMaddenLg/standings");
	    this.res.end();
	  }
	  else if(request.text && botRegexRules.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://docs.google.com/document/d/17M8LSkOgGI0V2gf1Zqnxmd74DtJsdmWMk_E6Ec8q-IU/edit");
	    this.res.end();
	  } 
	  else if(request.text && botRegexGTA.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://daddyleagues.com/MFLMaddenLg");
	    this.res.end();
	  } 
	  else if(request.text && botRegexSC.test(request.text)) {
	    this.res.writeHead(200);
	    
	    postMessage("http://daddyleagues.com/MFLMaddenLg/team/"+request.text.substring(5,8)+"/schedule");
	    this.res.end();
	  }
	  else if(request.text && botRegexP.test(request.text)) {
	    this.res.writeHead(200);
	    var req = request.text.substring(5,request.text.length);
	    var rep = req.replace(/ /,"+");
	    postMessage("http://daddyleagues.com/MFLMaddenLg/players?name="+rep+"&position=all&team=all");
	    
	    this.res.end();
	  }  
	

	  else if(request.text && botRegexTw.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
	    this.res.end();
	  } 
	  else if(request.text && botRegexSb.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://www.reddit.com/r/maddenall32");
	    this.res.end();
	  } 
	  else if(request.text && botRegexSh.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("¯\\_(ツ)_/¯");
	    this.res.end();
	  } 
	  else if(request.text && botRegexWk.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
	    this.res.end();
	  } 
	  else if(request.text && botODB.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("OBJ*");
	    this.res.end();
	  } 
	  else if(request.text && botDuck.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
	    this.res.end();
	  }
	  else if(request.text && botRegexCC.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
	    this.res.end();
	  }
	  else if(request.text && botRegexCC.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("(☞ﾟヮﾟ)☞");
	    this.res.end();
	  }
	  else if(request.text && botRegexSchedule.test(request.text)) {
	    this.res.writeHead(200);
	    postMessage("https://docs.google.com/spreadsheets/d/1EORExkB6HNLZhi22mRo2Xmo6Yx90Em2rGNAYlAdjTeI/edit?usp=drive_web");
	    this.res.end();
	  }
	  
	  else if(request.text && botRegexSiege.test(request.text)) {
	    this.res.writeHead(200);
	    if(0.6 >= Math.random() > 0.3)
	      postMessage(siege1);
	    else if(Math.random() >0.6)
	      postMessage(siege3)
	    else
	      postMessage(siege2);
	    this.res.end();
	  }
	  
	  else {
	    console.log("don't care");
	    this.res.writeHead(200);
	    this.res.end();
	  }
	}
	

	function postMessage(response) {
	  var botResponse,options, body, botReq;
	

	  botResponse = response
	

	  options = {
	    hostname: 'api.groupme.com',
	    path: '/v3/bots/post',
	    method: 'POST'
	  };
	

	  body = {
	    "bot_id" : botID,
	    "text" : botResponse
	  };
	

	  console.log('sending ' + botResponse + ' to ' + botID);
	

	  botReq = HTTPS.request(options, function(res) {
	      if(res.statusCode == 202) {
	        //neat
	      } else {
	        console.log('rejecting bad status code ' + res.statusCode);
	      }
	  });
	

	  botReq.on('error', function(err) {
	    console.log('error posting message '  + JSON.stringify(err));
	  });
	  botReq.on('timeout', function(err) {
	    console.log('timeout posting message '  + JSON.stringify(err));
	  });
	  botReq.end(JSON.stringify(body));
	}
	

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}
	

	

	exports.respond = respond;
