/* use client */
import React from "react";
import SubscriptionsTable from "../components/SubscriptionTable";
import Subscription from "../interfaces/Subscription";

/**
 * @class MySubscription Page - My Subscriptions Page
 * @description My Subscriptions Page shows the user's subscriptions
 * @param {void} void
 * @returns My Subscriptions Page with the user's subscriptions
 */
const MySubscription = () => {
  const subscriptions: Subscription[] = [
    {
      orderId: 1,
      subscriptionName: "Example Subscription 1",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "jkpordje@gmail.com",
    },
  ];

  return (
    <div className="subscription-page">
      <h1>My Subscriptions</h1>
      <SubscriptionsTable subscriptions={subscriptions} />
    </div>
  );
};

export default MySubscription;
