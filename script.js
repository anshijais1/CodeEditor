
function run(){
    const htmlCode=document.querySelector("#htmlinput");
    const cssCode=document.querySelector("#cssinput");
    const js=document.querySelector("#jsinput");
const out=document.querySelector("#Output");
out.contentDocument.body.innerHTML=htmlCode.value  +  "<style>"+cssCode.value+  "</style>";
out.contentWindow.eval(js.value);
}