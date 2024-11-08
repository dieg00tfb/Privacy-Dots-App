// Home page of the app

import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header.jsx';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotification } from '../../NotificationContext.jsx';
import { NotificationProvider } from '../../NotificationContext.jsx';

export default function Index() {
    const router = useRouter();
    const { notifications } = useNotification();

    return (
        <NotificationProvider>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.maincontainer}>

                    {/* Adds header to the homepage */}
                    <StatusBar barStyle="white" />
                    <Header title="Dots"/>

                    <View style={styles.mainscrollcontainer}>

                        {/* Devices section */}
                        <View style={styles.devices_box}>
                            <Text style={styles.devices}>Your Devices</Text>
                            <ScrollView contentContainerStyle={styles.devicescrollcontainer}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.devicetitle}>Dots 1</Text>
                                    <Text style={styles.deviceinfo}>Location: Office</Text>
                                    <Text style={styles.deviceconnectivity}></Text>
                                </View>
                            </ScrollView>
                        </View>
                        
                        {/* Notifications Section */}
                        <View style={styles.notificationbox}>
                            <Text style={styles.texts}>Recent Notifications</Text>
                            <ScrollView contentContainerStyle={styles.notificationscrollcontainer}>
                            {notifications.length > 0 ? (
                                notifications.slice(-4).map((notification, index) => (
                                    <View key={index} style={styles.notificationtextcontainer}>
                                        <View style={styles.notificationtextborder}>
                                            <Text style={styles.title}>{notification.request.content.title}</Text>
                                            <Text style={styles.content}>{notification.request.content.body}</Text>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                // Display No notificatins yet, if there is no notifications
                                <View style={styles.NoNotificationContainer}>
                                    <Text style={styles.NoNotificationText}>No notifications yet</Text>
                                    <Text>Waiting for notifications...</Text>
                                </View>
                            )}
                        </ScrollView>
                    </View>

                        {/* Add Devices Section, that was not used in the final product*/}
                        {/* <View style={styles.add_devices_box}>
                            <Text style={styles.add_devices_text}>Add Device</Text>
                            <TouchableOpacity onPress={() => router.push('/add_device')}>
                                <AntDesign name="pluscircleo" style={styles.add_device_icon} size={50} color='black'/>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </SafeAreaView>
        </NotificationProvider>
    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },
    
    mainscrollcontainer: {
        padding: 15,
        
    },

    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    titleContainer:{
        alignItems: 'center', // Center items vertically // Horizontal padding
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    deviceconnectivity: {
        fontSize: 16,
        color: 'green'
    },  

    notificationbox: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 20, // Adds spacing between sections
        height: 350,
        backgroundColor: 'lightgrey',
    },

    notificationtextborder: {
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    texts: {
        fontSize: 18,
        paddingBottom: 5,
        textAlign: 'center',
        fontFamily: "Poppins-Black",
        color: 'black'
    },

    notificationscrollcontainer: {
        borderRadius: 20,
        padding: 10,
        height: 300,
        backgroundColor: 'white',
    },


    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    content: {
        textAlign: 'center',
        marginTop: 5,
        color: 'black',
    },

    devicetitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },

    deviceinfo: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center'
    },

    devices_box: {
        borderRadius: 20,
        padding: 10,
        height: 170,
        backgroundColor: 'lightgrey',
        marginBottom: 40,
    },

    devicescrollcontainer: {
        borderRadius: 20,
        padding: 10,
        height: 300,
        backgroundColor: 'white',
    },

    devices: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: "Poppins-Black",
        color: 'black'
    },

    add_devices_box: {
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        height: 125,
        width: '50%',
        backgroundColor: 'lightgrey',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    add_devices_text: {
        textAlign: 'center',
        marginTop: 0,
        fontFamily: "Poppins-Black",
        color: 'black'
    },

    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,

    },

    add_device_icon: {
        alignItems: 'center',
        marginTop: 20,
    },

    NoNotificationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 600,
    },

    NoNotificationText: {
        textAlign: 'center', 
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
    }

});
