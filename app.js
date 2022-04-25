//jshint esversion:6
/*-------- Node Server module requirements --------*/
const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
//const request = require("request"); //Just in case

/*-------- Modules inicialitation --------*/
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


/*-------- Global variables definition --------*/
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
let posts = [];

/*-------- RUTES SECTION --------*/
/*-------- Root rute --------*/
app.get("/", function(req, res) {
  res.render("home", {
    startingContent: homeStartingContent,
    newPosts: posts
  });
});

/*-------- About rute --------*/
app.get("/about", function(req, res) {
  res.render("about", {abContent: aboutContent});
});

/*-------- Contact rute --------*/
app.get("/contact", function(req, res) {
  res.render("contact", {conContent: contactContent});
});

/*-------- Compose rute --------*/
app.get("/compose", function(req, res) {
  res.render("compose");
});

/*-------- Posts rute --------*/
app.get("/posts/:post", (req, res) => {
  posts.forEach((post) => {
    if (req.params.post === post.tittle){
      console.log("Match found");
    }
  });
});

/*-------- POST SECTION --------*/
/*-------- Compose POST request --------*/
app.post("/compose", function(req, res){
  const postObject = {
    tittle: req.body.newPost,
    body: req.body.postContent
  }
  posts.push(postObject);
  res.redirect("/");
});




/*-------- SERVER CONFIGURATIONS SECTION --------*/
/*-------- Listening port configuration --------*/
app.listen(3000, function() {
  console.log("Server running on port 3000");
});
