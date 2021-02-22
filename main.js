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
  let reader = new FileReader(); 
  

  var html = document.getElementById("html");
  
reader.onload = (e) => { 
        const file = e.target.result; 
  
        // This is a regular expression to identify carriage  
        // Returns and line breaks 
        const lines = file.split(/\r\n|\n/); 
        html.value = lines.join('\n'); 
  
}; 
  
reader.onerror = (e) => alert(e.target.error.name); 
  
reader.readAsText(file); 
  //html.value = ;
}
/*        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"*/
