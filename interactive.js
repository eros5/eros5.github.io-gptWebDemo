// Select all links
var links = document.querySelectorAll("nav a");

// Add event listener to each link
links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.querySelector(e.target.hash);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Add active class to current link
var sections = document.querySelectorAll("main section");
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    var id = entry.target.id;
    var link = document.querySelector("nav a[href='#" + id + "']");
    if (entry.intersectionRatio > 0) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
sections.forEach(function(section) {
  observer.observe(section);
});
