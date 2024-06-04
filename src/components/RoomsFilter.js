import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

//get all unique values
const getUnique = (items, value ) => {
    return [...new Set(items.map(item => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        location,
        price,
        minPrice,
        maxPrice
    } = context;

    //get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index)=> (
    <option value={item} key={index}>
        {item}
        </option>
    ));
    //get unique location
      let people = getUnique(rooms, "location");
      people = people.map((item, index) => (
            <option value={item} key={index}>
                {item}
            </option>
        ));
    return (
        <section className="filter-container">
         <Title title="Search Rooms" />
         <form className="filter-form">
             {/*Select type */}
             <div className="form-group">
                 <label htmlFor="type">room type</label>
                 <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
             </div>
             {/* End Select type */}
               {/* guests  */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            onChange={handleChange}
            className="form-control"
            value={location}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ₦{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
     
      </form>
    </section>
  );
};

export default RoomsFilter;
