const links = document.querySelectorAll("a");

function ativarLink(item, index) {
  if (document.location.href === item.href) {
    const background = links[index];
    background.style.backgroundColor = "black";
    background.style.color = "white";
  } else {
  }
}

links.forEach(ativarLink);
