import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MultiSelect from "react-native-multiple-select";
import DropDownPicker from "react-native-dropdown-picker";
import { Controller } from "react-hook-form";
import { Feather } from '@expo/vector-icons'; // For icons

// Define the type for each dropdown item
type DropdownItem = {
  id: number;
  value: string;
  name: string;
};

// Define the props for the Dropdown component
interface DropdownProps {
  control: any; // Control from react-hook-form
  name: string; // The name of the field in react-hook-form
  items: DropdownItem[]; // Array of items for the dropdown
  isMultiSelect?: boolean; // Flag to toggle between single and multi-select
}

const CustomSelectBox: React.FC<DropdownProps> = ({
  control,
  name,
  items,
  isMultiSelect = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string[] | string>(
    isMultiSelect ? [] : ""
  );

  const dropdownItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <View style={styles.container}>
      {isMultiSelect ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              items={dropdownItems}
              uniqueKey="value"
              onSelectedItemsChange={(selectedItems: string[]) => {
                setSelectedValue(selectedItems);
                onChange(selectedItems);
              }}
              selectedItems={value}
              selectText="Choose Options"
              searchInputPlaceholderText="Search..."
              tagRemoveIconColor="#CCC"
              tagBorderColor="e2e8f0"
              tagTextColor="#000"
              selectedItemTextColor="#0f172a"
              selectedItemIconColor="#0f172a"
              itemTextColor="#64748b"
              displayKey="label"
              searchInputStyle={{ color: "#0f172a" }}
              submitButtonColor="#0284c7"
              submitButtonText="Submit"
              styleDropdownMenuSubsection={styles.dropdownMulti}
            />
          )}
        />
      ) : (
        <View>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <DropDownPicker
                open={open}
                value={value}
                items={dropdownItems}
                setOpen={setOpen}
                style={{borderColor: "e2e8f0"}}
                setValue={(callback) => {
                  const newValue = callback(value);
                  setSelectedValue(newValue);
                  onChange(newValue);
                }}
                placeholder="Select an option"
                dropDownContainerStyle={styles.dropdownContainer}
                zIndex={1000} // Ensure dropdown opens above other elements
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0, // Adds margin between dropdown and other elements
    zIndex: 1000, // Ensure the dropdown opens above other elements
    alignItems: 'center', // Center the dropdown in its container
  },
  dropdownWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    width: '100%', // Full width to ensure it occupies space
  },
  dropdownContainer: {
    borderColor: "#e2e8f0",
    zIndex: 1000, // Ensure dropdown opens above other elements
  },
  dropdownMulti: {
    backgroundColor: "#fff",
    borderColor: "#e2e8f0",
    borderRadius: 8,
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default CustomSelectBox;
