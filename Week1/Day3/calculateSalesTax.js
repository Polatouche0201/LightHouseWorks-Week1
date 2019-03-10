var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  },
  {
    name: "Amazon",
    province: "BC",
    sales: [ 100, 200, 300, 400, 500 ]
  }
];

function calculateSales(sales) {
  var totalSales = 0;
  for(var i in sales) {
    totalSales += sales[i];
  }
  return totalSales;
}

function calculateTax(totalSales, taxRates) {
  var totalTaxes = 0;
  totalTaxes = totalSales * taxRates;
  return totalTaxes;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {}
  for(var i in salesData) {
    var name = companySalesData[i].name;
    if(!result[name]) {
      result[name] = {};
      result[name].totalSales = 0;
      result[name].totalTaxes = 0;
    }
    var sales = calculateSales(companySalesData[i].sales);
    result[name].totalSales += sales;
    var province = companySalesData[i].province;
    var tax = calculateTax(sales, salesTaxRates[province]);
    result[name].totalTaxes += tax;
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/