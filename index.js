 const url = 'https://restcountries.com/v2/all'
//  let url = 'apiv3.apifootball.com/?action=rget_teams&league_id=302&APIkey=cd0be8827e04b3a5ae7a1ff7a502608634c4ec630e167c7550959ef4a04e78c1'

 console.log(url);
// console.log(url);


// https://apiv3.apifootball.com/?action=rget_teams&league_id=302&APIkey=cd0be8827e04b3a5ae7a1ff7a502608634c4ec630e167c7550959ef4a04e78c1
 
// cd0be8827e04b3a5ae7a1ff7a502608634c4ec630e167c7550959ef4a04e78c1

// new Promise((resolve, reject) => {
//         try {
//             resolve (url)
//         } catch (error) {
//             reject (error)
//         }
// })
//         console.log(promise);

//  function getFootball() {
    
//     fetch(url)
//      .then((response) =>(let res =response.json()))
//      .then(re)
//      .catch((error) => console.log(error))
//  }



async function getFootball(){
    try {
      let football = await fetch(url)
        let data = await  football.json()
        console.log(data);
        //console.log(data)
        let html=''
      data.forEach(country => {
        
      
      
        let card=   `
        <div class='country'>
          <p>${country.name}</p>
          <img id="stylee" src='${country.flags.png}'>

        </div>
      `
      

        html += card

         document.querySelector('.container').innerHTML = html;

        

     });   
    } catch (error) {
        console.log(error);
    }

    
}

getFootball()



// const displayFootball = async()=> {

//     let football = await getFootball()

//     let html = ''

//     football.forEach(football =>{
//         let card = ''
//         <div class = "football">

//             <span> ${football.team_name}</span>
//                 <span> ${football.team_badge}</span>


//          </div>

//          html += card
//      });
 



//  let container = document.querySelector(".container")
//  container.innerHTML = html

//  displayFootball()

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });