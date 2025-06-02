import React from 'react';

export default function PaymentMethods() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          We Accept Secure Payments
        </h2>
        <p className="text-gray-600 mb-8">
          Pay conveniently using your preferred method.
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div className="flex flex-col items-center">
            <img src="assets/mpesaLogo.png" alt="M-Pesa" className="h-12" />
            <span className="mt-2 text-sm text-gray-600">M-Pesa</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="" alt="Visa" className="h-12" />
            <span className="mt-2 text-sm text-gray-600">Visa</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="" alt="PesaPal" className="h-12" />
            <span className="mt-2 text-sm text-gray-600">PesaPal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
