function getEmployee(employeeId) {
  axios.get('/getEmployee/' + employeeId)
    .then(function (response) {
      let name = document.getElementById("name");
      let lastName = document.getElementById("lastName");
      let hobby = document.getElementById("hobby");

      name.value = response.data.name;
      lastName.value = response.data.lastName;
      hobby.value = response.data.hobby;

      var labels = document.querySelectorAll("label");
      labels.forEach(label => {
        label.classList.add("active");
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
getEmployee(window.location.href.split('/').slice(-1));
