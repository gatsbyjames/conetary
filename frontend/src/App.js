import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";
import CartScreen from "./screens/mallScreens/CartScreen";
import PriceScreen from "./screens/coinScreens/PriceScreen";
import PriceDetailScreen from "./screens/coinScreens/PriceDetailScreen";
import ProductScreen from "./screens/mallScreens/ProductScreen";
import ProductEditScreen from "./screens/mallScreens/ProductEditScreen";
import ShippingScreen from "./screens/mallScreens/ShippingScreen";
import PaymentScreen from "./screens/mallScreens/PaymentScreen";
import ProductListScreen from "./screens/mallScreens/ProductListScreen";
import PlaceOrderScreen from "./screens/mallScreens/PlaceOrderScreen";
import OrderScreen from "./screens/mallScreens/OrderScreen";
import OrderListScreen from "./screens/mallScreens/OrderListScreen";
import MallScreen from "./screens/mallScreens/MallScreen";
import NewsScreen from "./screens/news/NewsScreen";

function App() {
  return (
    <HashRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/mall" element={<MallScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id/*" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            {/* 여기서 cart/* 도 되고 cart/:id/* 도 되는데 뭐가 맞는진 추후에 확인 가능할듯 */}
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/news" element={<NewsScreen />} />
            <Route path="/price" element={<PriceScreen />} />
            <Route path="/price/:id" element={<PriceDetailScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
