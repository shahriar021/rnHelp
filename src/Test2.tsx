// import React, {useState} from 'react';
// import {
//   View,
//   ImageBackground,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   Modal,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import Svg, {Circle} from 'react-native-svg';

// const Test2 = () => {
//   const fixedWidth = 333;
//   const fixedHeight = 500;

//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedPoint, setSelectedPoint] = useState('');

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     backgroundImage: {
//       width: fixedWidth,
//       height: fixedHeight,
//       resizeMode: 'cover',
//     },
//     svg: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: fixedWidth,
//       height: fixedHeight,
//     },
//     modalContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: 20,
//       borderRadius: 10,
//       elevation: 5,
//       display: 'flex',
//     },
//     modalText: {
//       fontSize: 16,
//     },
//   });

//   const handlePointPress = point => {
//     // Handle the press on a specific point
//     setModalVisible(true);
//     setSelectedPoint(point);
//     console.log('Point pressed:', point);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{
//           uri: 'https://pani.bwdb.gov.bd/web_content/images/bangladesh.png',
//         }}
//         style={styles.backgroundImage}>
//         {/* Your touchable points go here */}
//         <Svg style={styles.svg}>
//           {/* Example circles representing touchable points */}
//           <Circle
//             cx="10"
//             cy="50"
//             r="5"
//             fill="black"
//             onPress={() => handlePointPress('Point 0')}
//           />
//           <Circle
//             cx="100"
//             cy="200"
//             r="10"
//             fill="red"
//             onPress={() => handlePointPress('Point 1')}
//           />
//           <Circle
//             cx="315"
//             cy="400"
//             r="10"
//             fill="blue"
//             onPress={() => handlePointPress('Point 300')}
//           />
//           <Circle
//             cx="200"
//             cy="300"
//             r="10"
//             fill="blue"
//             onPress={() => handlePointPress('Point 3')}
//           />
//           <Circle
//             cx="100"
//             cy="300"
//             r="5"
//             fill="green"
//             onPress={() => handlePointPress('Point 4')}
//           />
//           {/* Add more circles or other shapes as needed */}
//         </Svg>
//       </ImageBackground>

//       <Modal
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={closeModal}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>{selectedPoint}</Text>
//             <TouchableOpacity onPress={closeModal}>
//               <Text style={{fontSize:20}}>X</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default Test2;

import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const Test2 = () => {
  const fixedWidth = 380;
  const fixedHeight = 700;

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    backgroundImage: {
      width: fixedWidth,
      height: fixedHeight,
      resizeMode: 'cover',
    },
    svg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: fixedWidth,
      height: fixedHeight,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      display: 'flex',
    },
    modalText: {
      fontSize: 16,
    },
  });

  const handlePointPress = point => {
    setModalVisible(true);
    setSelectedPoint(point);
    console.log('Point pressed:', point);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://pani.bwdb.gov.bd/web_content/images/bangladesh.png',
          }}
          style={styles.backgroundImage}>
          {/* Your touchable points go here */}
          <Svg style={styles.svg} key="Svg1">
            {/* Example circles representing touchable points */}
            <Circle
              cx="10"
              cy="50"
              r="5"
              fill="black"
              onPress={() => handlePointPress('Point 0')}
            />
            <Circle
              cx="100"
              cy="200"
              r="10"
              fill="red"
              onPress={() => handlePointPress('Point 1')}
            />
            <Circle
              cx="315"
              cy="400"
              r="10"
              fill="blue"
              onPress={() => handlePointPress('Point 300')}
            />
            <Circle
              cx="200"
              cy="300"
              r="10"
              fill="blue"
              onPress={() => handlePointPress('Point 3')}
            />
            <Circle
              cx="100"
              cy="300"
              r="5"
              fill="green"
              onPress={() => handlePointPress('Point 4')}
            />
            {/* Add more circles or other shapes as needed */}
          </Svg>
        </ImageBackground>

        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{selectedPoint}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={{fontSize: 20}}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Test2;
