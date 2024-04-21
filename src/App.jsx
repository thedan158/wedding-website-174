import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Bounce } from "react-toastify";

import headerImage from "./assets/images/bg1.jpg";
import banner from "./assets/images/bannerfinal.png";

import std from "./assets/images/save-the-date (1).png";
import invitation from "./assets/images/msg-removebg-preview.png";
import album from "./assets/images/camera.png";
import gift from "./assets/images/money-removebg-preview.png";
import qr1 from "./assets/images/qrDung.jpg";
import qr2 from "./assets/images/qrHuyen.jpg";
import backgroundMusic from "./assets/musics/music1 (2).mp3";
import date from "./assets/images/date.png";
import bride from "./assets/images/bride-japan-removebg-preview.png";
import groom from "./assets/images/broom-japan-removebg-preview.png";
import { firestore } from "../firebase";
import Slider from "react-slick";
import anh1 from "./assets/images/anh1.jpg";
import anh2 from "./assets/images/anh2.jpg";
import anh3 from "./assets/images/anh3.jpg";
import anh4 from "./assets/images/anh4.jpg";
import anh5 from "./assets/images/anh5.jpg";
import anh6 from "./assets/images/anh6.jpg";
import anh7 from "./assets/images/anh7.jpg";

import anh8 from "./assets/images/anh8.jpg";

import anh9 from "./assets/images/anh9.jpg";

import anh10 from "./assets/images/anh10.jpg";

import anh11 from "./assets/images/anh11.jpg";

import anh12 from "./assets/images/anh12.jpg";

import anh13 from "./assets/images/anh13.jpg";

import anh14 from "./assets/images/anh14.jpg";
import anh15 from "./assets/images/anh15.jpg";
import anh16 from "./assets/images/anh16.jpg";
import anh17 from "./assets/images/anh17.jpg";
import anh18 from "./assets/images/anh18.jpg";
import anh19 from "./assets/images/anh19.jpg";
import anh20 from "./assets/images/anh20.jpg";
import anh21 from "./assets/images/anh21.jpg";

import CountdownClock from "./Countdown";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import { Box, LinearProgress } from "@mui/material";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={anh1}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh2}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh3}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh4}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh5}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh6}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh7}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh8}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh9}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh10}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh11}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
      </Slider>
    </div>
  );
}
function SimpleSlider1() {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={anh12}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh13}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh14}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh15}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh16}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh17}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh18}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh19}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh20}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh21}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
      </Slider>
    </div>
  );
}

