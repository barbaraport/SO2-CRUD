function getAllEmployees() {
	axios.get('/getAllEmployees')
		.then(function (response) {
			// handle success

			response.data.forEach(employee => {

				var tbody = document.getElementById("allEmployees");

				var tr = document.createElement("tr");

				var tdName = document.createElement("td");
				var tdLastName = document.createElement("td");
				var tdHobby = document.createElement("td");

				var tdDU = document.createElement("td");
				var btDelete = document.createElement("a");
				var btEdit = document.createElement("a");

				btDelete.classList.add("no-decoration");
				btEdit.classList.add("no-decoration");

				btDelete.href = "javascript:deleteEmployee(" + employee.id + ");";
				btEdit.href = "/employee/" + employee.id;

				iconDel = document.createElement("i");
				iconEdit = document.createElement("i");

				iconDel.classList.add("material-icons");
				iconDel.textContent = "delete";

				iconEdit.classList.add("material-icons");
				iconEdit.textContent = "edit";

				btDelete.append(iconDel);
				btEdit.append(iconEdit);

				tdDU.append(btDelete);
				tdDU.append(btEdit);

				tdName.textContent = employee.name;
				tdLastName.textContent = employee.lastName;
				tdHobby.textContent = employee.hobby;

				tr.append(tdName);
				tr.append(tdLastName);
				tr.append(tdHobby);
				tr.append(tdDU);

				tbody.append(tr);
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});
}

getAllEmployees();