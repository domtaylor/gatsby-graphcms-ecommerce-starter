import React, { useContext, useEffect } from 'react';
import { useFormContext, ErrorMessage } from 'react-hook-form';
import { CardElement } from 'react-stripe-elements';

import LoadingSVG from '../../svg/loading.svg';

import CheckoutContext from '../../context/Checkout';

function PaymentForm() {
  const { errors, register, setValue } = useFormContext();
  const {
    error: checkoutError,
    processing: checkoutProcessing,
    success: checkoutSuccess,
  } = useContext(CheckoutContext);

  useEffect(() => {
    register(
      { name: 'stripe' },
      { required: 'Please provide payment details' }
    );
  }, [register]);

  const handleStripeChange = e => setValue('stripe', e);

  return (
    <div className="rounded-lg bg-white border-2 border-gainsboro p-3 md:p-6 my-3 md:my-6">
      <h3 className="text-slategray text-2xl md:text-4xl font-bold mb-6">
        Pay
      </h3>

      <div className="mb-3 md:mb-6">
        <p className="leading-relaxed text-slategray">
          <strong>This is a test checkout</strong>. You can simulate
          transactions using any valid expiry date, CVC code and{' '}
          <code className="text-black bg-gainsboro rounded-lg p-1">
            4242 4242 4242 4242
          </code>
          , or{' '}
          <code className="text-black bg-gainsboro rounded-lg p-1">
            4000 0000 0000 3220
          </code>{' '}
          if you want trigger 3D Secure 2 authentication.
        </p>
      </div>

      <div className="mb-3 md:mb-6">
        <CardElement
          className="appearance-none bg-white border-2 border-gainsboro px-4 py-3 pr-8 focus:outline-none focus:border-slategray focus:bg-white text-slategray focus:outline-none w-full rounded-lg"
          hidePostalCode={true}
          disabled={checkoutProcessing}
          onChange={handleStripeChange}
          onReady={el => setValue('cardElement', el)}
        />

        {errors.stripe && (
          <React.Fragment>
            <ErrorMessage
              as={<p className="mt-2 text-red text-sm" />}
              name="stripe"
              errors={errors}
            />
          </React.Fragment>
        )}
      </div>

      {checkoutError && <p className="text-red">{checkoutError}</p>}
      {checkoutProcessing && 'Please wait. Processing order.'}
      {checkoutSuccess && 'Order successfully received.'}
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="bg-primary rounded-lg text-white px-3 py-2 h-10 focus:outline-none font-bold"
          disabled={checkoutProcessing}
        >
          {checkoutProcessing ? <LoadingSVG /> : 'Pay for order'}
        </button>
      </div>
    </div>
  );
}

export default PaymentForm;