
// Test file for testing push notification



// import React, { useEffect, useState } from 'react';
// import { Text, View, Button } from 'react-native';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// export default function PushNotification() {
//   const [notification, setNotification] = useState(false);

//   useEffect(() => {
//     const notificationListener = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener);
//       Notifications.removeNotificationSubscription(responseListener);
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Waiting for notifications...</Text>
//       {notification && (
//         <View style={styles.notificationcontainer}>
//           <Text style={styles.title}>{notification.request.content.title}</Text>
//           <Text style={styles.content}>{notification.request.content.body}</Text>
//         </View>
//       )}
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   // maincontainer: {
//   //     flex: 1,

//   //     backgroundColor: 'white', // Light background for better visibility
//   //     padding: 20,
//   // },

//   notificationcontainer: {
//       justifyContent: 'center',
//       backgroundColor: 'lightgrey',
//       borderRadius: 20,
//       marginBottom: 20,
//       padding: 10, // Optional: Adjust padding for internal content
//       width: '100%', // Set a specific width
//       height: 100, // Set a specific height
//   },

//   title: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: '#333', // Dark text color for contrast
//       textAlign: 'center',
//       fontFamily: "Poppins-Black"
//   },

//   content: {
//       textAlign: 'center',
//       fontSize: 17,
//   },

//   // time: {
//   //     textAlign: 'center',
//   //     fontSize: 17,
//   // },  
// });
