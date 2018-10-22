pragma solidity ^0.4.23;

import "./Ownable.sol";

contract Administer is Ownable {

    //event NewAccount(uint id, uint password);

    uint[] chainData;

    struct studentAccount {
        uint studentId;
        string studentPassword;
    }
    struct teacherAccount {
        uint teacherId;
        string teacherPassword;
    }

    studentAccount[]  studentAccounts;
    teacherAccount[]  teacherAccounts;

    mapping(uint => address) idToUser;
    mapping(uint => string) idToPassword;

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