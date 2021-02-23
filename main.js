

function compile() {
  var html = document.getElementById("html").innerHTML;
  var code = document.getElementById("code").contentWindow.document;
  code.open();
  code.writeln( html );
  code.close();
}



function setupTemplate() {
  var request = new XMLHttpRequest();
  request.open('GET', 'template.txt', false);
  request.send();
  var textFileContent = request.responseText; 
  

  var html = document.getElementById("html");
  
  html.innerHTML = textFileContent;
}

var els = document.getElementsByClassName("html");
var searchValue = "test";

for(var i = 0; i < els.length; i++){
  if(els[i].innerHTML.indexOf(searchValue) > -1){
    for(var j = 0; j < els[i].innerHTML.indexOf(searchValue); j++){
      els[i].innerHTML.indexOf(searchValue).color = red;
    } 
  }
}
/*        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"*/
