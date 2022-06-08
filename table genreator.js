/// declare variables
let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let submit = document.querySelector("[type=submit]");
let tableContainer = document.querySelector(".tableContainer");
let table = document.querySelector("table");

// intialize functions
submit.addEventListener("click", function () {
	if (document.body.contains(document.querySelector(".tableCols"))) {
		table.innerHTML = "";
	}
	if (rows.value <= 100 && columns.value <= 100) {
		if (rows.value > 0 && columns.value > 0) {
			for (let i = 1; i <= rows.value; i++) {
				let tableRows = document.createElement("tr");
				tableRows.className = "tableRows";
				for (j = 1; j <= columns.value; j++) {
					let tableCols = document.createElement("td");
					tableCols.className = "tableCols";
					let colsValue = document.createTextNode(
						Math.round(Math.random() * 100)
					);
					tableCols.appendChild(colsValue);
					tableRows.appendChild(tableCols);
				}
				table.appendChild(tableRows);
				tableContainer.appendChild(table);
			}
		} else {
			alert("please inter valid number");
		}
		rows.value = "";
		columns.value = "";
	} else {
		alert("please inter valid number");
		rows.value = "";
		columns.value = "";
	}
});
