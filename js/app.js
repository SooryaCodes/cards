function handleBtn(e) {
  let btn = e.target;
  let txt = btn.parentNode.children[2];
  let dots = txt.children[0];
  let moreTxt = txt.children[1];
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    moreTxt.style.display = "none";
    txt.classList.remove("py");
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    moreTxt.style.display = "inline";
    txt.classList.add("py");
  }
}
