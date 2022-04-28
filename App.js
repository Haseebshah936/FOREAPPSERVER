import http from "http";
import { db } from "./firebase.js";
import schedule from "node-schedule";
import { collection, getDocs, query, where } from "firebase/firestore";
import axios from "axios";
import displayTime from "./DateAndTime/displayTime.js";
import displayDate from "./DateAndTime/displayDate.js";

const app = http.createServer((req, res) => {
  res.end("Hello");
});

const port = process.env.PORT || 5000;

// schedule.scheduleJob("*/1 * * * *", () => {
//   axios
//     .get("https://foreappserver.herokuapp.com/")
//     .catch((e) => console.error(e));
// });

// schedule.scheduleJob("*/1 * * * *", () => {
//   const today = new Date().getTime();
//   const milisecADay = 86400000;
//   const compingDate = new Date().getTime() + milisecADay * 2;
//   let temp1 = {};
//   getDocs(collection(db, "users")).then(async (querySnapshot) => {
//     querySnapshot.forEach((item) => {
//       temp1[item.data().email] = { ...item.data() };
//     });
//     const q = query(
//       collection(db, "competitions"),
//       where("date", "<", compingDate),
//       where("date", ">", today)
//     );
//     let message = [];
//     getDocs(q).then(async (snapshot) => {
//       snapshot.forEach((doc) => {
//         doc.data().flight.map((flight, i) => {
//           flight.participants.map((c) => {
//             let user = temp1[c.email];
//             if (user?.token)
//               // message.push({
//               //   to: user?.token,
//               //   sound: "default",
//               //   title: "Upcomming Event",
//               //   body: `You have participated in ${doc.data().title} in Flight ${
//               //     i + 1
//               //   } at ${displayTime(
//               //     doc.data().flight[i].teeTime
//               //   )} on ${displayDate(doc.data().date)} organizied by ${
//               //     doc.data().headName
//               //   }`,
//               // });
//               axios
//                 .post(
//                   "https://exp.host/--/api/v2/push/send",
//                   JSON.stringify({
//                     to: user?.token,
//                     sound: "default",
//                     title: "Upcomming Event",
//                     body: `You have participated in ${
//                       doc.data().title
//                     } in Flight ${i + 1} at ${displayTime(
//                       doc.data().flight[i].teeTime
//                     )} on ${displayDate(doc.data().date)} organizied by ${
//                       doc.data().headName
//                     }`,
//                   }),
//                   {
//                     headers: {
//                       Accept: "application/json",
//                       "Content-Type": "application/json",
//                     },
//                   }
//                 )
//                 .catch((e) => console.log(e));
//           });
//         });
//       });

//       // axios
//       //   .post("https://exp.host/--/api/v2/push/send", JSON.stringify(message), {
//       //     headers: {
//       //       Accept: "application/json",
//       //       "Content-Type": "application/json",
//       //     },
//       //   })
//       //   .catch((e) => console.log(e));
//     });
//   });
// });

app.listen(port, () => {
  console.log("Server is listning on ", port);
});
