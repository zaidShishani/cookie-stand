'use strict';

let container = document.getElementById('locationData');
let table = document.createElement('table');
container.appendChild(table);


let workingHours = ['6Am ', '7Am ', '8Am ', '9Am ', '10Am ', '11Am ', '12Am ', '1Pm ', '2Pm ', '3Pm ', '4Pm ', '5Pm ', '6Pm ', '7Pm '];
let locationArray = [];


function shopData(shopLocation, minPerHour, maxPerHour, AvgPerHour) {
    this.shopLocation = shopLocation;
    this.minPerHour = minPerHour;
    this.maxPerHour = maxPerHour;
    this.AvgPerHour = AvgPerHour;
    this.salesPerHour = [];
    this.totalSalesDaily = 0;
    this.randomCustomer = [];
    locationArray.push(this);
}
    function getRandomInc(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

shopData.prototype.getRandomCustomer = function() {
    for(let i = 0; i < workingHours.length; i++) {
        console.log('hi')
        this.randomCustomer.push(getRandomInc(this.min,this.max));
    }
}

shopData.prototype.getSalesPerHour = function() {
    for(let i = 0; i < workingHours.length; i++) {
        
        this.salesPerHour.push(Math.floor(this.randomCustomer[i] * this.AvgPerHour ))
        this.totalSalesDaily += this.salesPerHour[i]
    }
}



function tableHeader() {
    let header = document.createElement('tr');
    table.appendChild(header);
    let thE1 = document.createElement('th');
    header.appendChild(thE1);
    thE1.textContent = 'Location\\Work hours';
    for(let i = 0; i < workingHours.length; i++) {
        let thE2 = document.createElement('th');
        header.appendChild(thE2);
        thE2.textContent = workingHours[i];
    }
    let thE3 = document.createElement('th');
    header.appendChild(thE3);
    thE3.textContent = 'Daily Location Total';
}


shopData.prototype.render = function() {
    let shopData = document.createElement('tr');
    table.appendChild(shopData);

    let tdE1 = document.createElement('td');
    shopData.appendChild(tdE1);
    tdE1.textContent = this.locationArray;

    for(let i = 0; i < workingHours.length; i++) {
        let tdE2 = document.createElement('td');
        shopData.appendChild(tdE2);
        tdE2.textContent= this.salesPerHour[i];
    }
    let tdE3 = document.createElement('td');
    shopData.appendChild(tdE3);
    tdE3.textContent = this.totalSalesDaily;
}

function tableFooter() {
    let totalSalesPerLocation = 0;
    let SalesPerLocation = 0;

    let footer = document.createElement('tr');
    table.appendChild(footer);

    let tdEl1 = document.createElement('td');
    footer.appendChild(tdEl1);
    tdEl1.textContent = 'Total'

    for(let i = 0; i < workingHours.length; i++) {
        let tdEl2 = document.createElement('td');
        for(let j = 0; j < locationArray.length; j++){
            SalesPerLocation += locationArray[j].salesPerHour[i]
        }
        footer.appendChild(tdEl2);
        tdEl2.textContent = SalesPerLocation;
        totalSalesPerLocation += SalesPerLocation;
        SalesPerLocation =0;
    }
    let tdEl3 = document.createElement('td');
    footer.appendChild(tdEl3);
    tdEl3.textContent = totalSalesPerLocation;
    
}

let seattle = new shopData('Seattle', 23, 65, 6.3);
// let tokyo = new shopData('Tokyo', 3, 24, 1.2);
// let dobai = new shopData('Dubai', 11, 38, 3.7);
// let paris = new shopData('Paris', 20, 38, 2.3);
// let lima = new shopData('Lima', 2, 16, 4.6);

tableHeader();

for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].getRandomCustomer();
    locationArray[i].getSalesPerHour();
    locationArray[i].render();
}

tableFooter()
// let seattle = {

// shopLocation: `Seattle`,
// minPerHour: 23,
// maxPerHour: 65,
// AvgPerHour: 6.3,
// customPerHour: [],

// sales: [],
// totalSales: 0,


// getRanNumOCus: function() {
//     for(let i = 0; i < seattle.workingHours.length; i++){
//         let randocustomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
//         this.customPerHour.push(randocustomer);
//     }    
// },

// getSales: function() {    
//     for(let i = 0; i < this.workingHours.length; i++){
//         this.sales = (Math.ceil(this.getRanNumOCus[i] * this.AvgPerHour))
//         this.totalSales += this.sales[i];
//     }

// },


// render : function(){
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     let h2 = document.createElement('h2');
//     articleEl.appendChild(h2);
//     h2.textContent = `${this.shopLocation}`;
//     let listEl = document.createElement('ul');
//     articleEl.appendChild(listEl);
//     for (let i = 0 ; i < this.workingHours.length ; i++){
//         let listItem = document.createElement('li');
//         listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i]+' cookies';
//         listEl.appendChild(listItem);
//     }
//     let listForTotal = document.createElement('li');
//     listForTotal.textContent  = 'Total: '+ this.totalSales+' cookies';
//     listEl.appendChild(listForTotal);
//  }
 


// }
// seattle.getRanNumOCus();
// seattle.getSales();
// console.log(seattle.render())

// stopped here since no TA were avalible having problem with rendering sales'array will resubmit in full after 