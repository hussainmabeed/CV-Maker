function showlist() {
    var x = document.getElementById('lishow');
    x.hidden = false;
}
function openwin() {
    window.open("form.html", "_self")
}
// to get data from form 
let searchParams = new URLSearchParams(window.location.search);
function load() {
  document.getElementById("name").innerText = searchParams.get("name");
  document.getElementById("title").innerText = searchParams.get("title");
  document.getElementById("email").innerText = searchParams.get("email");
  document
    .getElementById("email")
    .setAttribute("href", "mailto:" + searchParams.get("email"));
  document.getElementById("about").innerText = searchParams.get("about");
  document.getElementById("mobile").innerText = searchParams.get("mobile");
  showTechSkills();
  showExperiences();
  showEducations();
}
// to get techskills from javascript to form page 
function showTechSkills() {
  let techSkills = searchParams.get("technical").split(" ");
  var techDiv = document.getElementById("technical");
  if (techSkills.length > 9)
    document.getElementById("techContainer").style.paddingBottom = "12em";
  if (techSkills.length > 18)
    document.getElementById("techContainer").style.paddingBottom = "18em";
  for (var i = 0; i < techSkills.length; i++) {
    if (i % 3 == 0) {
      var uList = document.createElement("ul");
      uList.classList.add("talent");
      techDiv.appendChild(uList);
    }
    var tempLi = document.createElement("li");
    tempLi.innerHTML = `${techSkills[i]}`;
    if (i % 3 == 2) {
      tempLi.classList.add("last");
    }
      uList.appendChild(tempLi);
  }
}
// to get experiences from javascript to form page 
function showExperiences() {
  const companyNames = searchParams.getAll("companyName");
  const companyDuration = searchParams.getAll("exduration");
  const title = searchParams.getAll("exptitle");
  const jobDesc = searchParams.getAll("jDesc");
  let jobContainer = document.getElementById("jobContainer");
  for (var i = 0; i < companyNames.length; i++) {
    if (i == companyNames.length - 1) {
      jobContainer.innerHTML += `<div class="job last">
    <h5>${companyNames[i]}</h5>
    <h6>${title[i]}</h6>
    <h6>${companyDuration[i]}</h6>
    <p style="font-size:24px;">
      ${jobDesc[i]}
    </p>
  </div>`;
      break;
    }
    jobContainer.innerHTML += `<div class="job">
    <h5>${companyNames[i]}</h5>
    <h6>${title[i]}</h6>
    <h6>${companyDuration[i]}</h6>
    <p style="font-size:24px;">
      ${jobDesc[i]}
    </p>
  </div>
  <hr>`;
  }
}
// to get educations from javascript to form page 
function showEducations() {
  const insName = searchParams.getAll("insName");
  const cDuration = searchParams.getAll("edduration");
  const courseDetails = searchParams.getAll("cDetails");
  let eduContainer = document.getElementById("eduContainer");
  for (var i = 0; i < insName.length; i++) {
    eduContainer.innerHTML += `<h4>${insName[i]}</h4>
    <h5>
      ${courseDetails[i]} </h5>  
      <h6>${cDuration[i]}
    </h6>
    <br>`;
  }
}
function reset() {
  window.history.back();
}



function savepdf() 
{
  document.getElementById('save').style.display = 'none';
  document.getElementById('back').style.display = 'none';

    window.print();

  document.getElementById('save').style.display = 'block';
  
}
