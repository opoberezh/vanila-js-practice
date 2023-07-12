// const el = document.querySelector('.gallery')

// fetch( 'https://api.thecatapi.com/v1/images/MTY0Mjk0Mw').then(response => {
//     return response.json();
   
// }).then(MTY0Mjk0Mw =>{
//      console.log(MTY0Mjk0Mw);
// }).catch(error)
// console.error(error);


const URL = `https://api.thecatapi.com/v1/`;
const API_KEY = 'live_5rkPHvMPWKYY4CGUok12TUJMrinBSK72oXjLeWWkPnEJujwJ8DS6j9WtHn7clyGN';

const voteOptionsEl = document.querySelector('#vote-options');
const voteResultEl = document.querySelector('#vote-results');


let currentImageToVoteOn;

function showHistoricVotes(){
    voteOptionsEl.style.display = 'none';
    voteResultEl.style.display = 'block';

    const url = `${URL}votes?limit=10&order=DESC`;

    fetch(url,{headers: {
        'x-api-key': API_KEY
    }}).then((response) => {
        
        return response.json()
    }).then((data) => {
        data.map(function(voteData) {
            const imageData = voteData.image
            let image = document.createElement('img');
              //use the url from the image object
              image.src = imageData.url
              let gridCell = document.createElement('div');
              if(voteData.value < 0){
                gridCell.classList.add('red')
              }else{
                gridCell.classList.add('green')
              }
              gridCell.classList.add('col-lg');
              gridCell.appendChild(image)
              document.getElementById('grid').appendChild(gridCell);
        });

    }).catch(function(error) {
        console.log(error);
    });


}

function showVoteOptions() {
   document.getElementById('grid').innerHTML = '';
   voteOptionsEl.style.display = 'block';
   voteResultEl.style.display = 'none';

   showImageToVoteOn()
}

function showImageToVoteOn(){
    const url = `${URL}images/search`;
    fetch(url, {headers: {
        'x-api-key': API_KEY
    }}).then((response) => {
        return response.json();
    }).then((data)=> {
        currentImageToVoteOn = data[0];
        document.getElementById('image-to-vote-on').src = currentImageToVoteOn.url;
    });

}
function vote(value){
    const url = `${URL}votes/`;
    const body = {
        image_id: currentImageToVoteOn.id,value
    }
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(body),
       headers: {
        'content-type': "application/json",
        'x-api-key': API_KEY
       } 
    }).then((response) => {
        showVoteOptions()
    })
}

showVoteOptions()