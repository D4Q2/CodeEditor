

function compile() {
  var html = document.getElementById("html");
  //var css = document.getElementById("css");
  //var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  //document.body.onkeyup = function() {
    code.open();
    code.writeln( html.value );
    code.close();
  //};
}



function setupTemplate() {
  var request = new XMLHttpRequest();
  request.open('GET', 'template.txt', false);
  request.send();
  var textFileContent = request.responseText; 
  

  var html = document.getElementById("html");
  
  html.value = textFileContent;
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
