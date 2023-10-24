import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CV() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Sohaib Hassan</Text>
                <Text style={styles.subheader}>Software Engineer</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Contact Information</Text>
                <Text style={styles.sectionText}>Email: sohiabhassan@gmail.com</Text>
                <Text style={styles.sectionText}>Phone: +92 317518032</Text>
                <Text style={styles.sectionText}>Address: Hazro , Attock</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Education</Text>
                <Text style={styles.sectionText}>Bachelors in Software Engineering</Text>
                <Text style={styles.sectionText}>
                    Comsats Institute of Information and Technology, Attock
                </Text>
                <Text style={styles.sectionText}>Graduated: Feb 2025</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Work Experience</Text>
                <Text style={styles.sectionText}>Backend Developer</Text>
                <Text style={styles.sectionText}>Xeven, Karachi</Text>
                <Text style={styles.sectionText}>Duration: July 2023 - Present</Text>
                <Text style={styles.sectionText}>Responsibilities:</Text>
                <Text style={styles.sectionText}>
                    Apis development and testing
                </Text>
                <Text style={styles.sectionText}>
                    Apps deployment
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Skills</Text>
                <Text style={styles.sectionText}>Programming Languages: JavaScript</Text>
                <Text style={styles.sectionText}>Frameworks: Node.js</Text>
                <Text style={styles.sectionText}>Other Skills: Management Skills</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000', // Dark background color
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E90FF', // Dodger Blue
    },
    subheader: {
        fontSize: 18,
        color: '#32CD32', // Lime Green
    },
    section: {
        backgroundColor: '#333', // Dark Gray
        padding: 15,
        marginBottom: 20,
        borderRadius: 15, // Rounder sections
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1E90FF', // Dodger Blue
    },
    sectionText: {
        color: '#ADD8E6', // Light Blue
    },
});

export default CV;