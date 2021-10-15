// list icon functions
const icon = document.querySelector("i");

function navList() {
  // get viewPort 
  const vw = document.documentElement.clientWidth;
  if (vw <= 767) {
    if (icon.className==="fa fa-bars")
    {
      const nav = document.querySelector(".nav-list-style");
      icon.className = "fas fa-times";
      nav.id = "nav-active";
    }
    else
    {
      const nav = document.querySelector(".nav-list-style");
      icon.className = "fa fa-bars";
      nav.id="nav-disabled";
    }
  }
}

icon.addEventListener("click", navList)

// end list icon functions



