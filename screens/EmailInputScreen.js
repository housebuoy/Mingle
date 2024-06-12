import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';

const EmailInputScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError(""); // Clear the error message if the email is valid
    return true;
  };

  const handleNameChange = (text) => {
    setNameValue(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleContinuePress = () => {
    // Simulate email verification process
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('HomeScreen');
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.inputTitle}>Let's register account</Text>
        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, color: "#8D8B8B", lineHeight: 25, }}>
          Kickstart your journey with mingle now!
        </Text>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', width: '100%', gap: 10, marginTop: 20, }}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Name
              </Text>
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                keyboardType="default"
                placeholder="Enter Full name"
                value={nameValue}
                onChangeText={setNameValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                User Name
              </Text>
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                keyboardType="name-phone-pad"
                placeholder="Enter User name"
                value={userName}
                onChangeText={setUserName}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Email Address
              </Text>
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                keyboardType="email-address"
                placeholder="Enter Email address"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  validateEmail(text); // Validate the email as the user types
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              
              {emailError && <Text style={{color: 'red'}}>{emailError}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                Password
              </Text>
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                keyboardType="visible-password"
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </View>
            <TouchableOpacity onPress={handleContinuePress} style={styles.button}>
                <Text style={styles.buttonText}>
                    Continue
                </Text>
            </TouchableOpacity>
            <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Check your email to verify and login</Text>
            </View>
          </View>
        </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default EmailInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
    paddingHorizontal: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 2,
  }, 
  inputTitle: {
    fontSize: 44,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 10,
    lineHeight: 60,
    textAlign: 'left',
    marginLeft: -40,

  },
  inputButton: {
    backgroundColor: '#E94057',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#4D4D4D',
    width: '100%',
    // paddingHorizontal:  20,
    paddingTop : 5,
},
  inputContainer:{
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal:  10,
    paddingVertical : 3
  },
  inputLabel: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#E94057',
  },
  button: {
    backgroundColor: '#E94057',
    marginVertical: 10,
    paddingHorizontal: 110,
    paddingVertical: 18,
    borderRadius: 10,
  },

  buttonText: {
    backgroundColor: '#E94057',
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  inputFocused: {
    borderColor: '#ff0707',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

})
