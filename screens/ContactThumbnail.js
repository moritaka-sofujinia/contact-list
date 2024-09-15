import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = {
    color: textColor,
  };

  const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image 
          source={{ uri: avatar }} 
          style={styles.avatar} 
        />
      </ImageComponent>

      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  avatar: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default ContactThumbnail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  phone: {
    marginLeft: 5,
    fontSize: 16,
  },
});
