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
let mainMenu = document.getElementById("main__menu");
fn_loadData();
function fn_loadData() {
  let ul = document.createElement("ul");
  ul.setAttribute("class", "menu__total")
  menu.forEach(data=>{
    let litag = "";
    let litag1 = "";
    let dataColumns = data.columns;
    dataColumns.forEach(data=>{
      let litag2 = "";
      let menu_child = data.menu_child;
      menu_child.forEach(data=>{
        litag2 += `<li><a href="${data.link}">${data.name}</a></li>`
      })
      litag1 += `<li class="menu__columns"><nav><h2>${data.text.toUpperCase()}</h2><ul class="mainMenu__childItem">${litag2}</ul></nav></li>`
    })
    litag += `<li class="dropdown"><a href="#" class="menu__item" onclick="fn_menuChild(this)">${data.name}</a>
                <ul class="menu_childGroup">${litag1}</ul></li>`
    ul.innerHTML += litag
  })
  mainMenu.appendChild(ul); 
}
function fn_menuChild(e) {
  let li = e.parentElement;
  let ul = li.querySelector(".menu_childGroup");
  ul.classList.toggle("active");
  li.addEventListener("mouseout", ()=>{
    ul.classList.remove("active");
  })
}

