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


        getRanNumOCus: function(minPerHour,maxPerHour) {
            for(let i = 0; i < seattle.workingHours.length; i++){
                let randomCusomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
                this.customPerHour.push(randomCusomer);
            }    
        },

        getSales: function() {   
            for(let i = 0; i < this.workingHours.length; i++){
                this.sales.push((Math.ceil(this.customPerHour[i] * this.AvgPerHour)));
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
                listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i] +' cookies';
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

let tokyo = {

    shopLocation: `Tokyo`,
    minPerHour: 3,
    maxPerHour: 24,
    AvgPerHour: 1.2,
    customPerHour: [],
    workingHours: ['6Am: ', '7Am: ', '8Am: ', '9Am: ', '10Am: ', '11Am: ', '12Am: ', '1Pm: ', '2Pm: ', '3Pm: ', '4Pm: ', '5Pm: ', '6Pm: ', '7Pm: '],
    sales: [],
    totalSales: 0,


    getRanNumOCus: function(minPerHour,maxPerHour) {
        for(let i = 0; i < seattle.workingHours.length; i++){
            let randomCusomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
            this.customPerHour.push(randomCusomer);
        }    
    },

    getSales: function() {   
         
        for(let i = 0; i < this.workingHours.length; i++){
            this.sales.push((Math.ceil(this.customPerHour[i] * this.AvgPerHour)));
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
            listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i] +' cookies';
            listEl.appendChild(listItem);
        }
        let listForTotal = document.createElement('li');
        listForTotal.textContent  = 'Total: '+ this.totalSales+' cookies';
        listEl.appendChild(listForTotal);
    }

}
tokyo.getRanNumOCus();
tokyo.getSales();
console.log(tokyo.render())

let dubai = {

    shopLocation: `Dubai`,
    minPerHour: 11,
    maxPerHour: 38,
    AvgPerHour: 3.7,
    customPerHour: [],
    workingHours: ['6Am: ', '7Am: ', '8Am: ', '9Am: ', '10Am: ', '11Am: ', '12Am: ', '1Pm: ', '2Pm: ', '3Pm: ', '4Pm: ', '5Pm: ', '6Pm: ', '7Pm: '],
    sales: [],
    totalSales: 0,


    getRanNumOCus: function(minPerHour,maxPerHour) {
        for(let i = 0; i < seattle.workingHours.length; i++){
            let randomCusomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
            this.customPerHour.push(randomCusomer);
        }    
    },

    getSales: function() {   
         
        for(let i = 0; i < this.workingHours.length; i++){
            this.sales.push((Math.ceil(this.customPerHour[i] * this.AvgPerHour)));
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
            listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i] +' cookies';
            listEl.appendChild(listItem);
        }
        let listForTotal = document.createElement('li');
        listForTotal.textContent  = 'Total: '+ this.totalSales+' cookies';
        listEl.appendChild(listForTotal);
    }

}
dubai.getRanNumOCus();
dubai.getSales();
console.log(dubai.render())



let paris = {

    shopLocation: `Paris`,
    minPerHour: 20,
    maxPerHour: 38,
    AvgPerHour: 2.3,
    customPerHour: [],
    workingHours: ['6Am: ', '7Am: ', '8Am: ', '9Am: ', '10Am: ', '11Am: ', '12Am: ', '1Pm: ', '2Pm: ', '3Pm: ', '4Pm: ', '5Pm: ', '6Pm: ', '7Pm: '],
    sales: [],
    totalSales: 0,


    getRanNumOCus: function(minPerHour,maxPerHour) {
        for(let i = 0; i < seattle.workingHours.length; i++){
            let randomCusomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
            this.customPerHour.push(randomCusomer);
        }    
    },

    getSales: function() {   
         
        for(let i = 0; i < this.workingHours.length; i++){
            this.sales.push((Math.ceil(this.customPerHour[i] * this.AvgPerHour)));
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
            listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i] +' cookies';
            listEl.appendChild(listItem);
        }
        let listForTotal = document.createElement('li');
        listForTotal.textContent  = 'Total: '+ this.totalSales+' cookies';
        listEl.appendChild(listForTotal);
    }

}
paris.getRanNumOCus();
paris.getSales();
console.log(paris.render())


let lima = {

    shopLocation: `Lima`,
    minPerHour: 2,
    maxPerHour: 16,
    AvgPerHour: 4.6,
    customPerHour: [],
    workingHours: ['6Am: ', '7Am: ', '8Am: ', '9Am: ', '10Am: ', '11Am: ', '12Am: ', '1Pm: ', '2Pm: ', '3Pm: ', '4Pm: ', '5Pm: ', '6Pm: ', '7Pm: '],
    sales: [],
    totalSales: 0,


    getRanNumOCus: function(minPerHour,maxPerHour) {
        for(let i = 0; i < seattle.workingHours.length; i++){
            let randomCusomer =  Math.floor(Math.random() * (this.maxPerHour - this.minPerHour + 1) + this.minPerHour);
            this.customPerHour.push(randomCusomer);
        }    
    },

    getSales: function() {   
         
        for(let i = 0; i < this.workingHours.length; i++){
            this.sales.push((Math.ceil(this.customPerHour[i] * this.AvgPerHour)));
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
            listItem.textContent  = this.workingHours[i] + ': ' + this.sales[i] +' cookies';
            listEl.appendChild(listItem);
        }
        let listForTotal = document.createElement('li');
        listForTotal.textContent  = 'Total: '+ this.totalSales+' cookies';
        listEl.appendChild(listForTotal);
    }

}
lima.getRanNumOCus();
lima.getSales();
console.log(lima.render())