function editEmployee(event) {
     employeeId = window.location.href.split('/').slice(-1);
     axios.put('/editEmployee/' + employeeId, {
          name: document.getElementById("name").value,
          lastName: document.getElementById("lastName").value,
          hobby: document.getElementById("hobby").value
     })
          .then(function (response) {
               Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Employee edited!',
                    showConfirmButton: false,
                    timer: 1500
               })
          })
          .catch(function (error) {
               console.log(error);
               Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
               })
          });
}