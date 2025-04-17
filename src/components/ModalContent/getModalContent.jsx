import Delivery from "./Delivery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import React from "react";
export default function getModalContent(id, item){
   switch (id){
       case "delivery":
           return <Delivery setIdShowModal={item.setIdShowModal}/>;
       case "product_info":
           return <ProductInfo setIdShowModal={item.setIdShowModal}/>;
       default:
           return <div>some error occurred</div>
   }
}