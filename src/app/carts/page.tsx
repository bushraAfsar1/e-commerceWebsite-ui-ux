

import Link from 'next/link';
import FeaturesSection from '../components/FeatureSection'
import React from "react";

const CartPage = () => {
  return (
    <div>
    <div className='bgImg'></div>
    <h1 className='productH bg-text'>Carts</h1> 
    <div className="p-8 bg-gray-50 min-h-screen"> 
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="col-span-2 overflow-x-auto bg-white shadow-md rounded-md p-6">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-beige-100 text-gray-600 text-sm">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Quantity</th>
                <th className="py-4 px-6">Subtotal</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 flex items-center">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0U5L-4zeEY0jnX0F0nLAWM6pjc67qz~n3AO5ukq-JLKoPH12XjK~jGfN~yzwupPKqXMwpupS4VshzBr2ckyQnpWduC4Z56Co27wrrfbx0XvYT0x~td2jimu-J~yvVaOHd~nIIbl~W5r25LhjriPNtyhG-pTG3im7iz~ikhRQLYIafHyjC5ba7KQwKfUtlFVYjxqAgpdJYG1rc3DmJxpsosc9mmej384xipZYu4wYE6kTG2BAZejEHQNtj59S-4rUySR1jrcEeMQwhKSzo46j04iVCmmt6RH~01THcxzyTkxeSNku5JdIggOeG7K-wJZTIBUdhtiPCFoILoK2PcSgg__"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span className="text-sm text-gray-800">Hairy Sofa</span>
                </td>
                <td className="py-4 px-6 text-gray-700">Rs. 250,000.00</td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-12 border rounded-md px-2 py-1 text-center"
                  />
                </td>
                <td className="py-4 px-6 text-gray-700">Rs. 250,000.00</td>
                <td className="py-4 px-6 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-lg font-semibold mb-6">Cart Totals</h2>
          <div className="flex justify-between text-gray-600 mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-gray-800 font-semibold mb-6">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          <Link href="../billingAddress" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-light py-2 rounded-md"> Check Out</Link>
        </div>
      </div>
      <FeaturesSection/>
    </div>
    </div>
  );
};

export default CartPage;

    
  
  