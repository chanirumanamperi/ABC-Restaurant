const AboutUs = () => {
  return (
    <div className="container-fluid p-4">
      {/* Start page title */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <div style={{ paddingBottom: '20px', borderBottom: '2px solid #eee' }}>
            <h4 style={{ fontSize: '28px', fontWeight: '700' }}>About Us</h4>
            <div className="breadcrumb">
              <a href="javascript: void(0);" style={{ textDecoration: 'none', color: '#555' }}>ABC Restaurant</a> / <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
      {/* End page title */}

      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '600' }}>Our Story</h3>
            <p style={{ color: '#777', marginTop: '20px', lineHeight: '1.7' }}>
              Since 1996, ABC Restaurant has been serving the community with a passion for food and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="card border-0">
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row g-4">
                <div className="col-md-4">
                  <div 
                    style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}
                    className="hover-zoom"
                  >
                    <h4 style={{ fontSize: '20px', fontWeight: '600' }}>Our Founder</h4>
                    <p style={{ color: '#777', lineHeight: '1.6' }}>
                      Meet our founder, who has been instrumental in shaping the culinary journey of ABC Restaurant.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}
                    className="hover-zoom"
                  >
                    <h4 style={{ fontSize: '20px', fontWeight: '600' }}>Our Restaurant</h4>
                    <p style={{ color: '#777', lineHeight: '1.6' }}>
                      Our restaurant is designed to provide a warm and inviting atmosphere, perfect for a night out with family and friends.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}
                    className="hover-zoom"
                  >
                    <h4 style={{ fontSize: '20px', fontWeight: '600' }}>Our Cuisine</h4>
                    <p style={{ color: '#777', lineHeight: '1.6' }}>
                      We offer a diverse range of cuisines, from traditional favorites to international flavors, catering to all tastes and preferences.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}
                    className="hover-zoom"
                  >
                    <h4 style={{ fontSize: '20px', fontWeight: '600' }}>Our Services</h4>
                    <p style={{ color: '#777', lineHeight: '1.6' }}>
                      We provide a range of services, including catering, takeout, and delivery, to make your dining experience convenient and enjoyable.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}
                    className="hover-zoom"
                  >
                    <h4 style={{ fontSize: '20px', fontWeight: '600' }}>Our Mission</h4>
                    <p style={{ color: '#777', lineHeight: '1.6' }}>
                      Our mission is to provide exceptional food, outstanding service, and a memorable dining experience that exceeds our customers&apos; expectations.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', transition: 'transform 0.3s ease-in-out' }}
                    className="hover-zoom"
                  >
                    <h4 style={{ fontSize: '20px', fontWeight: '600' }}>Our Vision</h4>
                    <p style={{ color: '#777', lineHeight: '1.6' }}>
                      Our vision is to be the leading restaurant in the community, known for our commitment to quality, innovation, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the hover effect with a zoom-in transition
const style = document.createElement('style');
style.textContent = `
  .hover-zoom:hover {
    transform: scale(1.05);
  }
`;
document.head.appendChild(style);

export default AboutUs;
