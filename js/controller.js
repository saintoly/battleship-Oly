button = document.getElementsByTagName('button')
button[0].addEventListener('click', () => {
	var rows = Number(document.getElementById('rows').value)
	var columns = Number(document.getElementById('columns').value)
	view.createTable(rows, columns)
	model.randomizeShips()
})

var controller = {

	parseClick: function(elementObject) {
		var row = Number(elementObject.getAttribute('row'))
		var column = Number(elementObject.getAttribute('column'))

		model.checkHit(row,column)
	}
}
