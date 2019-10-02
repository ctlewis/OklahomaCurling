var xhrTeams = null;
var teamCode = "";
var popTop = 0;
var popLeft = 0;


function loadTeamPopup()
{
  var pop = document.getElementById('teampop');
  var teamHtml = xhrTeams.responseText;
  var n1=teamHtml.indexOf(teamCode);
  if (n1>=0)
    n1 = teamHtml.indexOf(">",n1+1);
  var n2=teamHtml.indexOf("</div>",n1+1);
  if (n1>=0 && n2>n1) {
    var teamDiv = teamHtml.slice(n1+1,n2);
    pop.innerHTML = teamDiv;
  }
  else
    pop.innerHTML = teamCode + " not found";
  pop.style.height = pop.scrollHeight + "px";
  pop.style.width = pop.scrollWidth + "px";
  if (window.innerHeight) {
    if ((popTop + pop.scrollHeight) > (window.innerHeight + document.body.scrollTop)) {
      popTop = window.innerHeight + document.body.scrollTop - pop.scrollHeight;
      pop.style.top = popTop + 'px';
    }
  }    
  pop.style.visibility='visible';
}

function loadTeamInfoDone()
{
  var pop = document.getElementById('teampop');
  if (xhrTeams.readyState < 4) {
    pop.innerHTML = "loading";
    pop.style.visibility='visible';
  }
  else if (xhrTeams.readyState == 4 && xhrTeams.status == 200)
    loadTeamPopup();
}


function loadTeamInfo(teamCodeRequest)
{
  teamCode = teamCodeRequest
  if (xhrTeams != null) {
    loadTeamPopup();
    return;
  }

  if (window.XMLHttpRequest)
    xhrTeams = new XMLHttpRequest();
  else if (window.ActiveXObject)
    xhrTeams = new ActiveXObject("Msxml2.XMLHTTP");
  else
    return;
  
  xhrTeams.onreadystatechange = loadTeamInfoDone;
  xhrTeams.open("GET", "teams.htm");
//  xhrTeams.responseType = "document";
  xhrTeams.send(null);
}


function teamMouseOver(e,obj)
{
  var x = e.pageX;
  var y = e.pageY;
  if (!x && !y) {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  pop = document.getElementById('teampop');
  if (pop) {
    popTop = y;
    popLeft = x+10;
    pop.style.top = popTop + 'px';
    pop.style.left = popLeft + 'px';
    obj.onmouseout=function(){document.getElementById('teampop').style.visibility='hidden'};
    loadTeamInfo(obj.className);
  }
}
