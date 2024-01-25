import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";

const CountdownApp = () => {
  const initialTime = 3600; // 1 hour in seconds
  const [countdown, setCountdown] = useState(initialTime);
  const [showAlert, setShowAlert] = useState(false);
  const timerIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const broadcastChannelRef = useRef(null);

  useEffect(() => {
    const storedCountdown = localStorage.getItem("countdown");
    if (storedCountdown) {
      setCountdown(parseInt(storedCountdown, 10));
    }
  }, []);

  const startCountdown = () => {
    clearInterval(timerIdRef.current); // Clear existing interval

    const newTimerId = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        localStorage.setItem("countdown", newCountdown.toString());
        broadcastChannelRef.current.postMessage({ countdown: newCountdown });

        if (newCountdown === 0 && !showAlert) {
          setShowAlert(true);
          localStorage.setItem("countdown", initialTime.toString());
          broadcastChannelRef.current.postMessage({ countdown: initialTime });
        }

        return newCountdown;
      });
    }, 1000);

    timerIdRef.current = newTimerId;
    startTimeRef.current = new Date().getTime(); // Store the timestamp when the countdown starts
  };

  useEffect(() => {
    if (countdown === 0) {
      setShowAlert(true);
      localStorage.setItem("countdown", initialTime.toString());
      broadcastChannelRef.current.postMessage({ countdown: initialTime });
      return; // No need to start a new interval if the countdown is already zero
    }

    startCountdown();

    return () => clearInterval(timerIdRef.current);
  }, [countdown, initialTime, showAlert]);

  const handleBeforeUnload = (event) => {
    const message =
      "Are you sure you want to leave? Your countdown progress will be lost.";
    event.returnValue = message; // Standard for most browsers
    return message; // For some older browsers
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Page is not visible, pause the countdown
      clearInterval(timerIdRef.current);
    } else {
      // Page is visible again, start a new interval
      startCountdown();
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initialize the broadcast channel
    broadcastChannelRef.current = new BroadcastChannel("countdownChannel");

    // Listen for messages from other tabs
    broadcastChannelRef.current.onmessage = (event) => {
      const receivedCountdown = event.data.countdown;
      setCountdown(receivedCountdown);
    };

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      // Close the broadcast channel on component unmount
      broadcastChannelRef.current.close();
    };
  }, []);

  const modalStyle = {
    zIndex: 100000, // Increase zIndex value
    padding: "20px",
    textAlign: "center",
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    fontWeight: "bold",
  };
  const pStyling = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <p>{`${Math.floor(countdown / 60)}:${
        countdown % 60 < 10 ? "0" : ""
      }${countdown % 60}`}</p>

      <Modal
        isOpen={showAlert}
        onRequestClose={handleCloseAlert}
        contentLabel="Alert"
        shouldCloseOnOverlayClick={false} // Prevent closing on overlay click
        style={{
          overlay: {
            zIndex: 100000,
            backgroundColor: "rgba(255, 255, 255, 0.521)",
          },
        }} // Set zIndex for the overlay
      >
        <div style={modalStyle}>
          <p style={pStyling}>
            "Excellent! You have achieved your goal 🏆"
            <span
              className="lottieGif"
              style={{
                width: "200px",
                height: "200px",
              }}
            >
              <dotlottie-player
                src="https://lottie.host/4ab94da8-5121-44f7-a3e0-d9233699f892/9kQ2GDP2lG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </span>
            <span>"Rest up, we'll play soon!"</span>
            <span>Allah Hafiz❤️</span>
            <span>⭐⭐⭐⭐⭐</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default CountdownApp;
