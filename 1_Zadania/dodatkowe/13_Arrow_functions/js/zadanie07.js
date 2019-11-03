const App = function () {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function () {
  this.websites.forEach((el) => this.links.push(`https://${el}.com`));
}

let app = new App();
app.generateLinks();
console.log(app.links)

$(".menu a").each((i, el) => el.href = app.links[i]);