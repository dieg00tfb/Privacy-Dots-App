// NotificationContext.js
// Logic that allows push notification in the app
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';

const NotificationContext = createContext();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    requestPermissions(); // Request permissions for notifications

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));   // register and sets push token

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {   // listens for post requests from django server
      setNotifications(prevNotification => [...prevNotification, notification]);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => { // listener for when the user interacts with the notifications
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);  // remove listeners to prevent memory leaks
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []); 

  async function requestPermissions() {                             // function that requests permission for notifications
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        console.error('Notification permissions not granted');
      }
    }
  }

  // Prints Expo Push Token in console, 
  async function registerForPushNotificationsAsync() {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token); // Log the token
    return token;
  }

  // components to wrap content in any part of the app to access Notifications
  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
