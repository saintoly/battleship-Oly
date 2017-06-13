var model = {
	guesses: 0,
	battleshipArray: [
		[0,0,1,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,1,0],
		[0,0,1,0,0,0,0,1,0],
		[0,0,1,0,0,0,0,1,0],
		[0,0,0,0,0,0,0,1,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,1,1,1,0,0,0,0],
		[0,0,0,0,0,0,0,0,0]
	],


	checkHit: function(row,column) {

		this.guesses++

		if (this.battleshipArray[row][column] === 1) {
			console.log('hit')
			view.changeBackground(row, column, 'red')
		} else {
			console.log('miss')
			view.changeBackground(row, column, 'blue')
		}
	}
}