# Privacy Dots App

The **Privacy Dots App** is a mobile application that enhances security and privacy by notifying users when motion is detected. It receives push notifications from a **Privacy Dots Node**, alerting users when motion is detected around their devices.<br>

(note: The app was initially developed locally by me, Diego Arreola, and later pushed to the Git repository, which is why there are no earlier commits reflecting its development process.)

## Features

- **Device Overview**: View and manage all your connected devices (Privacy Dots Nodes) from a central dashboard.
- **Recent Notifications**: Quickly access the most recent push notifications triggered by motion detection.
- **Notifications Page**: A dedicated section where you can view the entire history of notifications received, with timestamps and device information.

## How It Works

1. **Connect Nodes**: Each node represents a device that has a Privacy Dot sensor for motion detection.
2. **Push Notifications**: The app receives real-time push notifications when motion is detected by any of your connected nodes.
3. **Notification History**: The app logs all motion detection events, allowing you to review the history of notifications.

## Technologies Used

- **React Native**: Framework for building cross-platform mobile applications.
- **Expo Router**: For easy navigation and routing within the app.
- **Expo Go**: For fast testing and development without native build steps.
- **Expo Push Notifications**: For real-time notifications when motion is detected.
- **JavaScript**: Primary programming language for the app's logic and functionality.
