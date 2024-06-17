import React from "react";
import { IconHeartCheck } from "@tabler/icons-react";
import Link from "next/link";

const PaymentStatus = ({ paymentSuccess }) => (
  <div className="h-full flex flex-col justify-between">
    <div className="flex flex-col justify-evenly flex-grow">
      <div className="place-self-center flex flex-col gap-4 items-center text-center">
        {paymentSuccess ? (
          <>
            <IconHeartCheck color="#BBEE68" className="animate-bounce" size={64} alt="heart icon checkmark" />
            <h1 className="font-medium text-3xl">ORDER COMPLETE!</h1>
            <p className="text-lime-400 font-medium max-w-xs">Your order has been placed and you will receive a confirmation email shortly.</p>
            <Link href="/">
              <button className="text-m bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 px-12 max-w-s">RETURN HOME</button>
            </Link>
          </>
        ) : (
          <h1 className="text-rose-500">LOADING...</h1>
        )}
      </div>
    </div>
  </div>
);

export default PaymentStatus;
