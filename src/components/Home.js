import React from 'react';
import '../styles/basic.css';
import Navigation from './Navigation';

function Home() {
  return (
    <>
    <Navigation/>
    <div className='center'>
      

    <main role="main">

    <div class="jumbotron">
        <div class="container home_img mt-4">
          <h1 class="display-4 pt-4">Welcome to Siremar</h1>
          <p class='text-light'>With Siremar, The islander is equipped with a fully online community portal which will give them the ease of living in an isolated place like Margarita Island for all their living necessities like transportation, education, businesses.</p>
          <p><a class="btn btn-primary btn-lg mt-5" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>

<div class="album py-5">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src='https://media.nationalgeographic.org/assets/photos/000/268/26833.jpg' data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src='data:image/jpeg;base64,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' data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d609be3b-97e9-4aa0-a393-87018020eacb-f10-1589992779.jpg' data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </div>
      </div>





          <div class="container marketing mt-4">

            {/* <!-- Three columns of text below the carousel --> */}
            {/* <!-- /.row --> */}


            {/* <!-- START THE FEATURETTES --> */}

            <hr class="featurette-divider"></hr>

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src='https://ychef.files.bbci.co.uk/976x549/p0b9tbhc.jpg' data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
              </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div class="row featurette">
              <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div class="col-md-5 order-md-1">
                <img class="featurette-image img-fluid mx-auto" src='https://imageresizer.static9.net.au/R8dvtTyiSpA98lfwHFkTCGU6fck=/400x0/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F10%2F20%2F12%2F29%2FLACULAINTRO.jpg' data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
              </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src='https://cdn.cnn.com/cnnnext/dam/assets/201027043955-07-travel-bubble-fiji-private-jet-restricted-super-169.jpg' data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
              </div>
            </div>

            <hr class="featurette-divider"></hr>

            {/* <!-- /END THE FEATURETTES --> */}

          </div>
          {/* <!-- /.container --> */}



          {/* <!-- FOOTER --> */}
          <footer class="container">
            <p class="float-right"><a href="#">Back to top</a></p>
            <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
          </footer>
          </main>


    </div>
    </>
  )
}

export default Home