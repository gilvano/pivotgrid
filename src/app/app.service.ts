import { Injectable } from '@angular/core';

export class Sale {
    id: number;
    region: string;
    country: string;
    city: string;
    amount: number;
    date: string;
}

let sales: Sale[] = [{
    'id': 1,
    'region': 'North America',
    'country': 'United States',
    'city': 'New York',
    'amount': 1740,
    'date': '2013/01/06'
}, {
    'id': 2,
    'region': 'North America',
    'country': 'United States',
    'city': 'Los Angeles',
    'amount': 850,
    'date': '2013/01/13'
}, {
    'id': 3,
    'region': 'North America',
    'country': 'United States',
    'city': 'Denver',
    'amount': 2235,
    'date': '2013/01/07'
}, {
    'id': 4,
    'region': 'North America',
    'country': 'Canada',
    'city': 'Vancouver',
    'amount': 1965,
    'date': '2013/01/03'
}, {
    'id': 5,
    'region': 'North America',
    'country': 'Canada',
    'city': 'Edmonton',
    'amount': 880,
    'date': '2013/01/10'
}/*, {
    'id': 6,
    'region': 'South America',
    'country': 'Brazil',
    'city': 'Rio de Janeiro',
    'amount': 5260,
    'date': '2013/01/17'
}, {
    'id': 7,
    'region': 'South America',
    'country': 'Argentina',
    'city': 'Buenos Aires',
    'amount': 2790,
    'date': '2013/01/21'
}, {
    'id': 8,
    'region': 'South America',
    'country': 'Paraguay',
    'city': 'Asuncion',
    'amount': 3140,
    'date': '2013/01/01'
}, {
    'id': 9,
    'region': 'Europe',
    'country': 'United Kingdom',
    'city': 'London',
    'amount': 6175,
    'date': '2013/01/24'
}, {
    'id': 10,
    'region': 'Europe',
    'country': 'Germany',
    'city': 'Berlin',
    'amount': 4575,
    'date': '2013/01/11'
}, {
    'id': 11,
    'region': 'Europe',
    'country': 'Spain',
    'city': 'Madrid',
    'amount': 3680,
    'date': '2013/01/12'
}, {
    'id': 12,
    'region': 'Europe',
    'country': 'Russian Federation',
    'city': 'Moscow',
    'amount': 2260,
    'date': '2013/01/01'
}, {
    'id': 13,
    'region': 'Asia',
    'country': 'China',
    'city': 'Beijing',
    'amount': 2910,
    'date': '2013/01/26'
}, {
    'id': 14,
    'region': 'Asia',
    'country': 'Japan',
    'city': 'Tokyo',
    'amount': 8400,
    'date': '2013/01/05'
}, {
    'id': 15,
    'region': 'Asia',
    'country': 'Republic of Korea',
    'city': 'Seoul',
    'amount': 1325,
    'date': '2013/01/14'
}, {
    'id': 16,
    'region': 'Australia',
    'country': 'Australia',
    'city': 'Sydney',
    'amount': 3920,
    'date': '2013/01/05'
}, {
    'id': 17,
    'region': 'Australia',
    'country': 'Australia',
    'city': 'Melbourne',
    'amount': 2220,
    'date': '2013/01/15'
}, {
    'id': 18,
    'region': 'Africa',
    'country': 'South Africa',
    'city': 'Pretoria',
    'amount': 940,
    'date': '2013/01/01'
}, {
    'id': 19,
    'region': 'Africa',
    'country': 'Egypt',
    'city': 'Cairo',
    'amount': 1630,
    'date': '2013/01/10'
}, {
    'id': 20,
    'region': 'North America',
    'country': 'Canada',
    'city': 'Edmonton',
    'amount': 2910,
    'date': '2013/01/23'
}*/];

@Injectable()
export class AppService {
    getSales() {
        return sales;
    }
}
