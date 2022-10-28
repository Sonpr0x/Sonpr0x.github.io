
function SwitchTheme() {
  let checked = document.getElementById("switch").checked;
  
  if (checked) {
  	document.getElementById('theme').outerHTML = '<link id="theme" href="/css/theme-dark.css" rel="stylesheet" type="text/css">';
    document.getElementById('highlight').outerHTML = '<link id="highlight" rel="stylesheet" href="/css/highlight/tomorrow-night-blue.min.css">';
  } else {
  	document.getElementById('theme').outerHTML = '<link id="theme" href="/css/theme.css" rel="stylesheet" type="text/css">';
    document.getElementById('highlight').outerHTML = '<link id="highlight" rel="stylesheet" href="/css/highlight/solarized-light.min.css">';
  }
}
