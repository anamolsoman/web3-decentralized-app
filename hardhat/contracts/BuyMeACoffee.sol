// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract BuyMeACoffee {
// it is similar to distruct
    event NewMemo( 
        address indexed from,
        uint256 timestamp,
        string name,
        string message
        );

// struct is like a template for message that we are reciving
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    // Address of the contract deployer
    address payable owner;

    // List of memos received from coffee buyers
    Memo[] memos;

    constructor(){
        owner = payable(msg.sender);
    }

    function getMemos() public view returns (Memo[] memory){
        return memos;

    }

    function buyCoffee(string memory _name,string memory _message) public payable{
        require(msg.value > 0,"You need to pay more that 0 to buy me a coffee");
        owner.transfer(msg.value);

        memos.push(Memo(msg.sender,block.timestamp,_name,_message));

        emit NewMemo(msg.sender,block.timestamp,_name,_message);
    }
}
