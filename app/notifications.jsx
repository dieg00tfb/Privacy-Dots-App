// Notification page to view all motion detected

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { ScrollView } from 'react-native';
import { useNotification } from './NotificationContext';


export default function PushNotification() {
  const { notifications } = useNotification();                                                 // Temperary Code

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ScrollView style={styles.scrollContainer}>
        {/* Notifications boxes that display title and content, (ex. Motion Detected, Location) */}
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <View key={index} style={styles.notificationContainer}>
              <Text style={styles.title}>{notification.request.content.title}</Text>
              <Text style={styles.content}>{notification.request.content.body}</Text>
            </View>
          ))
        ) : (
          // If there is no notifications it displays, No notifications yet
          <View style={styles.NoNotificationContainer}>
            <Text style={styles.NoNotificationText}>No notifications yet</Text>
            <Text>Waiting for notifications...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  scrollContainer: {
    width: '100%',
    marginTop: 20,
    padding: 20,
  },
  

  notificationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    height: 100,

  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
  },

  content: {
    textAlign: 'center',
    fontSize: 17,
  },

  NoNotificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },

  NoNotificationText: {
    textAlign: 'center', 
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  }
});
