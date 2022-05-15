angular.module('appModule').service('Employees', ['$http', function EmployeesService($http) {
  const getEmployees = (page = 1) => {
    const employeesUrl = `https://fe-task.getsandbox.com/employees?page=${page}`;

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = () => {
    // [Load more empolyess logic goes here]
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}]);
