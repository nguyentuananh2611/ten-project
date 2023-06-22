const menu = [
  {
    name: "Get Data",
    columns: [
      {
        text: "",
        menu_child: [
          { name: "Occurrences", link: "/occurrence/search" },
          { name: "GBIF API", link: "/developer/summary" },
          { name: "Species", link: "/species/search" },
          { name: "Datasets", link: "/dataset/search" },
          { name: "Occurrence snapshots", link: "/occurrence-snapshots" },
          { name: "Hosted portals", link: "/hosted-portals" },
          { name: "Trends", link: "/analytics/global" },
        ],
      },
    ],
  },
  {
    name: "How To",
    columns: [
      {
        text: "Share data",
        menu_child: [
          { name: "Quick-start guide", link: "/publishing-data" },
          { name: "Dataset classes", link: "/dataset-classes" },
          {
            name: "Data hosting",
            link: "/article/4qfLORxmM8kYOIwSYSMc2M/data-hosting",
          },
          { name: "Standards", link: "/standards" },
          { name: "Become a publisher", link: "/become-a-publisher" },
          { name: "Data quality", link: "/data-quality-requirements" },
          { name: "Data papers", link: "/data-papers" },
        ],
      },
      {
        text: "Use data",
        menu_child: [
          {
            name: "Featured data use",
            link: "/resource/search?contentType=dataUse",
          },
          { name: "Citation guidelines", link: "/citation-guidelines" },
          {
            name: "GBIF citations",
            link: "/resource/search?contentType=literature",
          },
          { name: "Citation widget", link: "/article/1E6v02SFQyhupvB7JqDXPN" },
        ],
      },
    ],
  },
  {
    name: "Tools",
    columns: [
      {
        text: "Publishing",
        menu_child: [
          { name: "IPT", link: "/ipt" },
          { name: "Data validator", link: "/tools/data-validator" },
          { name: "Scientific Collections", link: "/grscicoll" },
          { name: "Suggest a dataset", link: "/suggest-dataset" },
          {
            name: "New data model ⭐️",
            link: "/composition/HjlTr705BctcnaZkcjRJq/data-model",
          },
        ],
      },
      {
        text: "Data access and use",
        menu_child: [
          { name: "Hosted portals", link: "/hosted-portals" },
          { name: "Data processing", link: "/data-processing" },
          { name: "Derived datasets", link: "/derived-dataset/register" },
          { name: "rgbif", link: "/tool/81747" },
          {
            name: "pygbif",
            link: "/tool/OlyoYyRbKCSCkMKIi4oIT/pygbif-gbif-python-client",
          },
          { name: "MAXENT", link: "/tool/81279" },
          {
            name: "Tools catalogue",
            link: "/resource/search?contentType=tool",
          },
        ],
      },
      {
        text: "GBIF labs",
        menu_child: [
          { name: "Species matching", link: "/tools/species-lookup" },
          { name: "Name parser", link: "/tools/name-parser" },
          { name: "Sequence ID", link: "/tools/sequence-id" },
          {
            name: "Relative observation trends",
            link: "/tools/observation-trends",
          },
          { name: "GBIF data blog", link: "https://data-blog.gbif.org/" },
        ],
      },
    ],
  },
  {
    name: "Community",
    columns: [
      {
        text: "Network",
        menu_child: [
          { name: "Participant network", link: "/the-gbif-network" },
          { name: "Nodes", link: "/composition/1aKAxGBtIAQwiEBzUjz9q6" },
          { name: "Publishers", link: "/publisher/search" },
          { name: "Network contacts", link: "/contact-us/directory?group=nsg" },
          { name: "Community forum", link: "https://discourse.gbif.org/" },
          {
            name: "alliance for biodiversity knowledge",
            link: "https://www.allianceforbio.org",
          },
        ],
      },
      {
        text: "Volunteers",
        menu_child: [
          { name: "Mentors", link: "/mentors" },
          { name: "Ambassadors", link: "/composition/6iHKXo8pUyRPJ2Ut0683Z8/" },
          { name: "Translators", link: "/translators" },
          { name: "Citizen scientists", link: "/citizen-science" },
        ],
      },
      {
        text: "Activities",
        menu_child: [
          {
            name: "Capacity enhancement",
            link: "/article/7sL3m3zzN5MUuaOuEhtLuZ/",
          },
          { name: "Programmes", link: "/composition/sogjffeR223qaLPROdpoF/" },
          { name: "Training and learning resources", link: "/training" },
          { name: "Data Use Club", link: "/data-use-club" },
          { name: "Living Atlases", link: "http://living-atlases.gbif.org/" },
        ],
      },
    ],
  },
  {
    name: "About",
    columns: [
      {
        text: "Inside GBIF",
        menu_child: [
          {
            name: "What is GBIF?",
            link: "/composition/57twunvM3vrUotO12WDNgc",
          },
          { name: "Become a member", link: "/become-member" },
          { name: "Governance", link: "/governance" },
          { name: "Implementation plan", link: "/strategic-plan" },
          {
            name: "Work Programme",
            link: "https://docs.gbif.org/2023-work-programme/en/",
          },
          { name: "Funders", link: "/funders" },
          {
            name: "Partnerships",
            link: "/partners",
          },
          {
            name: "Release notes",
            link: "/release-notes",
          },
          {
            name: "Contacts",
            link: "/contact-us",
          },
        ],
      },
      {
        text: "News",
        menu_child: [
          {
            name: "News",
            link: "/resource/search?contentType=news",
          },
          { name: "Newsletters and lists", link: "/newsletters" },
          { name: "Events", link: "/resource/search?contentType=event" },
          { name: "Awards", link: "/awards" },
          { name: "Science Review", link: "/science-review" },
          {
            name: "Data use",
            link: "/data-use",
          },
        ],
      },
    ],
  },
];
const image = [
  "url(https://wallpapertag.com/wallpaper/full/4/f/f/465164-download-free-beautiful-anime-wallpaper-1920x1080.jpg)",
  "url(https://1.bp.blogspot.com/-97e5_Jq2gnM/XqLnW_7mufI/AAAAAAAAAkc/IEes46ScOK4xbfNu9b1SaFbrLfWOaYjdwCLcBGAsYHQ/s1600/hinh-nen-may-tinh-3d-dep-nhat-cho-may-tinh-laptop%2B%25288%2529.jpg)",
  "url(https://anhdepfree.com/wp-content/uploads/2020/02/anh-anime-dep.jpg)",
  "url(https://animestore.vn/wp-content/uploads/2022/10/anh-nen-anime-3d-dep_110715766.jpg)",
];

