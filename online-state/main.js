(function() {
  const stateElement = document.getElementById("onlineState");

  window.addEventListener("offline", function(e) {
    stateElement.innerText = "Offline";
    stateElement.className = "offline";
  });
  window.addEventListener("online", function(e) {
    stateElement.innerText = "Online";
    stateElement.className = "online";
  });
})();
