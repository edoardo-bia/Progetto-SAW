import React, { useEffect, useState } from "react";

const NotificationComponent = () => {
  
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!showNotification) {
      if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
          var notification = new Notification("Welcome 👋", {
              lang: "en",
              body: "Welcome on my site",
              icon: "./src/assets/profile.png"
          })
          setShowNotification(true);
      } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                  const notification = new Notification("Welcome 👋", {
                    lang: "en",
                    body: "Welcome on my site 2",
                    icon: "./src/assets/profile.png"
                  })
                  setShowNotification(true);
              }

          });
      }
    }
}, [showNotification]);


  const triggerNotification = () => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Ciao", {
        body: "Hai cliccato il bottone",
        icon: "../assets/profile.png"
      });

      notification.onclick = () => {
        window.focus();
      };
    }
  };

  return (
    <div>
      <button onClick={triggerNotification}>Mostra Notifica</button>
    </div>
  );
};

export default NotificationComponent;
