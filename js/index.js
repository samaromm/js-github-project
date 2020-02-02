//where they enter the name of the user
let form = document.getElementById('github-form')
//where the result (info about user) will be shown
let userList = document.getElementById('user-list')
//where the repo will be showed
let repoList = document.getElementById('repos-list')

//create a div, img, and url that will be displayed in userList
let login = document.createElement('p')
let photo = document.createElement('img')
let profile = document.createElement('a')
profile.style.display='block'
login.style.textDecoration='underline'
userList.appendChild(login)
userList.appendChild(photo)
userList.appendChild(profile)

//when clicking submit query after entering the user name
form.addEventListener('submit', function(e){
    e.preventDefault()
    repoList.innerHTML=""
    let user = document.getElementById('search')

    //send a fetch request with the name

    fetch(`https://api.github.com/search/users?q=${user.value}`, { 
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
        })
        .then(resp => resp.json())
        .then(json => addUserInfo(json))
})

//takes the returned value from fetch and present user info
function addUserInfo(json){
    let info = json['items']
    for(let a of info){
        login.innerHTML=a['login']
        photo.src=a['avatar_url']
        profile.innerHTML='profile link'
        profile.href=a['html_url']
    }
}

//when clicking on the user name to get all the repo
login.addEventListener('click', function(e){
    fetch(`https://api.github.com/users/${login.innerHTML}/repos`, {
    headers: {
        Accept: "application/vnd.github.v3+json"
      }
    })
        .then(resp => resp.json())
        .then(json => addUserRepo(json))
})

//adding all the repositories  of the user
function addUserRepo(json){
    repoList.innerHTML=`<br />List of repositories:`
    let num=1;
    for(let a of json){
    repoList.innerHTML+= `<br /><br />${num++}- <a href=${a["html_url"]}>${a['name']}</a>`
    }
}
