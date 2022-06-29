/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  //write your code here	  //write your code here

  let domainGenerator = [];
  let pronoun = ["El", "Su"];
  let adj = ["terrible", "rico"];
  let noun = ["pollo", "chicken"];
  let domain = [".com", ".cl"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domain.length; d++) {
          domainGenerator.push(" " + pronoun[p] + adj[a] + noun[n] + domain[d]);
        }
      }
    }
  }
  console.log(domainGenerator);
  document.getElementById("Domain.Name").innerHTML = domainGenerator;
};