let mainMenu = document.getElementById("main__menu");
let divAction = document.getElementById("stickyNavAction");
let header = document.querySelector(".header");


fn_loadData();
function fn_loadData() {
  let ul = document.createElement("ul");
  ul.setAttribute("class", "menu__total");
  menu.forEach((data) => {
    let litag = "";
    let litag1 = "";
    let dataColumns = data.columns;
    dataColumns.forEach((data) => {
      let litag2 = "";
      let menu_child = data.menu_child;
      menu_child.forEach((data) => {
        litag2 += `<li><a href="${data.link}">${data.name}</a></li>`;
      });
      litag1 += `<li class="menu__columns"><nav><h2>${data.text.toUpperCase()}</h2><ul class="mainMenu__childItem">${litag2}</ul></nav></li>`;
    });
    litag += `<li class="dropdown"><a href="#" class="menu__item" onclick="fn_menuChild(this)">${data.name}</a>
                <ul class="menu_childGroup">${litag1}</ul></li>`;
    ul.innerHTML += litag;
  });
  mainMenu.appendChild(ul);
  fn_login();
}

function fn_menuChild(e) {
  let li = e.parentElement;
  let ul = li.querySelector(".menu_childGroup");
  ul.classList.toggle("active");
  document.addEventListener("click", (event) => {
    if (!li.contains(event.target)) {
      ul.classList.remove("active");
    }
  });
}

function fn_login() {
  let buttonLogin = document.getElementById("buttonLogin");
  buttonLogin.addEventListener("click", () => {
    let divtag = "";
    divtag = `<div class="menubox__wrapper">
    <a href="#" class="btn__close" id="close"><i class="fa-solid fa-xmark"></i></a>
    <div class="menubox__content" id="menuContent">
        <nav>
            <ul>
                <li><a href="#" id="formLogin">LOGIN</a></li>
                <li><a href="#" id="formRegister">REGISTER</a></li>
            </ul>
        </nav>
        <br>
    </div>
   </div>`;

    divAction.innerHTML += divtag;

    let formLogin = document.getElementById("formLogin");
    let formRegister = document.getElementById("formRegister");
    let arrayLabel1 = ["USERNAME OR EMAIL", "PASSWORD"];
    let arrayLabel2 = ["COUNTRY", "EMAIL", "USERNAME", "PASSWORD"];
    let menuContent = document.getElementById("menuContent");

    fn_createForm(menuContent, arrayLabel1, "SIGN IN", "signin");
    fn_createForm(menuContent, arrayLabel2, "NEXT", "next");
    let signin = document.getElementById("signin");
    let next = document.getElementById("next");
    next.classList.add("inactive");
    formLogin.style.color = "rgb(97,168,97)";
    formLogin.parentElement.style.borderBottom = "1px solid rgb(97,168,97)";

    formLogin.addEventListener("click", () => {
      formLogin.style.color = "rgb(97,168,97)";
      formLogin.parentElement.style.borderBottom = "1px solid rgb(97,168,97)";
      next.style.display = "none";
      signin.style.display = "block";
      formRegister.style.color = "#aaa";
      formRegister.parentElement.style.borderBottom = "1px solid #aaa";
    });

    formRegister.addEventListener("click", () => {
      signin.style.display = "none";
      next.style.display = "block";
      formRegister.style.color = "rgb(97,168,97)";
      formRegister.parentElement.style.borderBottom =
        "1px solid rgb(97,168,97)";
      formLogin.style.color = "#aaa";
      formLogin.parentElement.style.borderBottom = "1px solid #aaa";
    });

    let close = document.getElementById("close");
    close.addEventListener("click", () => {
      divtag = "";
      divAction.innerHTML = `<a href="#" class="stickyNav__actions__action"><i class="fa-solid fa-magnifying-glass"></i></a>
    <a href="#" class="stickyNav__actions__action"><i class="fa-solid fa-message"></i></a>
    <button style="display: inline-block;color: #61a861; padding: 6px 18px;margin: 0 15px;border: none;font-size: 12px;border-radius: 3px;" id="buttonLogin">login</button>`;
      fn_login();
    });
  });
}

function fn_createForm(div, arr, text, id) {
  let form = document.createElement("form");
  form.setAttribute("class", "login__form");
  form.id = id;
  for (let i = 0; i < arr.length; i++) {
    form.innerHTML += `<div class="user_email_password">
    <label for="#">${arr[i]}</label>
    <input type="text" required>
    </div>`;
  }
  console.log(form);
  let inputs = form.querySelectorAll("input");
  console.log(inputs);
  for (const input of inputs) {
    console.log(input);
  }


  let ptag = `<br><br><p><button>${text}</button></p>`;
  form.innerHTML += ptag;
  div.appendChild(form);
}

const backgroundHeader = ()=>{
  let x = Math.floor(Math.random()*10);
  header.style.background = image[x];
}
backgroundHeader();