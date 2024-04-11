import React, { useState, useEffect } from 'react';
import { fetcthRestaurants } from './APIService.js'; import './BusinessList.css'; // Import CSS file for styling

const BusinessesList = ({ maxwidth, onSearch }) => {
  // Sample data for grid items
  const items = [
    {
      id: 1,
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
      name: 'Hotel 1'
    },
    {
      id: 2,
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
      name: 'Hotel 2'
    },
    {
      id: 2,
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
      name: 'Hotel 2'
    },
    // Add more items as needed
  ];
  const width = maxwidth;
  const [location, setLocation] = useState('');
  const [keywords, setKeywords] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedOption] = useState('');

  // Function to handle the change event of the dropdown
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };



  useEffect(() => {

    fetcthRestaurants()
      .then(result => {
        // Update the state with the fetched data

        setData(result[0].restaurant);
        setIsLoading(false); // Set loading state to false
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.log(error);
        setError(error);
        setIsLoading(false); // Set loading state to false
      });

  }, []); // Em

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, keywords });
  };

  if (isLoading) {
    return (
      <div >
        <br></br>
        <div className='loaderanim'></div>
      </div>
    );
  }


  const filteredData = data.filter(item =>
    item.restaurantname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const locationFilteredData = filteredData.filter(item =>
    item.location.toLowerCase().includes(selectedLocation.toLowerCase())
  );



  return (

    <div>

      <div className=''>
        <h1 className='header'>Find Halal Businesses and Restaurants</h1>
        <div class="searchcard" style={{ width: width }}>
      

            <input className='searchinput' type="text" placeholder="I'm Looking for..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />

            <select  className='searchinput' value={selectedLocation} onChange={handleSelectChange}>
              <option value="">Choose Location</option>
              <option value="Korea">Korea</option>
              <option value="Kenya">Kenya</option>
              <option value="UK">UK</option>
            </select>


   
        </div>
      </div>

      <br />
      <br />

      {locationFilteredData === null || locationFilteredData === undefined || locationFilteredData.length === 0 ?
        (<div>No Businesses Found!</div>) : (
          <div class="listing" style={{ width: width }}>

            {
              locationFilteredData.map(item => (
                <div key={item.id} className='listingitem'>
                  <img
                    src={item.main_image}
                    className="w-100 shadow-1-strong rounded mb-4 itemimage"
                    alt={item.restaurantname}
                  />
                  <br></br>
                  <p href='' className='title'>{item.restaurantname}</p>
                  <p>Contact: {item.contact}</p>
                </div>
              ))
            }
          </div>
        )
      }


    </div>

  );
};

export default BusinessesList;
