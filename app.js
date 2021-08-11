'use strict';

let container = document.getElementById('locationData');
let table = document.createElement('table');
container.appendChild(table);

let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let locationArray = [];


function getRandomMaxAndMin(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


function shopData(shopLocation, min, max, AvgPerHour) {
    this.shopLocation = shopLocation;
    this.min = min;
    this.max = max;
    this.AvgPerHour = AvgPerHour;
    this.totalOfDailySoldCoockies = 0;
    this.randomCustomersNumPerHouer = [];
    this.soldCookiesPerHouer = [];
    locationArray.push(this)
}


    shopData.prototype.getRandomCustomer = function () {
        for(let i = 0 ; i < workingHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomMaxAndMin(this.min, this.max))
        }
    }

    
    shopData.prototype.getSalesPerHour = function () {
        for(let i = 0 ; i < workingHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.AvgPerHour))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    }

    
    function tableHeader() {
        let header = document.createElement('tr');
        table.appendChild(header);
        let thEl1 = document.createElement('th');
        header.appendChild(thEl1);
        thEl1.textContent = 'Work hours';
        for (let i = 0; i < workingHours.length; i++) {
            let thEl2 = document.createElement('th');
            header.appendChild(thEl2);
            thEl2.textContent = workingHours[i];
        }
        let thEl3 = document.createElement('th');
        header.appendChild(thEl3);
        thEl3.textContent = 'Daily Location Total';
    }   
    

    
    shopData.prototype.render = function (){
        let shop = document.createElement('tr');
        table.appendChild(shop);
        let tdEl1 = document.createElement('td');
        shop.appendChild(tdEl1);
        tdEl1.textContent = this.shopLocation;
        
        
        for (let i = 0 ; i < workingHours.length ; i++) {
            let tdEl2 = document.createElement('td');
            shop.appendChild(tdEl2);
            tdEl2.textContent = this.soldCookiesPerHouer[i];
        }
        let tdEl3 = document.createElement('td');
        shop.appendChild(tdEl3);
        tdEl3.textContent = this.totalOfDailySoldCoockies;
    }
    

    let footerRow;
    function tableFooter (){
        let totalSalesPerLocation = 0;
        let SalesPerLocation = 0;
        let footer = document.createElement('tr');
        footerRow = footer
        table.appendChild(footer);
        let tdEl1 = document.createElement('td');
        footer.appendChild(tdEl1);
        tdEl1.textContent = 'Totals';
        
        
        for (let i = 0 ; i < workingHours.length ; i++) {
            let tdEl2 = document.createElement('td');
            for(let j = 0 ; j < locationArray.length ; j++){
                SalesPerLocation += locationArray[j].soldCookiesPerHouer[i]
            }
            footer.appendChild(tdEl2);
            tdEl2.textContent = SalesPerLocation;
            totalSalesPerLocation += SalesPerLocation;
            SalesPerLocation = 0;
        }
        let tdEl3 = document.createElement('td');
        footer.appendChild(tdEl3);
        tdEl3.textContent = totalSalesPerLocation;
    }

    function deleteRow() {
        table.removeChild(footerRow);
    }

    let myform = document.getElementById('myForm');
    myform.addEventListener('submit', addDemo);
    function addDemo(event) {
        event.preventDefault();
        let locationDemo = event.target.locationDemo.value;
        let minimum = event.target.minimum.value;
        let maximum = event.target.maximum.value;
        let average = event.target.average.value;       
        let newDemo = new shopData(locationDemo,minimum,maximum,average)
        newDemo.getRandomCustomer();
        newDemo.getSalesPerHour()
        newDemo.render();
        deleteRow();
        tableFooter ();
    }

   
    let seattle = new shopData('Seattle', 23, 65, 6.3);
    let tokyo = new shopData('Tokyo', 3, 24, 1.2);
    let dubai = new shopData('Dubai', 11, 38, 3.7);
    let paris = new shopData('Paris', 20, 38, 2.3);
    let lima = new shopData('Lima', 2, 16, 4.6);

    tableHeader();

    for (let i = 0; i < locationArray.length; i++) {
        locationArray[i].getRandomCustomer();
        locationArray[i].getSalesPerHour();
        locationArray[i].render();
    }

    tableFooter();
