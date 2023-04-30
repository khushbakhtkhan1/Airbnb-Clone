import React from "react";
import Navbar from "./components/Navbar";
import Gridd from "./components/Gridd";
import Cards from "./components/Cards";
import data from "./data";

const App=()=>{
    const cards=data.map(item=>{
        return(
            <Cards
                key={item.id} 
                img={item.img}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <Gridd />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}
export default App;