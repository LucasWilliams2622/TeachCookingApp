import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const MyCheckboxGroup = () => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxToggle = (value) => {
        if (checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((item) => item !== value));
        } else {
            setCheckedItems([...checkedItems, value]);
        }
    };

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    return (
        <View style={{ flexDirection: 'row' }}>
            {options.map((option) => (
                <CheckBox
                    key={option.value}
                    title={option.label}
                    checked={checkedItems.includes(option.value)}
                    onPress={() => handleCheckboxToggle(option.value)}
                />
            ))}
        </View>
    );
};

export default MyCheckboxGroup;
