import FeaturesSection from '../components/FeatureSection'
const CheckoutPage = () => {
  return (

    <div >
<div className='bgImg'></div>
      <h1 className='productH bg-text'>Check Out</h1>  
         
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-6 py-8">
      {/* Billing Details */}
      <div className="flex-1 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="India">Pakistan</option>
            <option value="India">USA</option>
            <option value="India">UK</option>
            <option value="India">UAE</option>
          </select>
          <input
            type="text"
            placeholder="Street Address"
            className="border p-2 rounded w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="border p-2 rounded"
            />
          </div>
        </form>
      </div>


      {/* Order Summary */}
      <div className="flex-1 bg-gray-50 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="border-b pb-2 mb-4">
          <p>Asgard Sofa x 1</p>
          <p className="text-right font-bold">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p className="text-yellow-600">Rs. 250,000.00</p>
        </div>

        {/* Payment Options */}
        <h3 className="text-lg font-bold mt-6">Payment Method</h3>
        <div className="space-y-2 mt-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="accent-black" />
            Direct Bank Transfer
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="accent-black" />
            Cash On Delivery
          </label>
        </div>

        {/* Place Order Button */}
        <button className="bg-black text-white w-full py-2 mt-6 rounded">
          Place Order
        </button>
      </div>
    </div>
    <FeaturesSection/>

    </div>
  );
};

export default CheckoutPage;
