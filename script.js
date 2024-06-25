document.addEventListener("DOMContentLoaded", function() {
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const jsCode = document.getElementById("js-code");
    const output = document.getElementById("output");

    function run() {
        const html = htmlCode.value;
        const css = "<style>" + cssCode.value + "</style>";
        const js = jsCode.value;

        const iframeContent = html + css;

        output.contentDocument.body.innerHTML = iframeContent;
        output.contentWindow.eval(js);
    }

    htmlCode.addEventListener("keyup", run);
    cssCode.addEventListener("keyup", run);
    jsCode.addEventListener("keyup", run);
});