document.querySelector("#grandparent").addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log("Grandparent clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log("parent clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log("child clicked");
  },
  true
);

const dropdown = document.querySelector(".w-48"); // This will only give the first instance of .w-48

const handleClick = (e) => {
  // console.log(e.target);
  // console.log("Dropdown clicked");

  if (dropdown.contains(e.target)) {
    console.log("Dropdown clicked");
  } else {
    console.log("Outside Dropdown clicked");
  }
};

document.addEventListener("click", handleClick, false);
