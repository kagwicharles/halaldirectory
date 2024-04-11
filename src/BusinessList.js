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

    // Call the fetchData function when the component mounts
    // fetcthRestaurants()
    //   .then(result => {
    //     // Update the state with the fetched data

    //     setData(result[0].restaurant);
    //     setIsLoading(false); // Set loading state to false
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.log(error);
    //     setError(error);
    //     setIsLoading(false); // Set loading state to false
    //   });

    setData([
      {
        "id": 1,
        "slug": "/yanggood",
        "date": "31 AUG 2022",
        "restaurantname": "양굳 (Yang Good)",
        "desc": "Mutton barbeque BBQ restaurant. Serves halal lamb and chicken. Card payments are accepted. Verified Halal restaurant. Pricing: Lamb rack per serving - 22,000won Marinated lamb per serving - 18,000won Skewered lamb per serving - 11,000won Per dish can reach 23,000won Chicken is around 13,000won",
        "location": "643-3 Yeoksam-dong, Gangnam-gu, Seoul, South Korea",
        "locationkr": "서울특별시 강남구 역삼동 643-3",
        "operatinghrs": [
          {
            "day": "Monday",
            "time": "4pm-11pm"
          },
          {
            "day": "Tuesday",
            "time": "4pm-11pm"
          },
          {
            "day": "Wednesday",
            "time": "4pm-11pm"
          },
          {
            "day": "Thursday",
            "time": "4pm-11pm"
          },
          {
            "day": "Friday",
            "time": "4pm-11pm"
          },
          {
            "day": "Saturday",
            "time": "4pm-11pm"
          }
        ],
        "contact": "Phone: +82 25677060",
        "deliveryoption": "No Delivery",
        "dine": "Dine in",
        "takeaway": "Takeaway",
        "rating": "4.6/5",
        "price": "Quite expensive",
        "main_image": "https://lh5.googleusercontent.com/p/AF1QipNezSht8rDOsFTsIMeC32_G5sH4M8bkvJkZ7qI5=w203-h152-k-no",
        "image_alt": "Yang Good Image",
        "gmap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120408.74846619842!2d126.85266130439919!3d37.529077353940515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3fe802ed7c9%3A0x290107784b5fd8d2!2z7JaR6rWtIChZYW5nIEdvb2Qp!5e0!3m2!1sen!2ssg!4v1661933152722!5m2!1sen!2ssg",
        "image_gallery": [
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/19/f6/ab/f5/caption.jpg"
          },
          {
            "img": "https://i.ytimg.com/vi/zvLDpKRPlnc/maxresdefault.jpg"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/12/48/7a/c2/caption.jpg"
          },
          {
            "img": "https://currypokerhankook.files.wordpress.com/2017/10/img_0787.jpg?w=584&h=465"
          },
          {
            "img": "https://i.ytimg.com/vi/mRVwi91wiT8/maxresdefault.jpg"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/12/7f/ed/c0/caption.jpg"
          },
          {
            "img": "https://media.safarway.com/content/4c8ac024-da6a-42a2-9b4d-631661dcbbf7_sm.jpg"
          }
        ]
      },
      {
        "id": 2,
        "slug": "/eidhalalkorean",
        "date": "31 AUG 2022",
        "restaurantname": "EID Halal Korean Food",
        "desc": "Sells Halal Korean cuisine in Seoul. Cost price for normal 1 set is 8,000-12,000won. Indonesian owner. For delivery, need to call and check with them first.",
        "location": "67 Usadan-ro 10-gil, Hannam-dong, Yongsan-gu, Seoul, South Korea",
        "locationkr": "서울특별시 용산구 한남동 우사단로10길 67",
        "operatinghrs": [
          {
            "day": "Monday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Tuesday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Wednesday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Thursday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Friday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Saturday",
            "time": "11:30am - 9pm"
          }
        ],
        "contact": "Phone: +82 70-8899-8210",
        "deliveryoption": "Delivery",
        "dine": "Dine in",
        "takeaway": "Takeaway",
        "rating": "4.5/5",
        "price": "Affordable",
        "main_image": "https://lh5.googleusercontent.com/p/AF1QipNNtcxLcKLtbr5luneCRnlBIxaeToDti1GgFftS=w408-h306-k-no",
        "image_alt": "EID Halal Korean Image",
        "gmap": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101222.75852268578!2d126.934499!3d37.5500875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3b50d6d456b%3A0xebf553fbb5b91fab!2zRUlEIEhhbGFsIEtvcmVhbiBGb29kICjYrdmE2Kcp!5e0!3m2!1sen!2ssg!4v1662979444768!5m2!1sen!2ssg",
        "image_gallery": [
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/09/b3/aa/b1/eid-halal-korean-food.jpg"
          },
          {
            "img": "https://d3hwaim9vs2gfj.cloudfront.net/2461-9114013798.jpg"
          },
          {
            "img": "https://minio.havehalalwilltravel.com/hhwt-upload/original_images/15012023105718_bulgogi-halal-beef-eid-korean-restaurant-itaewon-seoul.jpg"
          },
          {
            "img": "https://img.restaurantguru.com/rd6b-EID-Halal-Korean-Food-menu.jpg"
          },
          {
            "img": "https://d3faveac4f5evv.cloudfront.net/2461-5658600796.jpg"
          },
          {
            "img": "https://img.restaurantguru.com/rce8-EID-Halal-Korean-Food-meals-2022-10-3.jpg"
          },
          {
            "img": "https://i0.wp.com/theseoulstory.com/wp-content/uploads/2020/02/IMG_0214-scaled.jpg?fit=1200%2C800&ssl=1"
          },
          {
            "img": "https://cf.creatrip.com/original/blog/4976/eid_main0.jpg"
          },
          {
            "img": "https://1.bp.blogspot.com/-zshYiXdqvAw/W_lQrCiIl7I/AAAAAAAAQl0/UKZAgGobmZArsl5IKdtdW3-LjZKKqx7XACLcBGAs/s1600/eid%2Bhalal%2Bitaewon%2Bseoul.jpg"
          },
          {
            "img": "https://content.shopback.com/my/wp-content/uploads/2017/12/14105125/maji.jpg"
          }
        ]
      },
      {
        "id": 3,
        "slug": "/hajjkoreahalalfood",
        "date": "28 APR 2023",
        "restaurantname": "HAJJ Korea Halal Food",
        "desc": "You can find the best authentic korean halal food here in Seoul. Cost price for 1 person is 10,000won - 20,000won. Menu includes Tteokbokki, Seafood Pancake, Spicy Sauce Chicken/Squid/Octopus, there's also Pat Bingsu and Ice Cream, Teh Tarik, Tea, Coffee and many more.",
        "location": "South Korea, Seoul, Yongsan-gu, Hannam-dong Usadan-ro 10-gil, 39 1-cheung",
        "locationkr": "서울특별시 용산구 한남동 우사단로10길 39 1층",
        "operatinghrs": [
          {
            "day": "Monday",
            "time": "10am - 12am"
          },
          {
            "day": "Tuesday",
            "time": "10am - 12am"
          },
          {
            "day": "Wednesday",
            "time": "10am - 12am"
          },
          {
            "day": "Thursday",
            "time": "10am - 12am"
          },
          {
            "day": "Friday",
            "time": "10am - 12am"
          },
          {
            "day": "Saturday",
            "time": "10am - 12am"
          },
          {
            "day": "Sunday",
            "time": "10am - 12am"
          }
        ],
        "contact": "Phone: +82 70-7807-5185",
        "deliveryoption": "No Delivery",
        "dine": "Dine in",
        "takeaway": "Takeaway",
        "rating": "4.5/5",
        "price": "Quite expensive",
        "main_image": "https://lh3.googleusercontent.com/p/AF1QipNH4HXuayqSQ3TmSXkncVhLRKpJtMeXgSeDzBoS=s1360-w1360-h1020",
        "image_alt": "HAJJ Korea Halal Image",
        "gmap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101245.56495879173!2d126.92794707565213!3d37.53329101817799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3b1a051255f%3A0x88712941038b7f91!2sHAJJkoreahalalfood!5e0!3m2!1sen!2ssg!4v1682669320854!5m2!1sen!2ssg",
        "image_gallery": [
          {
            "img": "https://lh3.googleusercontent.com/p/AF1QipNv3NibYpQW61-C9p58WFvaS5tgseiz9Mqy8wbZ=s1280-p-no-v1"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/f4/6d/77/hajj-korean-halal-restaurant.jpg"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/aa/3c/c3/bibimbap-with-friend.jpg"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/aa/3c/bf/bibimbap-hajj-korea-halal.jpg"
          },
          {
            "img": "https://fastly.4sqi.net/img/general/600x600/151975328_lmYQ4akZzfDuMhI7dBDqNOXYYqyKyoMh6PaEB6HrXJ0.jpg"
          },
          {
            "img": "https://i.ytimg.com/vi/T0RqIsiR60o/mqdefault.jpg"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-p/12/49/88/ff/this-is-best-seller-menu.jpg"
          }
        ]
      },
      {
        "id": 4,
        "slug": "/kampungkurestaurant",
        "date": "28 APR 2023",
        "restaurantname": "Kampungku Restaurant",
        "desc": "Sells Halal Indonesian/Malaysian/Korean cuisine in Seoul. Cost price for 1 person set is 7,000-12,000won. Worth for group portions. Menu includes Nasi Lemak, Nasi Goreng, Tomyam, Bulgogi, Budae Jiggae, Bibimbap and many more.",
        "location": "16-4 Namsan-dong 2(i)-ga, Jung-gu, Seoul, South Korea",
        "locationkr": "서울특별시 중구 16-4 남산동 2(이)가",
        "operatinghrs": [
          {
            "day": "Monday",
            "time": "11am - 9.30pm"
          },
          {
            "day": "Tuesday",
            "time": "11am - 9.30pm"
          },
          {
            "day": "Wednesday",
            "time": "11am - 9.30pm"
          },
          {
            "day": "Thursday",
            "time": "11am - 9.30pm"
          },
          {
            "day": "Friday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Saturday",
            "time": "11:30am - 9pm"
          },
          {
            "day": "Sunday",
            "time": "11:30am - 9pm"
          }
        ],
        "contact": "Phone: +82 2-310-9249",
        "deliveryoption": "No Delivery",
        "dine": "Dine in",
        "takeaway": "Takeaway",
        "rating": "4.4/5",
        "price": "Affordable",
        "main_image": "https://lh5.googleusercontent.com/p/AF1QipP-ReNeuYeeVvRLnPITdVzZPdjoDVmV-f9xLIt9=s447-k-no",
        "image_alt": "Kampungku Restaurant",
        "gmap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101210.65375936453!2d126.91598057642814!3d37.55899981323677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca336b5dfac7b%3A0x394e02932d97f58a!2sKampungku%20Restaurant!5e0!3m2!1sen!2ssg!4v1682671532650!5m2!1sen!2ssg",
        "image_gallery": [
          {
            "img": "https://d3hwaim9vs2gfj.cloudfront.net/16957-6420401362.jpg"
          },
          {
            "img": "https://d3hwaim9vs2gfj.cloudfront.net/16957-9090971727.jpg"
          },
          {
            "img": "https://3.bp.blogspot.com/-J4zUK0nAT2o/W4P371qJ3LI/AAAAAAAAwys/16KcmrH9w1o6t6hI7C_orU6-PDYyia4YwCEwYBhgL/s1600/DSC_0414.JPG"
          },
          {
            "img": "https://media-cdn.tripadvisor.com/media/photo-p/16/03/12/c7/photo1jpg.jpg"
          },
          {
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkIvegjN6Aif48u5U-vPRKxArMfphk9d5qA&usqp=CAU"
          },
          {
            "img": "https://img.restaurantguru.com/rbf8-Kampungku-Restaurant-meals-2022-10-11.jpg"
          },
          {
            "img": "https://minio.havehalalwilltravel.com/hhwt-upload/original_images/15012023215852_1567665818.jpg"
          },
          {
            "img": "https://thehalalfoodblog.com/wp-content/uploads/2019/09/Kampungku-17-Dolsot-Bibimbap-1024x683.jpg"
          },
          {
            "img": "https://img.restaurantguru.com/r12c-Kampungku-Restaurant-meals-2022-10-3.jpg"
          },
          {
            "img": "https://pbs.twimg.com/media/ENgyYxvUEAApgqK?format=jpg&name=900x900"
          },
          {
            "img": "https://lh5.googleusercontent.com/p/AF1QipNt-SRNRivuFQA5CVYIMzAyIYBBHEF9zJh1g-ag"
          }
        ]
      }
    ])
    setIsLoading(false);

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
