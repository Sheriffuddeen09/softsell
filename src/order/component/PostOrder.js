import './order.css'
import Icon from './product/cpu.png'
import apple from './product/apple-iphone-12.jpg'
import shoe from './product/SA.jpeg'
import shoea from './product/SC.jpg'
import shoeb from './product/SD.jpeg'
import blue from './product/bluetooth.jpg'
import dell from './product/dell.jpg'
//import jeana from './product/jeans3.jpg'
import sst from './product/iphone 13.jpg'

//import apples from './product/iphone 13.jpg'
import blues from './product/jeans2.png'
import dells from './product/watch.jpg'
import jeanas from './product/ring.jpg'
import ssts from './product/tele.webp'
export const orderlists = [
    {
        price: '5000',
        images: Icon,
        id: 1,
        quantity: 1,
        category:'iphone'

    },
    {
        price: '4000',
        images: apple,
        id: 2,
        quantity: 1,
        category:'shoe'
        
    },
    {
        price: '8000',
        images: blue,
        id: 3,
        quantity: 1,
        category:'watch'
    },
    {
        price: '200000',
        images: dell,
        id: 4,
        category:'iphone',
        quantity: 1
        
    },
    {
        price: '10000',
        images: sst,
        id: 5, 
        category:'electronic',
        quantity: 1
        
    }/*,
    {
        price: '1000',
        images: jeana,
        id: 6, 
        category:'jewelry',
        quantity: 1
        
    }
        */,
    {
        price: '15000',
        product: shoe,
        producta: shoea,
        productb: shoeb,
        id: 1,
        quantity: 1,
        category:'iphone'

    }
    /*,
    {
        price: '11000',
        product: apples,
        id: 2,
        quantity: 1,
        category:'shoe'
        
    },
    */,
    {
        price: '5500',
        product: blues,
        id: 3,
        quantity: 1,
        category:'watch'
    },
    {
        price: '250000',
        product: dells,
        id: 4,
        category:'iphone',
        quantity: 1
        
    },
    {
        price: '100000',
        product: ssts,
        id: 5, 
        category:'electronic',
        quantity: 1
        
    },
    {
        price: '15000',
        product: jeanas,
        id: 6, 
        category:'jewelry',
        quantity: 1
        
    }
]