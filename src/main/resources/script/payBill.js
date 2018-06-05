'use strict';

class PayBill {
	constructor(){
		this.customer          = this.getCustomerUid();
		this.customerName      = "";
		this.address           = "";
		this.accountNumber     = "";
		this.currentAmountDue  = 0.0;
		this.previousAmountDue = 0.0;
		this.paymentDueDate    = "";
	}
	
	getCustomer(){
		fetch(`../nexus/login/${this.customer}`)
		.then(data => data.json())
		.then(cust => {
			this.customerName      = cust.customerName;
			this.address           = cust.address;
			this.accountNumber     = cust.accountNumber;
			this.currentAmountDue  = cust.currentAmountDue;
			this.previousAmountDue = cust.previousAmountDue;
			this.paymentDueDate    = cust.paymentDueDate;
			this.setVariables();
		});
	}
	
	getCustomerUid(){
		return document.cookie.replace(/(?:(?:^|.*;\s*)webCustomerUid\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	}
	
	setVariables(){
		console.log(this);
		document.querySelector(".payBill .customer.address").innerHTML           = this.address;
		document.querySelector(".payBill .customer.accountNumber").innerHTML     = this.accountNumber;
		document.querySelector(".payBill .customer.currentAmountDue").innerHTML  = this.currentAmountDue;
		document.querySelector(".payBill .customer.previousAmountDue").innerHTML = this.previousAmountDue;
		document.querySelector(".payBill .customer.paymentDueDate").innerHTML    = this.paymentDueDate;
	}
}

let payBill = new PayBill();
payBill.getCustomer();