/**
 * Interface for Subscription
 * @interface Subscription Props for Subscription
 * @see Props
 * @see Subscriptions
 * @see SubscriptionsList
 * @see SubscriptionsListContainer
 * @property {number} orderId - The order id
 * @property {string} subscriptionName - The subscription name
 * @property {string} paymentCycle - The payment cycle
 * @property {string} status - The status
 * @property {string} subscriptionStartDate - The subscription start date
 * @property {string} subscriptionEndDate - The subscription end date
 * @property {string} trialSubscriptionEndDate - The trial subscription end date
 * @property {string} nextPaymentDueDate - The next payment due date
 * @property {string} nextPaymentAmount - The next payment amount
 * @property {string} emailAddress - The email address
 * @returns {void} - Nothing
 */
export default interface Subscription {
  orderId: number;
  subscriptionName: string;
  paymentCycle: string;
  status: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  trialSubscriptionEndDate: string;
  nextPaymentDueDate: string;
  nextPaymentAmount: string;
  emailAddress: string;
}
