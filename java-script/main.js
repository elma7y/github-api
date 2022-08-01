let inputData = document.querySelector("input");
let getBtn = document.querySelector(".header span");
let dataInfo = document.querySelector(".data");

inputData.focus();

getBtn.onclick  = function() {
    
    getRepos();

}

function getRepos() {

    if(inputData.value == ""){

        dataInfo.innerHTML = "<span>Please Enter User Name</span>";

    }else{

    fetch(`https://api.github.com/users/${inputData.value}/repos`)

    .then((response) => response.json())

    .then((reposData) => {

        dataInfo.innerHTML = "";

                reposData.forEach(repo => {
                    let mainDiv = document.createElement("div");
                    let mainDivText = document.createTextNode(repo.name);
                    mainDiv.appendChild(mainDivText);
                    let UrlLink = document.createElement("a");
                    let UrlLinkText = document.createTextNode(" visit");
                    UrlLink.appendChild(UrlLinkText);
                    UrlLink.href = `https://github.com/${inputData.value}/${repo.name}`;
                    UrlLink.setAttribute("target" , "_blank");
                    mainDiv.appendChild(UrlLink);
                    let StarSpan = document.createElement("span");
                    let StarSpanText = document.createTextNode(` stars = ${repo.stargazers_count}`);
                    StarSpan.appendChild(StarSpanText);
                    mainDiv.appendChild(StarSpan);
                    mainDiv.classList.add("repo_box");
                    dataInfo.appendChild(mainDiv);
                });
            }
    )
    }

}