import { Dimensions, StyleSheet } from "react-native";

// const mainBodyHeight = Dimensions.get('window').width > Dimensions.get('window').height ? 500 : 'auto';

const GlobalDesigns = StyleSheet.create({
    mainBody:{
     height: 500,
     backgroundColor: "#fff",
     padding: 15
    },
    textSlider:{
     fontSize: 17,
     marginLeft: 7,
     marginRight: 7,
     marginBottom: 0,
     color: "#000",
     textTransform: "none",
     textAlign: 'center',
     fontWeight: "bold",
    },
    blindsBody:{
     height: 900,
     backgroundColor: "#fff",
     paddingLeft: 0, paddingRight: 0,
    },
    regularText:{
      fontSize: 17,
      marginLeft: 7,
      marginRight: 7,
      color: "#000",
      textTransform: "none",
      textAlign: 'center'
    },
    headerTable:{
     flexDirection: 'row', 
     padding: 10, 
     borderBottomWidth: 0, 
     borderBottomColor: '#16001D',
     textAlign: "center",
    },
    headerDataTable:{
     flexDirection: 'row', 
     padding: 15, 
     borderBottomWidth: 0, 
     borderBottomColor: '#16001D'
    },
    rowEven:{
     backgroundColor: '#F2F8FF'
    },
    regularTextTable:{
     fontSize: 15,
     textAlign: 'left',
     flex: 1,
     fontWeight: 'bold',
     color: '#007AFC',
     padding: 10,
     paddingLeft: 5
    },
    regularTextTable2:{
     fontSize: 15,
     textAlign: 'center',
     flex: 1,
     fontWeight: 'bold',
     color: '#000',
     padding: 10
    },
    regularTextTable3:{
     fontSize: 15,
     textAlign: 'right',
     flex: 1,
     fontWeight: 'bold',
     color: '#000',
     padding: 10,
     paddingRight: 5
    },
    iconCover:{
     borderWidth: 3, 
     marginTop: -15, 
     borderRadius: 20, 
     backgroundColor:'white', 
     alignSelf: 'center', 
     padding: 15
    },
    head:{
     backgroundColor: 'white',
     padding: 30,
    },
    regularTextTitleHeader:{
     fontSize: 30,
     textAlign: 'center',
     fontWeight: 'bold',
     color:'black'
    },
    regularTextheader:{
     fontSize: 17,
     marginLeft: 7,
     marginRight: 7,
     color: "#000",
     textTransform: "none",
     textAlign: 'center',
     fontWeight: "bold"
    },
    basicTouchableOpacity:{
     margin: 5,
     borderRadius: 5,
     marginTop: 10,
     borderWidth: 1,
     padding: 15,
     paddingLeft: 15,
     paddingRight: 15,
     alignSelf: 'center',
     display: 'flex',
     flexDirection: 'row',
     backgroundColor: '#16001D'
    },
 
    iconHeaderOne:{
     borderRadius: 0,
     borderWidth: 1,
     padding: 15,
     paddingLeft: 15,
     paddingRight: 15,
     display: 'flex',
     flexDirection: 'row',
     backgroundColor: '#16001D'
    },
 
    icen:{
     alignSelf:'flex-start',
     paddingTop: 2,
     marginRight: 10
    },
    icenone:{
     alignSelf:'flex-start',
     marginRight: 10
    },
    touchabletextProperties:{
     fontSize: 17,
     textAlign:"center",
     color: "#fff",
     fontWeight:'bold'
    },
 
    tabletext1:{
     flex: 1, 
     textAlign: 'left', 
     color:'#007AFC',
     fontSize: 15
    },
    tabletext2:{
     flex: 1, 
     textAlign: 'center',
     fontSize: 15,
     color:'#000'
    },
    tabletext3:{
     flex: 1,  
     textAlign: 'right',
     fontSize: 15,
     color:'#000'
    },
 
})
 

export default GlobalDesigns;

 