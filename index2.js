//const qwe = document.querySelector('item');
//console.log(qwe);
//const tehnologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//let res = "<ul>"+
//    tehnologies.map((tehnologie) => `<li>${tehnologie}</li>`) .join("")
//    + "</ul>";
//console.log(res);
//console.log(res.length);
//const res = `<ol>
//    ${tehnologies.reduce((previous, current) => previous + `<li>${current}</li>, ""`)}
//    </ol>`;

//body.insertAdjacentHTML("beforeend", res);
//console.log(res);

//const colors = [
 //   { label: "red", color: "#FF0000" },
 //   { label: "green", color: "#00FF00" },
//    { label: "blue", color: "#0000FF" },
 //   { label: "yellow", color: "#FFFF00" },
//];
//const res = colors.map(({ color, label }) => {
//    const colorButton = document.createElement("button");
 //  colorButton.style.backgroundColor = color;
 //   colorButton.textContent = label;
 //   colorButton.style.margin = "20px";
//    return colorButton;
//});
//console.log(res);

//body.append(...res);
//const getNewElement = (tagName, config) => {
  //  const newElement = document.createElement(tagName);

    if (config) {
        Object.entries(config).forEach(([key, value]) => {
            newElement[key] = value; 
        });
    }

    return newElement;
}
const main = getNewElement("main", { id: "main" });
//const main = document.createElement("main");
//main.id = "main";
const title = getNewElement("h1", {
    id: "title",
    textContent: "-Michael Legrand-",

});
//title.id = "title";
//title.textContent = "-Michael Legrand-";

const figure = getNewElement("figure", {id: "img-div"});
//figure.id = "img-div";

const img = getNewElement("img", {
    id: "image",
    src:"https://bipbap.ru/wp-content/uploads/2021/07/2016-05-31-flora-1.jpg" , 
    alt: "Michael Legrand orcestra"
})

const figCaption = getNewElement("figCaption", {
    id: "img-caption",
    textContent:"Michael Legrand conducting his orcherstra."
});

figure.append(img, figCaption);
main.append(title, figure);



body.appendChild(main);