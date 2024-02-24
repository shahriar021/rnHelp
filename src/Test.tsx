import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Test = () => {
  //   const fixedWidth = 733;
  //   const fixedHeight = 1000;

  const fixedWidth = 333;
  const fixedHeight = 500;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: fixedWidth,
      height: fixedHeight,
      resizeMode: 'cover',
    },
  });

  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://pani.bwdb.gov.bd/web_content/images/bangladesh.png',
          }}
          style={styles.image}
        />
        <TouchableOpacity>
          <View>
            <Text>touch here..</Text>
            
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Test;
