'use strict';

class Home {
	constructor(){
		this.customer           = this.getCustomerUid();
		this.customerName       = "";
		this.address            = "";
		this.accountNumber      = "";
		this.totalPaymentAmount = 0.0;
		this.paymentDueDate     = "";
	}
	
	getCustomer(){
		fetch(`../nexus/login/${this.customer}`)
		.then(data => data.json())
		.then(cust => {
			this.customerName       = cust.customerName;
			this.address            = cust.address;
			this.accountNumber      = cust.accountNumber;
			this.totalPaymentAmount = cust.totalPaymentAmount;
			this.paymentDueDate     = cust.paymentDueDate;
			this.setVariables();
		});
	}
	
	getCustomerUid(){
		return document.cookie.replace(/(?:(?:^|.*;\s*)webCustomerUid\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	}
	
	setVariables(){
		console.log(this);
		document.querySelector(".home .customer.customerName").innerHTML       = this.customerName;
		document.querySelector(".home .customer.address").innerHTML            = this.address;
		document.querySelector(".home .customer.accountNumber").innerHTML      = this.accountNumber;
		document.querySelector(".home .customer.totalPaymentAmount").innerHTML = this.totalPaymentAmount;
		document.querySelector(".home .customer.paymentDueDate").innerHTML     = this.paymentDueDate;
	}
}

let home = new Home();
home.getCustomer();