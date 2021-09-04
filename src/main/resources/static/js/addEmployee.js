function addEmployee(event) {
     axios.post('/addEmployee', {
          name: document.getElementById("name").value,
          lastName: document.getElementById("lastName").value,
          hobby: document.getElementById("hobby").value
     })
          .then(function (response) {
               console.log(response);
               Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Employee added!',
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