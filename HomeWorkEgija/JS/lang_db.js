// Language change section
//  Selecting all attributes
const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll(".nav-lng");
const title1 = document.querySelector(".title1");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const title5 = document.querySelector(".title5");
const title6 = document.querySelector(".title6");
const titleSub1 = document.querySelector(".nav-title1");
const titleSub2 = document.querySelector(".nav-title2");
const titleSub3 = document.querySelector(".nav-title3");
const titleSub4 = document.querySelector(".nav-title4");
const titleSub5 = document.querySelector(".nav-title5");
const titleSub6 = document.querySelectorAll(".nav-title6");
const moreTitle1 = document.querySelector(".title-more1");
const moreTitle2 = document.querySelector(".title-more2");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    alert("You are changing Language for current page!");
    const attr = el.getAttribute("language");
    title1.textContent = data[attr].titleSub1;
    title3.textContent = data[attr].titleSub3;
    title4.textContent = data[attr].titleSub4;
    title5.textContent = data[attr].titleSub5;
    title6.textContent = data[attr].titleSub6;
    titleSub1.textContent = data[attr].titleSub1;
    titleSub2.textContent = data[attr].titleSub2;
    titleSub3.textContent = data[attr].titleSub3;
    titleSub4.textContent = data[attr].titleSub4;
    titleSub5.textContent = data[attr].titleSub5;
    moreTitle1.textContent = data[attr].moreTitle1;
    moreTitle2.textContent = data[attr].moreTitle2;
  });
});

let data = {
  english: {
    titleSub1: "Home",
    titleSub2: "More",
    titleSub3: "Produced",
    titleSub4: "Blog",
    titleSub5: "Discover",
    titleSub6: "Contact",
    moreTitle1: "Description",
    moreTitle2: "Wine Fields",
  },
  latvian: {
    titleSub1: "Galvenā",
    titleSub2: "Uzināt Vairāk",
    titleSub3: "Saražots",
    titleSub4: "Stāsti",
    titleSub5: "Atklāj Jauno",
    titleSub6: "Kontakti",
    moreTitle1: "Apraksts",
    moreTitle2: "Vīna Lauki",
  },
};
