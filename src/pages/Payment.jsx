// import React, { Component } from 'react'

// export default class Payment extends Component {
//     constructor(props) {
//         super(props);
      
//         const mpesa = new Mpesa({
//             consumerKey: process.env.API_CONSUMER_KEY,
//             consumerSecret: process.env.API_CONSUMER_SECRET,
//             environment: "sandbox"
//           });
//       }
      
//       handleSubmit = async (event) => {
//         event.preventDefault();
      
//         const { amount, phoneNumber, transactionId } = this.state;
//         const mpesa = new Mpesa({
//           consumerKey: process.env.API_CONSUMER_KEY,
//           consumerSecret: process.env.API_CONSUMER_SECRET,
//           environment: "sandbox"
//         });
      
//         try {
//             let headers = new Headers();
//             headers.append("Authorization", "Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==");
//             fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", { headers })
//               .then(response => response.text())
//               .then(result => console.log(result))
//               .catch(error => console.log(error));

//           const response = await axios.post(
//             "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
//             {
//               BusinessShortCode: "<your business short code>",
//               Password: "<your password>",
//               Timestamp: "<timestamp>",
//               TransactionType: "CustomerPayBillOnline",
//               Amount: amount,
//               PartyA: phoneNumber,
//               PartyB: "<your business short code>",
//               PhoneNumber: phoneNumber,
//               CallBackURL: "https://mwerothewebmaker.com/handler.php",
//               AccountReference: transactionId,
//               TransactionDesc: "Mpesa payment"
//             }
//           );
      
//           console.log(response);
//         } catch (error) {
//           console.error(error);
//           alert("Payment failed. Please try again.");
//         }
//       };
      
//       render() {
//         return (
//             <div name= "pay" className ='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
//           <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
//                 Amount
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="amount"
//                 type="number"
//                 placeholder="Enter amount"
//                 value={this.state.amount}
//                 onChange={event => this.setState({ amount: event.target.value })}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="phone_number">
//                 Phone Number
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="phone_number"
//                 type="tel"
//                 placeholder="Enter phone number"
//                 value={this.state.phoneNumber}
//                 onChange={event => this.setState({ phoneNumber: event.target.value })}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//                 Pay
//               </button>
//             </div>
//           </form>
//           </div>
//         )
//       }          
// }
