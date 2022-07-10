import axios from "axios";
import React, { useState } from "react";

function PriceDetailScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const { data } = axios.get(
    "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
  );

  console.log(data);

  return <div>{data}</div>;
}

export default PriceDetailScreen;
