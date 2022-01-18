import React from 'react'
import ImageOne from '../images/coffee-coding-syntax-unisex-crewneck-sweatshirt.jpg'
import ImageTwo from '../images/google.jpg'
import ImageThree from '../images/mohit.jpeg'
const Content = () => {
    return (
        <div >
            <div className="bg-white  border border-black-800 rounded-lg max-w-sm ">
    
        <img className="rounded-t-lg" src={ImageOne} alt=""/>
    
    <div className="p-5">
        <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
        </a>
       
        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
            Read more
        </a>
    </div>
</div>
        
        </div>
    )
}

export default Content
