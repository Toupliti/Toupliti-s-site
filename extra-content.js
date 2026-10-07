// extra-content.js
document.addEventListener("DOMContentLoaded", function() {
  // Vérifie si l'élément existe
  const extraDiv = document.getElementById('extra');
  if (extraDiv) {
    extraDiv.innerHTML = `
      <a href="./projet2.htm">(new) MiniFoxAsm</a><br>
	  <a href="./turbowarp/turbowarp.htm">1er emulateur (web)</a><br>
	  <img src="index_data/oneko.gif" alt="" style="margin-top: 110px;">
    `;
  }
});