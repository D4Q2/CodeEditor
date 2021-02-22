

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
  request.open('GET', 'text.txt', false);
  request.send();
  var textFileContent = request.responseText; 
  

  var html = document.getElementById("html");
  
  html.value = textFileContent;
}
/*        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"*/
