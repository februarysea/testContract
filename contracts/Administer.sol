pragma solidity ^0.4.23;

import "./Ownable.sol";

contract Administer is Ownable {

    //event NewAccount(uint id, uint password);

    string[] chainData;

    struct studentAccount {
        uint studentId;
        string studentPassword;
    }
    struct teacherAccount {
        uint teacherId;
        string teacherPassword;
    }

    studentAccount[] public studentAccounts;
    teacherAccount[] public teacherAccounts;

    mapping(uint => address) idToUser;
    mapping(uint => string) idToPassword;
    mapping(address => uint) uploadUserToDataId;
    mapping(address => string) downloadUserToData;

    modifier onlyAccountOf(uint _id) {
        require(msg.sender == idToUser[_id]);
        _;
    }

    function _createTeacherAccount(uint _id, string _password) internal onlyOwner {
        teacherAccounts.push(teacherAccount(_id, _password));
        idToUser[_id] = msg.sender;
        //NewAccount(_id, _password);
    }

    function _createStudentAccount(uint _id, string _password) internal onlyOwner{
        studentAccounts.push(studentAccount(_id, _password));
        idToUser[_id] = msg.sender;
        //NewAccount(_id, _password);
    }
}