/** This mock data similates the User object/data and all its properties
 * orders
 */
export const orderStatus = ["Accepted", "Picked up", "Delivered"];

export default {
  orders: [
    {
      orderNumber: 1,
      trackingID: 92019,
      address: {
        dropOff: [
          {
            phoneNumber: 9029839,
            address: "",
          },
        ],
        pickUp: [
          {
            phoneNumber: 9029839,
            address: "",
          },
        ],
      },
      status: orderStatus[1],
    },
  ],
};
