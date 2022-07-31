import React from 'react';
import Navigation from './Navigation';

function About() {
  return (
    <>
    <Navigation/>
    <div className='center'>
      <h1>About Us</h1><br/>
      <div class='container'>
      <div class='row'>

<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <p class="lead ">Siremar, a web application is created for the residents of the Island Margarita. We categorize our users in mainly three types. Below are their respective usage of this web applcation.</p>
      <p class="lead text-muted">Super Admin -For Super admin role, they can perform all functions of an Inspector and, they can see reports which is generated by Siremar.</p>
      <p class="lead text-muted">Inspector - For an inspector role, as a Siremar employee, they can register a resident in his office on the web application.</p>
      <p class="lead text-muted">Resident - For a role of resident, they are the person who were born and have been living for a year of the island Margarita. </p>
      
      <p>
        <a href="#" class="btn btn-primary my-2">More info</a>
      </p>
    </div>
  </section>


  <div class="row">
              <div class="col-lg-4">
                <img class="rounded-circle" src="https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846325.jpg" alt="Generic placeholder image" width="140" height="140"></img>
                <h2>Nitya</h2>
                <p>MS in Computer Science</p>
                <p>Email: nxk9794@mavs.uta.edu</p>
                <p>Contact : +1 234-567-8900</p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              {/* <!-- /.col-lg-4 --> */}
              <div class="col-lg-4">
                <img class="rounded-circle" src="https://cdn.dribbble.com/users/1283699/screenshots/11045473/media/8dabca42e36ed98ad08b657e90ab286f.png?compress=1&resize=400x300&vertical=top" alt="Generic placeholder image" width="140" height="140"></img>
                <h2>Priyal</h2>
                <p>MS in Computer Science</p>
                <p>Email: pxp6118@mavs.uta.edu</p>
                <p>Contact : +1 234-567-8900</p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              {/* <!-- /.col-lg-4 --> */}
              <div class="col-lg-4">
                <img class="rounded-circle" src="https://images.assetsdelivery.com/compings_v2/gmast3r/gmast3r1411/gmast3r141100350.jpg" alt="Generic placeholder image" width="140" height="140"></img>
                <h2>Prit</h2>
                <p>MS in Computer Science</p>
                <p>Email: psl3857@mavs.uta.edu</p>
                <p>Contact : +1 234-567-8900</p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              {/* <!-- /.col-lg-4 --> */}
            </div>
  

</main>
      </div><br/><br/>
    </div>
    </div>
    </>
  )
}

export default About