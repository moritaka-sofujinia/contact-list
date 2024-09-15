export const fetchContacts = () => {
    return fetch('https://randomuser.me/api/?results=100&seed=fullstackio')
      .then(response => response.json())
      .then(data => data.results);
  };
  