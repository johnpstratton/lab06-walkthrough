// our plan
/* 
sales data in a table
// store some data in an object
// min cust, max cust, avg cookies, store name, hoursopen, actual sales (each hour), total
// we need sales-do some math, (avg X customers) x each hour
// we need mock data for customers: random generator
// we need a total - add up the total from each hour (math)

// put things in a table
// 1. find the target
// 2. create the content
//   2.1 labels, numbers (in rows, tr)
      actual text in cells (th and td)
      2.2 comes from the sales data
    3. append
*/
// constructor function for my stores (seattle, tokyo), all constructors are capitalized
function Store(minCustomers, maxCustomers, avgCookiesPerCustomer, storeName, hourOpen, hourClosed) {
this.minCustomers = minCustomers,
this.maxCustomers = maxCustomers,
this.avgCookiesPerCustomer = avgCookiesPerCustomer,
this.storeName = storeName,
this.hourOpen = hourOpen,
this.hourClosed = hourClosed,
this.total = 0
};

Store.prototype.generateRandomCustomersForOneHour = function() {
  // return a random #
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

Store.prototype.sellCookiesForAllHours = function () {

  for(var i = this.hourOpen; i < this.hourClosed; i += 100) {
  // make 13 hours worth of sales and put them in an array
  // no for loop to start, just once to start
  var cookies = Math.ceil(this.generateRandomCustomersForOneHour() * this.avgCookiesPerCustomer);//23 cookies that hour

  this.cookieSales.push(cookies);
  }
};

Store.prototype.totalTheSales = function () {
  //adding everything from the soldCookies array
  //return a total, maybe store it in a object
  for (var i = 0; i < this.cookieSales.length; i++) {
    this.total = this.total + this.cookieSales[i];
  }
  return this.total
};

Store.prototype.renderAsATableRow = function () {
  // 1. find the target
  document.getElementById('cookieStores');
  // 2. create the content
  //  2.1 labels, numbers(in rows, tr)
  //      actual text in cells (th and td)
  var newTrowEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newThEl.textContent = this.storeName;
  newTrowEl.append(newThEl);

  //  2.2 comes from the sales data
  // 3. append
  var tdEl=document.createElement('td');
  tdEl.textContent = this.cookieSales[0];
  newTrowEl.appendChild(tdEl);

  myTable.appendChild(newTrowEl);

};

var seattle = new Store();
// test for rando
console.log(seattle.generateRandomCustomersForOneHour());

// test for making my array
seattle.sellCookiesForAllHours();
// cookie sales will be the name of my array
console.log(seattle.cookieSales);

// test for the total
seattle.totalTheSales();
// totalSales will be the name of my array
console.log('sales array': )

