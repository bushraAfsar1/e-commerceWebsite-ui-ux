const ContactPage = () => {
    return (
        <div >
<div className='bgImg'></div>
      <h1 className='productH bg-text'>Contact</h1>  
          
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Get In Touch With Us</h1>
          <p className="text-gray-600">
            For More Information About Our Products & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-xl text-black">📍</span>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
  
            <div className="flex items-start gap-4">
              <span className="text-xl text-black">📞</span>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>Mobile: (+84) 546-6789</p>
                <p>Hotline: (+84) 456-6789</p>
              </div>
            </div>
  
            <div className="flex items-start gap-4">
              <span className="text-xl text-black">⏰</span>
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p>Monday–Friday: 9:00 - 22:00</p>
                <p>Saturday–Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="flex-1 bg-white p-6 rounded shadow">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject (Optional)"
                className="border p-2 rounded w-full"
              />
              <textarea
                placeholder="Message"
                className="border p-2 rounded w-full"
                rows={4}
              />
              <button
                type="submit"
                className="bg-yellow-600 text-white w-full py-2 rounded hover:bg-yellow-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default ContactPage;
  