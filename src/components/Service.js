import React from 'react';
import '../styles/basic.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

function Service() {
  return (
    <>
    <Navigation/>
    <div  className='center'>
      <h1>Services of Siremar</h1><br/>
      <div class='container'>
      <div class='row'>
        

            <div class="card card1 mb-4">
            <img src="https://www.usnews.com/dims4/USNEWS/55306c3/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F3a%2Fd6%2Faf2bf1544f7cb5c258ca5fd4ce46%2Fesperanza-at-night.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                    <h5 class="card-title h2">Book Services</h5>
                    <p class="card-text">Siremar is our overall winner for best travel deals because, in addition to great everyday low prices, they are an excellent resource for finding last-minute bargains at an even deeper discount, including cruises and bundles that include flights plus hotels and car rental.
Their site is easy to use and offers the most comprehensive way to search for any trip you are planning. Create an account and once logged in, you can save your search history to your “Scratch Pad” and get alerts for pricing updates on your desired itinerary. Then review your booked itineraries at any time which is extremely helpful no matter how often you travel.</p>
                    <a href="#" class="btn btn-primary">More Info</a>
            </div>
            </div>

            <div class="card card2 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlKthV490-SGXyyC8xDIlDHEG-kS7W0h4K7f2M5fOQG6d57S1j7QItYb1ebxTxM4RURY&usqp=CAU" class="card-img-top" alt="..."></img>
            <div class="card-body">
                    <h5 class="card-title h2">Book Events</h5>
                    <p class="card-text">Planning any event requires a lot of work, but it can be especially hectic around the holidays. There’s much to consider, and it’s easy to miss some key points in the process. To make things easier, we’ve put together a few tips to help you cover some commonly overlooked aspects of holiday party planning. If you remember to cover these during the planning stages, your party should be a rousing success on all fronts.</p>
                    <a href="#" class="btn btn-primary">More Info</a>
            </div>
            </div>

            <div class="card card3 mb-4">
            <img src="https://cdn2.hubspot.net/hub/491011/hubfs/s2_assets/images/CB-LS-Central-for-hotels-Property-Management-System-hotel-guest-lobby-reception-AdobeStock_280498965.jpg?length=2000&name=CB-LS-Central-for-hotels-Property-Management-System-hotel-guest-lobby-reception-AdobeStock_280498965.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                    <h5 class="card-title h2">View Business</h5>
                    <p class="card-text">Hotel Business means the hospitality and related business operations from time to time carried on at, within or from the Hotel during the Term of this Lease, including, without limitation, the rental or sale of rooms, suites and other accommodations for transient occupancy by Hotel guests, patrons and customers, the provision of meeting, conference, banquet and other facilities and services for use by Hotel guests, patrons and customers, the subleasing of retail, office, and other usable space in the Hotel for the provision of various business, retail, and personal services and concessions for the use and enjoyment of Hotel guests, patrons and customers, and the operation of all amenities available at or associated with the Hotel, including food and beverage facilities and services (including the sale and serving of alcoholic beverages at, within and from the Hotel, mini-bar, and room service), parking services, spa and health facilities, and any and all other features, services and amenities from time to time provided at or by the Hotel for the use or enjoyment of the Hotel guests, patrons and customers or the public at large.</p>
                    <a href="#" class="btn btn-primary">Contact Us</a>
            </div>
            </div>


      </div><br/>
      </div>
    </div>
    </>
  )
}

export default Service


// import React from 'react';
// import '../styles/basic.css';
// import {Link} from 'react-router-dom';
// import Navigation from './Navigation';

// function Service() {
//   return (
//     <>
//     <Navigation/>
//     <div  className='center'>
//       <h1>Services of Siremar</h1><br/>
//       <div class='container'>
//       <div class='row'>
//         <Link to='/register'><div class='column'><p>New Registeration for Residents of Margarita Island.</p></div></Link>
//         <div class='column'><p>Get your Benefits Details of Margarita Island.</p></div>
//         <div class='column'><p>Get School Details of Margarita Island.</p></div>
//       </div><br/>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Service
