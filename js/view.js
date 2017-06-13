var view = {
	createTable: function(rows, columns) {

		let table = document.createElement('table')
		table.setAttribute("border", "1")

		for (let i = 0; i < rows; i++) {
			let row = document.createElement('tr')

			for (let j = 0; j < columns; j++) {
				let cell = document.createElement('td')
				cell.setAttribute('row', i)
				cell.setAttribute('column', j)
				cell.addEventListener('click', function() {
					controller.parseClick(this)
				})
				row.appendChild(cell)
			}

			table.appendChild(row)
		}
		document.body.appendChild(table)
	},
	changeBackground: function(row, column, color) {

		let table = document.getElementsByTagName('table')[0]
		let cell = table.children[row].children[column]	
		cell.setAttribute('class', color)

	}

}


