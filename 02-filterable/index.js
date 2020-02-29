const filterInput = document.querySelector("#filterInput");
// List to input value
filterInput.addEventListener("keyup", e => {
  const filterInputValue = e.target.value.toUpperCase();
  const namesList = document.querySelector("#names");
  const nameItem = namesList.querySelectorAll("li.collection-item");

  for (let i = 0; i < nameItem.length; i++) {
    const a = nameItem[i].getElementsByTagName("a")[0];

    // if input value matched
    if (a.innerHTML.toUpperCase().indexOf(filterInputValue) > -1) {
      nameItem[i].style.display = "";
    } else {
      nameItem[i].style.display = "none";
    }
  }
});
