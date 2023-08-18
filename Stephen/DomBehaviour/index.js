document.querySelector("#grandparent").addEventListener("click", function (e) {
  console.log(e.target);
  console.log("Grandparent clicked");
});

document.querySelector("#parent").addEventListener("click", function (e) {
  console.log(e.target);
  console.log("parent clicked");
});

document.querySelector("#child").addEventListener("click", function (e) {
  console.log(e.target);
  console.log("child clicked");
});
