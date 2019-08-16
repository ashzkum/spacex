const http = new EasyHTTP;

//Get user
http.get('https://api.spacexdata.com/v3/launches')
    .then(data => {
        console.log(data);
        let output = ''
        data.forEach(user => {
            output += `<li>
            <div class="list-item">
                <div class="list-info row">
                    <div class="list-img col-md-3">
                    <img src="${user.links.mission_patch_small}" alt="" title="" width="120px" />
                    </div>
                    <div class="list-text col-md-9">
                    <h2>${user.mission_name} <span>- ${user.launch_year}</span></h2>
                    <h4>${user.launch_success}</h4>
                    <a href="#" class="btn btn-secondary btn-sm btn-success">View More</a>
                    </div>
                </div>
            </div>
        </li>`
        })

        document.getElementById('output').innerHTML = output
    })
    .catch(err => console.log(err));

// User Data

const background = bg => {
    var h = document.getElementById("bgChange");
    var b = document.createAttribute("style");
    var bg = "bg-00";
    b.value = "background-image: url(img/" + bg + ".jpg);";
    h.setAttributeNode(b);
}
background();

//create user

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => {
//   console.log(data);
//   let output ='';
//   data.forEach(user => {
//     output += `<li>${user.username}</li>`
//   })
//   document.getElementById('output').innerHTML = output;
// })
// .catch(err => console.log(err));

//create user

http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(user => {
            output += `<li>${user.username}</li>`
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));