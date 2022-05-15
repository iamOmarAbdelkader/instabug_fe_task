angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filter = '';
  homePageVm.currentPage = 1;
  homePageVm.shouldBtnBeDisabled = false;

  homePageVm.handleFilterChangeEvent = function (filter) {
    console.log(filter);
    homePageVm.filter = filter;
  };

  homePageVm.handleLoadMore = function () {
    homePageVm.shouldBtnBeDisabled = true;
    homePageVm.currentPage++;
    loadEmployees();
  };

  loadEmployees();

  function loadEmployees() {
    Employees.getEmployees(homePageVm.currentPage)
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        if (data.pages > homePageVm.currentPage) {
          homePageVm.shouldBtnBeDisabled = false;
        }
      });
  }
}
