                    //button //

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

                    // dice img //

const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none'
       
                      // variables // 
let currentscore = 0;
let ActivePlayer = 0;
let score = [0,0]
let gameover = true;

                       // heart of the game // 
const switchPlayer = () =>{
	currentscore = 0;
		document.getElementById('current--' + ActivePlayer + '').textContent = currentscore;
		ActivePlayer = ActivePlayer === 0 ? 1 : 0 /* reread ? and :*/
		document.querySelector('.player--0').classList.toggle('player--active')
	    document.querySelector('.player--1').classList.toggle('player--active')
}
                      // function for random //

btnRoll.addEventListener('click',() =>{
	
	
	
  if(gameover){
	  diceImg.style.display = 'block'
	
const random = Math.floor(Math.random() * 6 + 1)
	
	
	diceImg.src = './dice-'+ random +'.png';
	if(random !== 1 ){ 
	currentscore += random
	document.getElementById('current--' + ActivePlayer + '' ).textContent = currentscore;
	} else {
		
       switchPlayer()
	}
  }
	
})

                      // btnHold saves score //
btnHold.addEventListener('click',()=>{
	if(gameover){
		
		score[ActivePlayer] += currentscore;
	document.getElementById('score--'+ActivePlayer+'').textContent = score[ActivePlayer];
	
	 if(score[ActivePlayer] >= 100){
		 //winner
		 document.querySelector('.player--'+ ActivePlayer +'').classList.add('player--winner')
		 gameover = false;
	 } else{
		   switchPlayer()
	 }
	
	}
	
})
                     // new game // 


btnNew.addEventListener('click' , ()=>{
currentscore = 0;
ActivePlayer = 0;
score = [0,0]
gameover = true;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.player--0').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.add('player--active')


	

})















