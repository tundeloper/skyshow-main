import React, { useState, useEffect } from "react";
import { StatusBar, Image, View } from "react-native";

const SplashScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate some loading action
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Set the time according to your needs
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar style="light" />
            {loading ? (
                // Display a loading animation if needed
                <View>
                    {/* Your loading animation component */}
                </View>
            ) : (
                // Display splash image or logo
                <Image
                    source={require('../assets/splash.png')} // Replace with your image path
                    style={{ width: 200, height: 200 }} // Adjust the size
                />
            )}
        </View>
    );
};

export default SplashScreen;
