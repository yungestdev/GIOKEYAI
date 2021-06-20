console.log('%cHello there Welcome to GiokeyAI', `
  background: white;
  border: 3px solid red;
  color: red;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`);
var unknown = false
var firefox = false
function CheckBrowser() {

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        console.log('Currently using Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        console.log('Currently using Chrome');
        
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        console.log('Currently using Safari');
    }
    else if(navigator.userAgent.indexOf("Brave") != -1)
    {
        console.log("Currently using Brave")
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        firefox = true
        if (firefox = true) {
            window.location.replace("ErrorPage/firefox.html");
        }
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        console.log('Currently using IE'); 
    } 
    else 
    {
        unknown = true
        if (unknown = true) {
            window.location.replace("ErrorPage/Error403.html");
        }
        
    }
}
var errorBase = false
CheckBrowser()

    while (errorBase = false) {
        if (errorBase == true) {
            errorBase = true
            err = "code 200";
            console.warn(`${err}`)

            errorcd = "error dHJvbGxlZA=="

            console.error(`${errorcd}`)
        }
    }