'use strict';

class Home {
	constructor(){
		this.customer = this.getCustomerUid();
		console.log(this.customer);
		fetch(`../nexus/login/${this.customer}`)
		.then(data => data.json())
		.then(cust => {
			console.log(cust)
			this.customerName       = cust.customerName;
			this.address            = cust.address;
			this.accountNumber      = cust.accountNumber;
			this.totalPaymentAmount = cust.totalPaymentAmount;
			this.paymentDueDate     = cust.paymentDueDate;
		});
		console.log(this);
	}
	
	getCustomerUid(){
		console.log(document.cookie);
		return document.cookie.replace(/(?:(?:^|.*;\s*)webCustomerUid\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	}
}

new Home();