const ModernButton = () => {
  return (
    <button className="animated-button">
      <svg
        viewBox="0 0 24 24"
        className="arr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">Gửi lời chúc</span>
      <span className="circle"></span>
      <svg
        viewBox="0 0 24 24"
        className="arr-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
};
const ChatDiv = () => {
  const { handleSuccess } = useContext(AppContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loichucData, setLoichucData] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("loichuc1")
      .onSnapshot((snapshot) => {
        const loichucList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLoichucData(loichucList);
      });

    return () => unsubscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.trim() !== "" && message.trim() !== "") {
        await firestore.collection("loichuc1").add({
          name: name, // Replace with the name you want to add
          description: message, // Replace with the description you want to add
        });
        setName("");
        setMessage("");
        handleSuccess();
      }
    } catch (error) {
      console.error("Error sending document: ", error);
    }
  };

  return (
    <div id="loichuc" className="chat-container">
      <img src={invitation} width={100} height={100} />
      <h2 style={{ fontFamily: "Hirosaki", fontSize: 50 }}>Sổ Lưu Bút</h2>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Tên của bạn"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="form__label">
                Tên của bạn
              </label>
            </div>
          </div>
          <div>
            <div className="form__group">
              <textarea
                type="text"
                className="form__input"
                id="description"
                placeholder="Lời chúc"
                required=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor="description" className="form__label">
                Lời chúc
              </label>
            </div>
          </div>
          <div onClick={handleSubmit} className="button-wrapper">
            <ModernButton />{" "}
          </div>
        </div>
        <div className="card">
          {loichucData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#bfd4b6" : "transparent",
                padding: 10,
              }}
            >
              <h3 style={{ textAlign: "left" }}>{item.name}</h3>
              <h4 style={{ textAlign: "left" }}>{item.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const BankDiv = () => {
  return (
    <div id="mungcuoi" className="chat-container">
      <img src={gift} width={100} height={100} />
      <h2 style={{ fontFamily: "Hirosaki", fontSize: 50 }}>Gửi Quà Cưới</h2>
      <div className="card-wrapper">
        <div className="card">
          <img src={qr1} width={200} height={200} />
        </div>
        <div className="card">
          <img src={qr2} width={200} height={200} />
        </div>
      </div>
    </div>
  );
};
// function Countdown() {
//   const calculateTimeLeft = () => {
//     const eventDate = new Date("2024-05-04");
//     const currentDate = new Date();

//     const difference = eventDate.getTime() - currentDate.getTime();

//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const { days, hours, minutes, seconds } = timeLeft;

//   return (
//     <h3 className="countdown-text">
//       {" "}
//       {days} ngày {hours} giờ {minutes} phút {seconds} giây còn lại
//     </h3>
//   );
// }
export const AppContext = createContext();

function App() {
  const toastId = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [progress, setProgress] = useState(0);

  const toastPosition = isMobile ? "top-center" : "top-right";
  const [audioError, setAudioError] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true); // Track whether the audio is enabled or disabled
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let imagePaths = [];
    if (isMobile) {
      imagePaths = [
        anh1,
        anh2,
        anh3,
        anh4,
        anh5,
        anh6,
        anh7,
        anh8,
        anh9,
        anh10,
      ];
    } else {
      imagePaths = [
        anh1,
        anh2,
        anh3,
        anh4,
        anh5,
        anh6,
        anh7,
        anh8,
        anh9,
        anh10,
        anh11,
        anh12,
        anh13,
        anh14,
        anh15,
        anh16,
        anh17,
        anh18,
        anh19,
        anh20,
        anh21,
      ];
    }

    let loadedImagesCount = 0;

    const loadImage = (path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          loadedImagesCount++;
          const newProgress = (loadedImagesCount / imagePaths.length) * 100;
          setProgress(newProgress);
          if (loadedImagesCount === imagePaths.length) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = (error) => reject(error);
      });
    };

    const imageLoadPromises = imagePaths.map(loadImage);

    Promise.all(imageLoadPromises).catch((error) => {
      console.error("Error loading images:", error);
    });
  }, []);
  const audioRef = useRef(null);

  const handleAudioError = () => {
    setAudioError(true);
  };

  const handleAudioPlay = () => {
    setAudioPlayed(true);
  };
  const handleSuccess = () => {
    toast.dismiss();
    toastId.current = toast("🦄 Bạn đã gửi lời chúc thành công !", {
      position: toastPosition,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: {
        fontSize: 18,
        padding: 10,
      },
    });
  };
  const toggleAudio = () => {
    if (audioEnabled) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setAudioEnabled(!audioEnabled); // Toggle the audio enabled state
  };
  useEffect(() => {
    if (!audioPlayed && audioError) {
      setAudioError(false); // Reset the error state
    }
  }, [audioPlayed, audioError]);
  useEffect(() => {
    const parallax = document.getElementById("home-img-lg");
    const parallax1 = document.getElementById("parallax1");
    const parallax2 = document.getElementById("parallax2");

    const handleScroll = () => {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionX = offset * -0.3 - 100 + "px";

      let offset1 = window.pageYOffset - 3100;
      parallax1.style.backgroundPositionY = offset1 * 0.1 + "px";

      let offset2 = window.pageYOffset - 4800;
      parallax2.style.backgroundPositionY = offset2 * -0.1 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded]);

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, [imagesLoaded]);

  if (!imagesLoaded)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    );
  return (
    <AppContext.Provider value={{ handleSuccess }}>
      <div className="header">
        <img src={headerImage} alt="Your Image" className="header-image" />

        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="text">
            <li>
              <a href="#story">CẶP ĐÔI</a>
            </li>
            <li>
              <a href="#stay">SỰ KIỆN</a>
            </li>
            <li>
              <a href="#loichuc">LỜI CHÚC</a>
            </li>
            <li>
              <a href="#mungcuoi">MỪNG CƯỚI</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home">
        {isMobile ? (
          <div className="container-out">
            <div className="container-in">
              <img src={banner} alt="Your Image" className="header-image" />
            </div>
          </div>
        ) : (
          <div className="container-out" style={{ padding: 30 }}>
            <div className="container-in">
              <div
                className="image-container"
                style={{
                  height: "110vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={banner} alt="Your Image" className="header-image1" />
              </div>
            </div>
            <div className="home-img" id="home-img-lg"></div>
          </div>
        )}
      </div>

      {!isMobile ? <div className="home-img home-img-sm"></div> : null}
      <div className="timeline reveal">
        <div className="timeline-container">
          <div className="timeline-img"></div>
          <div className="timings">
            <img src={std} width={200} height={200} />
            <h2 style={{ color: "#FA7070" }}> Tiệc ăn hỏi</h2>
            <div className="text">
              10h30, thứ 7, ngày 27 tháng 4 năm 2024 <br />
              Thôn Trà Lý , Xã Tam Anh Bắc , Núi Thành , Quảng Nam
            </div>
            {/* {isMobile && (
              <div
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/18%C2%B011'43.8%22N+106%C2%B010'27.0%22E/@18.195507,106.1716031,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.195507!4d106.174178?entry=ttu"
                  )
                }
                className="text links"
              >
                GOOGLE MAPS
              </div>
            )} */}

            <h2 style={{ color: "#FA7070" }}>Lễ Thành Hôn</h2>
            <div className="text">
              10h, thứ 7, ngày 4 tháng 5 năm 2024 <br />
              Tư gia nhà trai, Quốc lộ 1A, Cẩm Sơn, Cẩm Xuyên, Hà Tĩnh <br />
            </div>
          </div>
        </div>
      </div>

      <div className="v-reposition-container">
        <div className="h-reposition-container">
          <div>
            <div className="reveal">
              <div className="timeline-container">
                <div className="timeline-img1"></div>
                <div className="timings">
                  <div className="image-container">
                    <img src={bride} width={100} />
                  </div>
                  <h2>Hồ Thị Nhật Huyền</h2>

                  <h2>12/10/1998</h2>
                </div>
              </div>

              <div className="timeline-container">
                <div className="timings">
                  <img src={groom} width={100} />
                  <h2>Thiều Đăng Dũng</h2>

                  <h2>06/02/1996</h2>
                </div>
                <div className="timeline-img2"></div>
              </div>
            </div>
          </div>

          <div className="gallery reveal">
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
          </div>

          <div className="quote reveal">
            <h1>
              “Thứ tuyệt vời nhất để giữ lấy trong cuộc sống là giữ lấy nhau.”.
            </h1>
            <div className="author text">Audrey Hepburn</div>
          </div>

          <div className="hands" id="parallax1"></div>

          <div id="stay">
            <h2 className="reveal">LỊCH TRÌNH</h2>
            <div className="stay-container reveal">
              <div className="stay-item">
                <h3>
                  01. <br />
                  HÔN LỄ TẠI NHÀ GÁI
                </h3>
                <div className="text">
                  Vào lúc 10:30 ngày 26/4/2024 (Nhằm ngày 19/3 năm Giáp Thìn){" "}
                  <br /> tại sân vận động xã Tam Anh Bắc <br />
                  Tam Anh Bắc , Núi Thành , Quảng Nam
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?q=15.5183463,108.5599010&entry=gps&lucs=,94216401,47071704,47069508,47084304,94208458,94208447&g_ep=CAISDTYuMTAyLjMuNDI5MjAYACDXggMqNiw5NDIxNjQwMSw0NzA3MTcwNCw0NzA2OTUwOCw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVk4%3D&g_st=ifm"
                    )
                  }
                  className="text links"
                >
                  GOOGLE MAPS
                </div>
              </div>
              <div className="stay-item">
                <h3>
                  02. <br />
                  TIỆC TRÀ TẠI NHÀ TRAI
                </h3>

                <div className="text">
                  19:00 thứ 6 ngày 03/05/2024 (Nhằm ngày 25/03 năm Giáp Thìn)
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?q=18.2197420,106.0797730&entry=gps&lucs=,94216395,47071704,47069508,94218635,47084304,94208458,94208447&g_ep=CAISDTYuMTExLjIuNTQ1MjAYACDXggMqPyw5NDIxNjM5NSw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODYzNSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVk4%3D&g_st=ifm"
                    )
                  }
                  className="text links"
                >
                  GOOGLE MAPS
                </div>
              </div>
              <div className="stay-item">
                <h3>
                  03. <br />
                  HÔN LỄ TẠI NHÀ TRAI
                </h3>
                <div className="text">
                  Rước dâu xuất phát tại nhà trai lúc 9:00 <br />
                </div>
                <div className="text">
                  Hôn lễ bắt đầu lúc 10:00 thứ 7 ngày 04/05/2024 (Nhằm ngày
                  26/03 năm Giáp Thìn)
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?q=18.2197420,106.0797730&entry=gps&lucs=,94216395,47071704,47069508,94218635,47084304,94208458,94208447&g_ep=CAISDTYuMTExLjIuNTQ1MjAYACDXggMqPyw5NDIxNjM5NSw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODYzNSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVk4%3D&g_st=ifm"
                    )
                  }
                  className="text links"
                >
                  GOOGLE MAPS
                </div>
              </div>
            </div>
          </div>

          <div id="registry">
            <div className="registry-container reveal">
              <img className="date-image" src={date} />
            </div>
            <div className="registry-img registry-img-lg" id="parallax2"></div>
          </div>
          <div className="registry-img registry-img-sm"></div>

          <ChatDiv />
          <BankDiv />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={album} width={100} height={100} />
            <h2 style={{ fontFamily: "Hirosaki", fontSize: 50 }}>
              Album Ảnh Cưới
            </h2>
          </div>

          <SimpleSlider />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={album} width={100} height={100} />
            <h2 style={{ fontFamily: "Hirosaki", fontSize: 50 }}>
              Album Ảnh Cưới Nhật Bản
            </h2>
          </div>

          <SimpleSlider1 />
          <div className="parting-message reveal">
            <h1>Hope to See You!</h1>
          </div>
          <>
            {!audioError && (
              <audio
                ref={audioRef}
                src={backgroundMusic}
                autoPlay={audioEnabled}
                loop
                onError={handleAudioError}
                onPlay={handleAudioPlay}
              />
            )}
            {audioError && (
              <p>There was an error playing the audio. Please try again.</p>
            )}

            {/* Floating button to toggle audio */}
            <button
              className="btn"
              onClick={toggleAudio}
              style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
              <i
                className={
                  audioEnabled
                    ? "fa-solid fa-volume-high"
                    : "fa-solid fa-volume-xmark"
                }
              ></i>
            </button>
          </>
          <CountdownClock />
          <footer>
            <div className="text">
              © 2024 for Dũng and Huyền. Made by{" "}
              <a
                href="https://www.facebook.com/people/Nguyen-The-Dan/pfbid0QhAmLYf4bL1RuovLcz4p8Y7rywbK9EGAxLPATiXWprVgWZ3SLG4b7VsqoLDXtmqul/"
                className="text"
              >
                @NTDAN
              </a>
            </div>
          </footer>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
