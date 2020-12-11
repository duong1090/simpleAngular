angular
  .module("firstApp", [])

  .controller("mainController", function () {
    var vm = this;

    vm.message = "Basic Angular! CNPM moi";

    vm.computers = [
      { name: "Macbook Pro", color: "Silver", nerdness: 7 },
      { name: "Yoga 5 Pro", color: "Gray", nerdness: 6 },
      { name: "Chromebook", color: "Black", nerdness: 5 },
    ];

    //information that comes from our form
    vm.computerData = {};

    vm.addComputer = function () {
      //add a computer to the list
      vm.computers.push({
        name: vm.computerData.name,
        color: vm.computerData.color,
        nerdness: vm.computerData.nerdness,
      });
    };

    //after our computer has been added, clear the form
    vm.computerData = {};
  });
