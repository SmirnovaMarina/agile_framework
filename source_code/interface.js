button = document.querySelector("#navbarSupportedContent > ul > button");
button.addEventListener("click", ()=>{
    let col_borders = document.querySelectorAll(".col-border + .col-border");
    let not_last_child_borders = document.querySelectorAll(".col-border:not(:last-child)");
    let vert = document.querySelector("body > div > div.row.borders");
    if(this.light === undefined)this.light = true;
    let words =[document.querySelector("body > div > div:nth-child(1) > div.col-2.col-border.team > h1"),
        document.querySelector("body > div > div:nth-child(1) > div:nth-child(2) > h1"),
        document.querySelector("body > div > div:nth-child(1) > div:nth-child(3) > h1")];
    if(this.light){
        vert.style.borderTop = "solid 2px #ffffff";
        vert.style.borderBottom = "solid 2px #ffffff";
        col_borders.forEach((element)=>{
            element.style.borderLeft = "2px solid #ffffff"
        });
        col_borders.forEach((element)=>{
            element.style.borderLeft = "2px solid #ffffff"
        });
        words.forEach((element)=>{
            element.style.color = "#ffffff";
        });
        this.light = false;
        document.body.style.background = "#333333";
    }
    else {
        vert.style.borderTop = "solid 2px #333333";
        vert.style.borderBottom = "solid 2px #333333";
        col_borders.forEach((element)=>{
            element.style.borderLeft = "2px solid #333333"
        });
        col_borders.forEach((element)=>{
            element.style.borderLeft = "2px solid #333333"
        });
        words.forEach((element)=>{
            element.style.color = "#333333";
        });
        this.light = true;
        document.body.style.background = "#ffffff";
    }
});