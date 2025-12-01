const shareButton = document.querySelector(".share-button");
const shareMenu = document.querySelector(".share-menu");

if (shareButton && shareMenu) {
  const toggleShare = () => {
    const isOpen = shareMenu.classList.toggle("share-menu--visible");
    shareButton.classList.toggle("share-button--active", isOpen);
    shareButton.setAttribute("aria-expanded", String(isOpen));
  };

  shareButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleShare();
  });

  document.addEventListener("click", (event) => {
    if (
      shareMenu.classList.contains("share-menu--visible") &&
      !shareMenu.contains(event.target) &&
      event.target !== shareButton
    ) {
      shareMenu.classList.remove("share-menu--visible");
      shareButton.classList.remove("share-button--active");
      shareButton.setAttribute("aria-expanded", "false");
    }
  });

  shareMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}


