import React, { useState, useEffect } from 'react';
import { View, Text, Slider, Alert, Button } from 'react-native';
import ViewMainPage from '../View/ViewMainPage';
import TouchableNavigators from '../../Navigators/Touchable Navigators/TouchableNavigators';
import jsontext from '../../Global/Texts/Global.json';
import GlobalDesigns from '../../Global/Design/GlobalDesigns';

const MainModel = (properties) => {
  const [duration, setDuration] = useState(3);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [timerActive, setTimerActive] = useState(false);

  const handleSliderChange = (value) => {
    setDuration(value);
    setTimeLeft(value * 60);
    setTimerActive(false); // Stop the timer when slider is changed
  };

  const handleStartTimer = () => {
    setTimerActive(true); // Start the timer when the button is pressed
  };

  useEffect(() => {
    let intervalId;
    if (timerActive) {
      intervalId = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === 0) {
            setTimerActive(false);
            clearInterval(intervalId);
            // Alert.alert("Timer finished!");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerActive]);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const time = `${duration} minutes ${formattedTime}`;

  const touchableProperties = {
    press: handleStartTimer,
    label: jsontext.onPressComponents.blinds,
    icon: 'account-cowboy-hat',
    color: '#fff'
  };

  // Expose timer state and control functions for external use
  const timerData = {
    formattedTime,
    duration,
    timeLeft,
    timerActive,
    handleSliderChange,
    handleStartTimer
  };

  return timerData;
}

export default MainModel;
