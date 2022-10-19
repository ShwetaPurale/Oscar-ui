// import React from "react";

// import { Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/loadingPage/Navbar"
// function App() {
  // import { ThemeProvider } from "@material-ui/core";
//   return (
//     <Router>
//     <Routes>
//     <Route exact path='/' element={< Navbar />}></Route>

// </Routes>
// </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/main.css'
import FrantPage from "./components/loadingPage/FrantPage"
import Dashboard from "./components/loadingPage/Dashboard"
import ConnectWallet from './components/loadingPage/ConnectWallet';
import WalletSelectToken from './components/loadingPage/WalletSelectToken';
import EstimatedProfile from './components/loadingPage/EstimatedProfile';
import ChoosePlan from './components/loadingPage/ChoosePlan';
import CrossExchange from "./components/loadingPage/CrossExchange";
import CrossExchangeSecond from "./components/loadingPage/CrossExchangeSecond";
import BotSetting from "./components/loadingPage/BotSetting";
import '../src/main.css'
import '../src/theme.js'
import Transaction from './components/loadingPage/Transaction';


const App = () => (
  <>
    {/* <Router>   */}
      <Routes>
      {/* <Switch> */}
        <Route path="/" element={<FrantPage />}/>        
        <Route path="connect-wallet" element={<ConnectWallet />} />
        <Route path="wallet-select-token" element={<WalletSelectToken />} />
        <Route path="estimated-profile" element={<EstimatedProfile />} />       
        <Route path="cross-exchange" element={<CrossExchange />} />
        <Route path="cross-exchange-second" element={<CrossExchangeSecond />} />
        <Route path="bot-setting" element={<BotSetting />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="choose-plan" element={<ChoosePlan />} />
        {/* </Switch> */}
      </Routes>    
  {/* </Router>     */}

  </>
);
export default App;