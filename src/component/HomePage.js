import Header from "../Layout/Header"
import imagepic from './image/real-natures-food-IONRpiJcOJI-unsplash 1.png'
import homeimageone from './homeimage/amy-humphries-AllEP6K_TAg-unsplash 1.png'
import homeimagetwo from './homeimage/andy-bodemer-eXIIXFpf49k-unsplash 1.png'
import homeimagethree from './homeimage/Frame 6.png'
import homeimagefour from './homeimage/Frame 7.png'
import homeimagefive from './homeimage/Frame 8.png'
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, MapPin, Search } from "lucide-react";

function HomePage () {

    const contents = (
        <div>
            <h1 className="font-bold text-3xl text-center mt-3 mb-1">Pet Rental Hub</h1>
            <p className="text-center mb-3" style={{fontSize:"9px"}}>Pet Rental Hub is your go-to destination for renting pets for various needs.
            </p>
            <div className="bg-home h-14 rounded-lg w-8/12 mx-auto">
                <input type="text" placeholder="Location, Address" />
                <input type="date" placeholder="Location, Address" />
                <input type="date" placeholder="Location, Address" />
            </div>
            <img src={imagepic} className="w-10/12 mx-auto rounded-2xl isolate -translate-y-4"/>
            <p className="text-[#D2016A] mx-auto my-4 w-52 font-bold text-center py-2 bg-[#FFCCEA]">Deals by Pet Type</p>
            <div>
                <img src={homeimageone} alt="homeimage" className="ellipse-bg w-32 h-32 rounded-full"/>
            </div>
        </div>
    )

    const content = (

    <div className="bg-white p-4">
      {/* Search Section */}
      <div className="bg-pink-100 p-4 rounded-xl flex flex-wrap items-center justify-center gap-4 shadow-md">
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-64">
          <MapPin className="text-gray-500 mr-2" />
          <input type="text" placeholder="Location , Address" className="w-full outline-none" />
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-64">
          <Calendar className="text-gray-500 mr-2" />
          <input type="text" placeholder="Pick UP Date & Time" className="w-full outline-none" />
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-64">
          <Calendar className="text-gray-500 mr-2" />
          <input type="text" placeholder="Drop off Date & Time" className="w-full outline-none" />
        </div>
        <Button className="bg-pink-500 text-white px-6 py-2 rounded-lg flex items-center">
          <Search className="mr-2" /> Search
        </Button>
      </div>
      
      {/* Image Section */}
      <div className="mt-6 flex justify-center">
        <img src="/path-to-your-image.jpg" alt="Dogs on couch" className="rounded-lg shadow-lg" />
      </div>
      
      {/* Deals Section */}
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">Deals by Pet Type</h2>
        <div className="flex justify-center gap-6 mt-4">
          {[
            { name: "Dogs", img: "/dog.jpg", color: "bg-pink-500" },
            { name: "Cat", img: "/cat.jpg", color: "bg-teal-500" },
            { name: "Pet Accessories", img: "/accessories.jpg", color: "bg-pink-500" },
            { name: "Pet Beds", img: "/beds.jpg", color: "bg-teal-500" },
            { name: "Pet Clothes", img: "/clothes.jpg", color: "bg-pink-500" },
          ].map((item, index) => (
            <Card key={index} className="w-32 text-center p-2">
              <CardContent className="flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full border-2 border-white shadow-md" />
                <p className={`text-white font-semibold px-3 py-1 rounded-full mt-2 ${item.color}`}>{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

    )
    return (
        <div>
            <Header />
            {content}
        </div>
    )
}
export default HomePage