function getAllEmployees() {
	axios.get('/getAllEmployees')
		.then(function (response) {
			// handle success
			console.log(response);

			response.data.forEach(employee => {

				var tbody = document.getElementById("allEmployees");

				var tr = document.createElement("tr");

				var tdName = document.createElement("td");
				var tdLastName = document.createElement("td");
				var tdHobby = document.createElement("td");

				tdName.textContent = employee.name;
				tdLastName.textContent = employee.lastName;
				tdHobby.textContent = employee.hobby;

				tr.append(tdName);
				tr.append(tdLastName);
				tr.append(tdHobby);

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