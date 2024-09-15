import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { fetchContacts } from '../utility/api';
import ContactListItem from '../components/ContactListItem';

const Contacts = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts().then(data => setContacts(data));
  }, []);

  const renderContact = ({ item }) => (
    <ContactListItem
      name={`${item.name.first} ${item.name.last}`}
      avatar={item.picture.thumbnail}
      phone={item.phone}
      onPress={() => navigation.navigate('Profile', { contact: item })}
    />
  );

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={item => item.phone}
      />
    </View>
  );
};

export default Contacts;
