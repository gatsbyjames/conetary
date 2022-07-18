import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { Theme, makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Tab, Tabs } from "@material-ui/core";

function PriceScreen() {
  const [cryptoList, setCryptoList] = useState();

  const [prices, setPrices] = useState([]);

  const bringData = async () => {
    const { data } = await axios.get(
      "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
    );

    setPrices(data.data);
    console.log(cryptoList);
  };

  useEffect(() => {
    bringData();
  }, [prices]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>코인</td>
            <td>가격</td>
            <td>슬러그</td>
          </tr>
        </thead>

        {prices.map((price) => (
          <tbody>
            <tr>
              <td>{price.symbol}</td>
              <td>{price.metrics.market_data.price_usd.toFixed(2)} USD</td>
              <td>{price.slug}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default PriceScreen;
