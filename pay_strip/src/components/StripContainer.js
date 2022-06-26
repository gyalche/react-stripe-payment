import React from 'react'

import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

import PaymentForm from './PaymentForm'
const PUBLIC_KEY = "pk_test_51L7uoIAP4Z0j5tUWySicvE4Zsff9gTnNIitz1oHGABIq35I7uwtk2X12h89z0dZBLpSuB6xOBFqSWYwbHt7xsoSE00IpxwUrp0";

const promise=loadStripe(PUBLIC_KEY)
const StripContainer = () => {
  return (
    <Elements stripe={promise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripContainer