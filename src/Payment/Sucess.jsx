import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Sucess() {
    const [search] = useSearchParams();
    const data = search.get("data");
    const info = JSON.parse(atob(data));

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md text-left space-y-4 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-orange-600">Payment is Successful</h1>
                <h1 className="text-lg"><span className="font-semibold">Status:</span> {info.status}</h1>
                <h1 className="text-lg"><span className="font-semibold">Transaction UUID:</span> {info.transaction_uuid}</h1>
                <h1 className="text-lg"><span className="font-semibold">Total Amount:</span> Rs.{info.total_amount}</h1>
            </div>
        </div>
    );
}

export default Sucess;
