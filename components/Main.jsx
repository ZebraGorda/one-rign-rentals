
const Main = () => {
  return (
   
    <div className="content">
    <div className="container">
      <div className="row">



        <div className="main col-sm-8">
          <h1 className="section-title">Featured Properties</h1>

          <div className="grid-style1 clearfix">
            {/* Repeat the following block for each featured property */}
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h3>Luxury Apartment with great views</h3>
                  <span className="location">Upper East Side, New York</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$950</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li><i className="icon-bedrooms"></i> 4</li>
                <li><i className="icon-bathrooms"></i> 3</li>
              </ul>
            </div>
            {/* End of featured property block */}
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title">Popular Regions</h1>
              <div id="regions">
                {/* Repeat the following block for each popular region */}
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h3>Rhovanion</h3>
                  </a>
                </div>
                {/* End of popular region block */}
              </div>
            </div>
          </div>

          <h1 className="section-title">Recent Articles</h1>
          <div className="grid-style1">
            {/* Repeat the following block for each recent article */}
            <div className="item col-md-4">
              <div className="image">
                <a href="#">
                  <span className="btn btn-default"><i className="fa fa-file-o"></i> Read More</span>
                </a>
                <img src="http://placehold.it/766x515" alt="" />
              </div>
              <div className="tag"><i className="fa fa-file-text"></i></div>
              <div className="info-blog">
                <ul className="top-info">
                  <li><i className="fa fa-calendar"></i> July 30, 2014</li>
                  <li><i className="fa fa-comments-o"></i> 2</li>
                  <li><i className="fa fa-tags"></i> Properties, Prices, best deals</li>
                </ul>
                <h3>
                  <a href="#">How to get your dream property for the best price?</a>
                </h3>
                <p>Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.</p>
              </div>
            </div>
            {/* End of recent article block */}
          </div>

          <div className="center"><a href="#" className="btn btn-default-color">View All News</a></div>
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default Main
