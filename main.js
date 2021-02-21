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
  var html = document.getElementById("html");
  html.value = "Hey";
}
/*        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"*/
