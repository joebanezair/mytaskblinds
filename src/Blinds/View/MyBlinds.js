import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import GlobalDesigns from '../../Global/Design/GlobalDesigns';

const MyBlinds = (props) => {
  const [data, setData] = useState([
    { id: 1, level: 1, time: props.time + ':00', blinds: '1/2' },
  ]);

  const [currentLevel, setCurrentLevel] = useState(1);
  const timeMultiplier = props.time;

  useEffect(() => {
    const interval = setInterval(() => {
      const newLevel = currentLevel + 1;
      const newBlinds = `${Math.pow(2, newLevel - 1)}/${Math.pow(2, newLevel)}`;
      const newTime = `${newLevel * timeMultiplier}:00`;
      const newData = [
        ...data,
        { id: data.length + 1, level: newLevel, time: newTime, blinds: newBlinds },
      ];
      setData(newData);
      setCurrentLevel(newLevel);
    }, 
    props.time * 60000); //uncoment this for exact minutes
    // 1000); //comment this

    return () => clearInterval(interval);
  }, [data, currentLevel, props.time]);

  const renderItem = ({ item, index }) => {
    const rowStyle = index % 2 === 0 ? GlobalDesigns.rowEven : GlobalDesigns.rowOdd;
    return (
      <View style={[GlobalDesigns.headerDataTable, rowStyle]}>
        <Text style={GlobalDesigns.tabletext1}>{item.level}</Text>
        <Text style={GlobalDesigns.tabletext2}>{item.time}</Text>
        <Text style={GlobalDesigns.tabletext3}>{item.blinds}</Text>
      </View>
    );
  };

  const header = () => (
    <View style={GlobalDesigns.headerDataTable}>
      <Text style={GlobalDesigns.regularTextTable}>Level</Text>
      <Text style={GlobalDesigns.regularTextTable2}>{props.time} mins</Text>
      <Text style={GlobalDesigns.regularTextTable3}>Blinds</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={header}
    />
  );
};

export default MyBlinds;

 