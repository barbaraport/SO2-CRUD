function deleteEmployee(employeeId) {
	Swal.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete the employee!'
	}).then((result) => {
		if (result.isConfirmed) {
			axios.delete('/deleteEmployee/' + employeeId)
				.then(function (response) {
					// handle success
					console.log(response);
					Swal.fire(
						'Deleted!',
						'Employee deleted!',
						'success'
					).then((result) => {
						if (result.isConfirmed) {
							document.location.reload();
						}
					});
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					Swal.fire(
						'Oops!',
						'Employee was not deleted :(',
						'error'
					)
				})
				.then(function () {
					// always executed
				});
		}
	})
}