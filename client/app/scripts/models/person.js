"use strict";

var Person = function () 
{
	this.firstName = '';
	this.lastName = '';
	this.email = '';
	this.phone = ''
}

Person.prototype.update = function (firstName, lastName, email, phone) {
	this.firstName = firstName;
	this.email = email;
	this.lastName = lastName;
	this.phone = phone;
}