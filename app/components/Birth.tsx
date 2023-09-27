import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';

export const Birth = () => {

   const [inputValue, setInputValue] = useState("");
   const [suggest, setSuggest] = useState<string[]>([]);
   const [isFocused, setIsFocused] = useState(false);

   const citiesData = [
      'Paris, île-de-France, France, French Republic',
      'Marseille',
      'Lyon',
      'Toulouse',
    ];

   // Fonction de filtrage des suggestions en fonction de la saisie du user
   const filterCities = (text: string) => {
      setInputValue(text);
      const filteredCities = citiesData.filter((city) =>
         city.toLowerCase().includes(text.toLowerCase())
      );
      setSuggest(filteredCities);
   }

   const selectSuggestion = (selectedCity: string) => {
      setInputValue(selectedCity); 
      setSuggest([]); 
    };

    const onFocus = () => {
      setIsFocused(true);
    };
  
    const onBlur = () => {
      setIsFocused(false);
    };

   return (
      <View>
         <TextInput 
            value={inputValue}
            onChangeText={filterCities}
            onFocus={onFocus}
            onBlur={onBlur}
            style={[
               styles.input,
               { borderColor: isFocused ? "#885CC0" : "#2E2E2E" }
            ]}
         />
         {!!suggest.length && (
            <FlatList
               style={styles.suggestionList} 
               data={suggest}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => selectSuggestion(item)}>
                     <ListItem>
                           <ListItem.Title style={styles.suggestionText}>{item}</ListItem.Title>
                     </ListItem>
                  </TouchableOpacity>
               )}
            />
         )}
      </View>
   );
};


const styles = StyleSheet.create({
   input: {
      width: "100%",
      color: "white",
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor: "#1F1F1F",
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 12,
      caretColor: "white",
    },
    suggestionList: {
      backgroundColor: "lightgray",
      borderRadius: 10,
    },
    suggestionText: {
      padding: 1,
    }
}) 