
// works
function Game( player1_name, player2_name, scoreMax ){
	this.players = [];
	this.turnNumber = 0;
	this.currentPot = 0;
	this.scoreMax = 0;
	this.scoreMax = scoreMax;


	this.players = [
		this.Player(player1_name),
		this.Player(player2_name)
	]
	
	//set first player
	this.currentPlayer = this.players[0] ;
}


// works
Game.prototype.Player = function(playerName){
	return {
		index: this.players.length,
		name: playerName,
		score: 0,
	}
}

Game.prototype.updatePot = function(potAmt) {
	this.currentPot += Number(potAmt)
	return this.currentPot
};
// works
Game.prototype.updateTurnNumber = function(){
	return this.turnNumber++
}
// works
// works
Game.prototype.rollDice = function(){
	var die = Math.floor(Math.random() * 6) + 1

	console.log("Player", this.currentPlayer.name, "rolls", die);
	
	return die
}
// works
Game.prototype.turnControler = function(player_name,currentPot,button,diceValue){
	if(button == "bank"){

		//new way to up player score
		this.currentPlayer.Score += currentPot
		this.updateTurnNumber()
	}
	else if(button == "roll"){
		this.rollDice()
		this.updateTurnNumber()
	}
}
Game.prototype.switchPlayer = function(){
	var i = this.currentPlayer.index
	return this.currentPlayer = ( i < this.players.length) ? this.players[(i + 1)] : this.players[0] ;
}

	thisGame = new Game('mike', 'danny', 50);
	console.log( thisGame.players )
	console.log( thisGame.rollDice() )
	console.log( thisGame.switchPlayer() )
	console.log( thisGame.rollDice() )
