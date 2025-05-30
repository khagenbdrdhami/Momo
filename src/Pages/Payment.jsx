import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const location = useLocation();
  const totalAmount = location.state.totalAmount;
  const transaction_uuid = uuidv4();

let Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
 var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">eSewa Payment</h2>

       
        <div className="flex justify-between items-center">
          <label htmlFor="amount" className="text-gray-700 font-medium">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={totalAmount}
            required
            readOnly
            className="ml-2 flex-1 px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="tax_amount" className="text-gray-700 font-medium">Tax Amount:</label>
          <input
            type="text"
            id="tax_amount"
            name="tax_amount"
            value="0"
            required
            readOnly
            className="ml-2 flex-1 px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>

        
        <div className="flex justify-between items-center">
          <label htmlFor="product_service_charge" className="text-gray-700 font-medium">Service Charge:</label>
          <input
            type="text"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
            readOnly
            className="ml-2 flex-1 px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="product_delivery_charge" className="text-gray-700 font-medium">Delivery Charge:</label>
          <input
            type="text"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
            readOnly
            className="ml-2 flex-1 px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="total_amount" className="text-gray-700 font-medium">Total Amount:</label>
          <input
            type="text"
            id="total_amount"
            name="total_amount"
            value={totalAmount}
            required
            readOnly
            className="ml-2 flex-1 px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>


      
        <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
        <input type="hidden" name="product_code" value="EPAYTEST" />
        <input type="hidden" name="success_url" value="http://localhost:5173/sucess" />
        <input type="hidden" name="failure_url" value="http://localhost:5173/failure" />
        <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" />
        <input type="hidden" name="signature" value={signature} />

        <input
          value="Pay with eSewa"
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
        />
      </form>
    </div>
  );
}

export default Payment;
