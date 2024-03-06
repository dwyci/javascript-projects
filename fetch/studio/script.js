
//TODO: Add Your Code Below



window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){

            //sort astronauts by descending order
            data.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

             // Select the container to append astronaut cards
             let container = document.getElementById("container");

            for (let i=0; i<data.length; i++){
                let astronaut = data[i];

            // Determine the class for the 'Active' status based on astronaut's active status
            let activeClass = astronaut.active ? "active" : "inactive";

                container.innerHTML +=`
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstname} ${astronaut.lastName}</h3>
                    <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li>class= "${activeClass}>Active:  ${astronaut.active}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
            </div>
    
           `;
}
});

});
});
