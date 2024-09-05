import small1 from '../assets/slide1.png';

const HeroSection = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card w-100 h-100 border-0">
        <div className="row h-100">
          <div className="col-lg-6 d-flex align-items-center p-5">
            <div>
              <h1 className="display-4 font-weight-bold mb-4">
                Welcome to Our Modern Platform
              </h1>
              <p className="lead text-muted mb-4">
                Explore our features and enjoy a seamless experience with the best solutions tailored just for you.
              </p>
              <a href="#features" className="btn btn-primary btn-lg">
                Discover More
              </a>
            </div>
          </div>
          <div className="col-lg-6 h-100">
            <img 
              src={small1} 
              alt="Featured image" 
              className="img-fluid rounded h-100 w-100" 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
