const Footer = () => {
    return (
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Address Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Funiro.</h3>
              <p className="text-sm text-gray-600 mt-2">
                400 University Drive Suite 200 Coral Gables,
                <br /> FL 33134 USA
              </p>
            </div>
  
            {/* Links Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-800">Links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-800">Help</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-800">Newsletter</h4>
              <form className="mt-4">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-200 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            2023 Funiro. All rights reserved
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  