var ownable = artifacts.require("ownable");
var administer = artifacts.require("Administer");
var student= artifacts.require("Student");
var teacher = artifacts.require("Teacher");

module.exports = function(deployer) { 
  deployer.deploy(ownable).then(() => console.log(ownable.address));
  deployer.deploy(administer).then(() => console.log(administer.address));
  deployer.deploy(student).then(() => console.log(student.address));
  deployer.deploy(teacher).then(() => console.log(teacher.address));
  };



