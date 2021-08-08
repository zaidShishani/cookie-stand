'use strict';

let container = document.getElementById('locationData');

let seattle = {

shopLocation: `Seattle`,
minPerHour: 23,
maxPerHour: 65,
AvgPerHour: 6.3,
customPerHour: [],
workingHours: ['6Am: ', '7Am: ', '8Am: ', '9Am: ', '10Am: ', '11Am: ', '12Am: ', '1Pm: ', '2Pm: ', '3Pm: ', '4Pm: ', '5Pm: ', '6Pm: ', '7Pm: '],
sales: [],
totalSales: 0,


getRanNumOCus: function() {
    for(let i = 0; i < seattle.workingHours.length; i++){
        let randomCusomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
        this.customPerHour.push(randomCusomer);
    }    
},

getSales: function() {    
    for(let i = 0; i < this.workingHourslength; i++){
        this.sales = (Math.ceil(this.getRanNumOCus[i] * this.AvgPerHour))
        this.totalSales += this.sales[i];
    }

},


render : function(){
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2 = document.createElement('h2');
    articleEl.appendChild(h2);
    h2.textContent = `${this.shopLocation}`;
    let listEl = document.createElement('ul');
    articleEl.appendChild(listEl);
    for (let i = 0 ; i < this.workingHours.length ; i++){
        let listItem = document.createElement('li');
        listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i]+' cookies';
        listEl.appendChild(listItem);
    }
    let listForTotal = document.createElement('li');
    listForTotal.textContent  = 'Total: '+ this.totalSales+' cookies';
    listEl.appendChild(listForTotal);
 }
 


}
seattle.getRanNumOCus();
seattle.getSales();
console.log(seattle.render())

/// stopped here since no TA were avalible having problem with rendering sales'array will resubmit in full after 