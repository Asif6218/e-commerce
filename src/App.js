
import "./styles.css";
import { Nav } from "./bandidos/pitspot";
import { useState } from "react";
// import Cat1 from "./bandidos/images/fluracent.png";
// import Cat2 from "./bandidos/images/lazerbw.png";
// import Cat3 from "./bandidos/images/SMX.png";
// import Cat4 from "./bandidos/images/airoh.png";
// import Cat5 from "./bandidos/images/agv.png";
// import Cat6 from "./bandidos/images/ski.png";
// import Cat7 from "./bandidos/images/foxplanej.png";
// import Cat8 from "./bandidos/images/dainesebj.png";
// import Cat9 from "./bandidos/images/daineseoj.png";
// import Cat10 from "./bandidos/images/astarrj.png";
// import Cat11 from "./bandidos/images/iconwj.png";
// import Cat12 from "./bandidos/images/ixonj.png";
// import Cat13 from "./bandidos/images/spiderg.png";
// import Cat14 from "./bandidos/images/shimag.png";
// import Cat15 from "./bandidos/images/secag.png";
// import Cat18 from "./bandidos/images/astarcfb.png";
// import Cat16 from "./bandidos/images/atechbb.png";
// import Cat17 from "./bandidos/images/foxb.png";
// import Cat19 from "./bandidos/images/atech.png";
// import Cat20 from "./bandidos/images/onealob.png";
// import Cat21 from "./bandidos/images/onealsb.png";
// import { Bar } from "./bandidos/bar";
// import { BrowserRouter, Route } from "react-router-dom";
// import { Cart } from "./bandidos/cart";

function App() {
 
     

  const [min, max] = useState(0);

  function cart() {
    max(min + 1);

  }
  return (
    <div className="App">
      <div className="bar">
        <span className="brand">Rustless</span>
        <span className="name">pitspot</span>
        <span className="end">Cart</span>
        <span className="cart">{min}</span>
      </div>
      {/* <BrowserRouter>
        <Bar />
        <Route path="/" exact />
        <Route path="/Cart" component={Cart} exact />
      </BrowserRouter> */}
      <div className="pro">
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/0WNe-584572b73c753c42fc819d2c.png" name="LAZER ADV" price="Rs.10000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/kL2p-pngegg+(6).png" name="AGV 46" price="Rs.25000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/vfXU-5845727e3c753c42fc819d29.png" name="LAZER WHIP" price="Rs.8000/-" cart={cart} />
      </div>

      <div className="pro">
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/iFeI-5845726e3c753c42fc819d28.png" name="LAZER SPLASH" price="Rs.8000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/S8-v-pngegg+(5).png" name="AIROH" price="Rs.12000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/YQ1A-pngegg+(36).png" name="SKEI" price="Rs.15000/-" cart={cart} />
      </div>

      <div className="pro">
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/q9Kc-pngegg+(24).png" name="FOX" price="Rs.9000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/shwM-pngegg+(21).png" name="DAINESE BLUE" price="Rs.45000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/2xqr-pngegg+(17).png" name="DAINESE RED" price="Rs.46000/-" cart={cart} />
      </div>

      <div className="pro">
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/Vm4A-pngegg+(38).png" name="ALPINESTAR" price="Rs.19000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/4EMT-pngegg+(20).png" name="ICON" price="Rs.12000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/Tmct-pngegg+(41).png" name="IXON" price="Rs.8000/-" cart={cart} />
      </div>

      <div className="pro">
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/sDXa-pngegg+(4).png" name="SPIRIT" price="Rs.2000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/6_kP-pngegg.png" name="SHIMA" price="Rs.4900/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/pILu-pngegg+(3).png" name="SECA" price="Rs.3500/-" cart={cart} />
      </div>

      <div className="pro">
        <Nav
          src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/8FVR-pngegg+(12).png"
          name="ALPINESTAR TECH"
          price="Rs.25000/-"
          cart={cart}
        />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/iyg7-pngegg+(11).png" name="FOX FULL" price="Rs.29000/-" cart={cart} />
        <Nav
          src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/iUpr-pngegg+(7).png"
          name="ALPINESTAR S-TECH"
          price="Rs.45000/-"
          cart={cart}
        />
      </div>

      <div className="pro">
        <Nav
          src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/7BZ2-pngegg+(10).png"
          name="ALPINESTAR W-TECH "
          price="Rs.25000/-"
          cart={cart}
        />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/jsPX-pngegg+(15).png" name="ONEAL FULL" price="Rs.20000/-" cart={cart} />
        <Nav src="https://uploads.codesandbox.io/uploads/user/fd66c849-0eb3-4db5-a6e2-ad9021d616b5/Qj25-pngegg+(13).png" name="ONEAL HALF" price="Rs.8000/-" cart={cart} />
      </div>

      <div className="pro">
        <Nav
          src={
            "https://png.pngitem.com/pimgs/s/478-4788479_tyre-png-image-background-diablo-pirelli-tires-transparent.png"
          }
          name="PICER POWER"
          price="Rs.15000/-"
          cart={cart}
        />
        <Nav
          src={
            "https://png.pngitem.com/pimgs/s/478-4788557_michelin-anakee-wild-hd-png-download.png"
          }
          name="MICHELENE"
          price="Rs.2500/-"
          cart={cart}
        />
        <Nav
          src={
            "https://png.pngitem.com/pimgs/s/174-1749797_michelin-road-4-trail-hd-png-download.png"
          }
          name="DUNLOP SPORT"
          price="Rs.5000/-"
          cart={cart}
        />
      </div>
    </div>
  );
}


export default App;
