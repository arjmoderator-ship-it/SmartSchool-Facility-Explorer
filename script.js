// splash screen fade out ke halaman utama
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main-content");
  if (splash && main) {
    setTimeout(() => {
      splash.style.display = "none";
      main.classList.remove("hidden");
      main.style.opacity = "0";
      setTimeout(() => { main.style.transition = "opacity 1s"; main.style.opacity = "1"; }, 100);
    }, 3000);
  }
});
