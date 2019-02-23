import { AsyncStorage } from 'react-native';

export async function getItem(key) {
  try{
    const value = await AsyncStorage.getItem(key);
    const celebrities = JSON.parse(value);
    if (!celebrities) {
      celebrities = [];
    }
    return celebrities;
  } catch (error) {
    console.log(error);
  }
}

export async function addPerson(newPersonInfo) {
  const existingPeople = await AsyncStorage.getItem('celebrities');
  let newPerson = JSON.parse(existingPeople);
  if (!newPerson) {
    newPerson = [];
  }
  console.log(newPerson);
  newPerson.push(newPersonInfo);
  try {
    await AsyncStorage.setItem('celebrities', JSON.stringify(newPerson));
    console.log('SUCCESS!!!');
  } catch (error) {
    console.log(error);
  }
}