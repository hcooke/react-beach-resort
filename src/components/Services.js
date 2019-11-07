import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
console.log("Services");

export default function Services(props) {
  const state={
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
      }
    ]
  };

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {state.services.map((item, index) => {
          return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
      </div>
    </section>
  );
}









// import React, { Component } from 'react';
// import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
// import Title from "./Title";
// console.log("Services");

// export default class Services extends Component {
//   state={
//     services: [
//       {
//         icon: <FaCocktail />,
//         title: "Free Cocktails",
//         info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
//       },
//       {
//         icon: <FaHiking />,
//         title: "Endless Hiking",
//         info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
//       },
//       {
//         icon: <FaShuttleVan />,
//         title: "Free shuttle",
//         info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
//       },
//       {
//         icon: <FaBeer />,
//         title: "Strongest Beer",
//         info: "Non proident sit dolor ipsum in ullamco aute consequat nostrud amet elit."
//       }
//     ]
//   };

//   render() {
//     return (
//       <section className="services">
//         <Title title="services" />
//         <div className="services-center">
//           {this.state.services.map((item, index) => {
//             return <article key={index} className="service">
//               <span>{item.icon}</span>
//               <h6>{item.title}</h6>
//               <p>{item.info}</p>
//             </article>
//           })}
//         </div>
//       </section>
//     );
//   }
// }
