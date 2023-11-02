"use client";
import React, { useState } from 'react';

const Search = () => {
  const [selectedBedroom, setSelectedBedroom] = useState('');
  const [selectedStay, setSelectedStay] = useState(''); // Initialize the state for the Stay selection

  const handleBedroomChange = (event) => {
    setSelectedBedroom(event.target.value);
  };

  const handleStayChange = (event) => {
    setSelectedStay(event.target.value);
  };

  const stayOptions = [
    { value: '', label: 'Stay...' },
    { value: '1', label: '1 Night' },
    { value: '2', label: '2 Nights' },
    // Add more options as needed
  ];

  return (
    <div id="home-advanced-search" className="open">
      <div id="opensearch"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                <div className="form-control-small">
                  <div className='input-group date chzn-container' data-datepicker>
                    <input
                      placeholder="Arrive on..."
                      type='text'
                      className="form-control"
                      data-date-format="DD/MM/YYYY"
                    />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>

                <div className="form-control-small">
                  <select
                    id="search_status"
                    name="search_status"
                    data-placeholder="Stay..."
                    value={selectedStay} // Set the value based on the state
                    onChange={handleStayChange} // Handle changes
                  >
                    {stayOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control-small">
                  <select
                    id="search_bedrooms"
                    name="search_bedrooms"
                    data-placeholder="Bedrooms"
                    value={selectedBedroom}
                    onChange={handleBedroomChange}
                  >
                    <option value="">Bedrooms</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5plus">5+</option>
                  </select>
                </div>
                <div className="form-control-large">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="City, State, Country, etc..."
                  />
                </div>
                <button type="submit" className="btn btn-fullcolor">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
