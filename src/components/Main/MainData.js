import React, { Component } from 'react'
const arr = [
    // {
    //     id:0,
    //     icon1:require('../../components/Main/images/Oval.png').default,
    //     icon2:require('../../components/Main/images/Oval.png').default,
    //     icon3:require('../../components/Main/images/Oval.png').default,
    //     icon4:require('../../components/Main/images/Oval.png').default,
    //     icon5:require('../../components/Main/images/Oval.png').default,
    //     icon6:require('../../components/Main/images/Oval.png').default,
    //     icon7:require('../../components/Main/images/Oval.png').default,
    //     icon8:require('../../components/Main/images/Oval.png').default,
    //     icon9:require('../../components/Main/images/Oval.png').default,
    //     icon10:require('../../components/Main/images/Oval.png').default,
    // },

    {
        id:1,
        icon1:"Lavash Mini",
        icon2:"Chizburger Max",
        icon3:"Lavash Max",
        icon4:"Lavash Pishloqli",
        icon5:"Burger Mini",
        icon6:"Lavash Mini",
        icon7:"Coca-Cola 1.5L",
        icon8:"Coca-Cola 1L",
        icon9:"Burger Mini",
        icon10:"Lavash Mini",
    },    



    { 
        id:2,
        icon1:"Lavash",
        icon2:"Burger",
        icon3:"Lavash",
        icon4:"Lavash",
        icon5:"Burger",        
        icon6:"Lavash",
        icon7:"Ichimliklar",
        icon8:"Ichimliklar",
        icon9:"Burger",
        icon10:"Lavash",
    }, 
        
        
        
      {  
        id:3,
        icon1:"18 000 UZS",
        icon2:"24 000 UZS",
        icon3:"23 000 UZS",
        icon4:"21 000 UZS",
        icon5:"17 000 UZS",
        icon6:"18 000 UZS",
        icon7:"11 000 UZS",
        icon8:"8 000 UZS",
        icon9:"16 000 UZS",
        icon10:"19 000 UZS",
    },    


    {
        id:4,
        icon1:"Kichkina lavash,bla bla",
        icon2:"Katta burger,bla bla",
        icon3:"Katta lavash,bla bla",
        icon4:"Kichkina lavash,bla bla",
        icon5:"Kichkina Burger,bla bla",
        icon6:"Kichkina lavash,bla bla",
        icon7:"Katta ichimlik,bla bla",
        icon8:"Kichik ichimlik,bla bla",
        icon9:"Kichkina Burger,bla bla",
        icon10:"Kichkina Lavash,bla bla",
    }, 
        
        
      {  
          id:5,
        icon1:require('../../components/Main/images/Path.svg').default,
        icon2:require('../../components/Main/images/Path.svg').default,
        icon3:require('../../components/Main/images/Path.svg').default,
        icon4:require('../../components/Main/images/Path.svg').default,
        icon5:require('../../components/Main/images/Path.svg').default,
        icon6:require('../../components/Main/images/Path.svg').default,
        icon7:require('../../components/Main/images/Path.svg').default,
        icon8:require('../../components/Main/images/Path.svg').default,
        icon9:require('../../components/Main/images/Path.svg').default,
        icon10:require('../../components/Main/images/Path.svg').default,
    },



{
        id:6,
        icon1:require('../../components/Main/images/delete.svg').default,
        icon2:require('../../components/Main/images/delete.svg').default,
        icon3:require('../../components/Main/images/delete.svg').default,
        icon4:require('../../components/Main/images/delete.svg').default,
        icon5:require('../../components/Main/images/delete.svg').default,
        icon6:require('../../components/Main/images/delete.svg').default,
        icon7:require('../../components/Main/images/delete.svg').default,
        icon8:require('../../components/Main/images/delete.svg').default,
        icon9:require('../../components/Main/images/delete.svg').default,
        icon10:require('../../components/Main/images/delete.svg').default,

    },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Chizburger Max",
    //     kategoriya:"Burger",
    //     narx:"24 000 UZS",
    //     qoshimcha:"Katta burger,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Lavash Max",
    //     kategoriya:"Lavash",
    //     narx:"23 000 UZS",
    //     qoshimcha:"Katta lavash,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Lavash Pishloqli",
    //     kategoriya:"Lavash",
    //     narx:"21 000 UZS",
    //     qoshimcha:"Kichkina lavash,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Burger Mini",
    //     kategoriya:"Burger",
    //     narx:"17 000 UZS",
    //     qoshimcha:"Kichkina Burger,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Lavash Mini",
    //     kategoriya:"Lavash",
    //     narx:"18 000 UZS",
    //     qoshimcha:"Kichkina lavash,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Coca-Cola 1.5L",
    //     kategoriya:"Ichimliklar",
    //     narx:"11 000 UZS",
    //     qoshimcha:"Katta ichimlik,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Coca-Cola 1L",
    //     kategoriya:"Ichimlik",
    //     narx:"8 000 UZS",
    //     qoshimcha:"Kichkina ichimlik,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Burger Mini",
    //     kategoriya:"Burger",
    //     narx:"16 000 UZS",
    //     qoshimcha:"Kichkina Burger,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },
    // {
    //     icon:require('../../components/Main/images/Oval.png').default,
    //     maxsulot:"Lavash Mini",
    //     kategoriya:"Lavash",
    //     narx:"18 000 UZS",
    //     qoshimcha:"Kichkina lavash,bla bla",
    //     editimg:require('../../components/Main/images/Path.svg').default,
    //     deleteimg:require('../../components/Main/images/delete.svg').default
    // },

]
export default arr