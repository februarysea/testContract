var ownable = artifacts.require("ownable");
var administer = artifacts.require("Administer");
var student= artifacts.require("Student");
var teacher = artifacts.require("Teacher");

module.exports = function(deployer) { 
  deployer.deploy(ownable);
  deployer.deploy(administer);
  deployer.deploy(student);
  deployer.deploy(teacher);
  };



