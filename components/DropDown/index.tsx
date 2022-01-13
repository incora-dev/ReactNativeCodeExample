import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import { IDropdownItemData } from '@app/components/DropDown/DropDown.types';
import language from '@app/constants/languages';
import { DropDownStyles, InputStyles } from '@app/styles';

export interface IDropdownProps {
  title?: string;
  label?: string;
  required?: boolean;
  items: IDropdownItemData[];
  initialSelectedOption?: string;
  variant?: 'rounded';
  onSelect?(newItem: IDropdownItemData): void;
}

export const Dropdown = React.forwardRef<null, IDropdownProps>(
  ({ items, label, title, required, onSelect, initialSelectedOption, variant }, forwardedRef) => {
    const [selectedOption, setSelectedOption] = useState<IDropdownItemData | null>(null);

    const handleSelect = useCallback((index: string, selectedItem: IDropdownItemData) => {
      onSelect?.(selectedItem);
      setSelectedOption(selectedItem);
    }, []);

    const initialOption = useMemo(() => {
      const option = items.find(item => item.value === initialSelectedOption)!;
      const index = option ? items.indexOf(option) : -1;

      return {
        option,
        index,
      };
    }, [initialSelectedOption]);

    useEffect(() => {
      const { index, option } = initialOption;

      handleSelect(String(index), option);
    }, [initialSelectedOption]);

    return (
      <View
        style={[
          DropDownStyles.container,
          variant === 'rounded' ? DropDownStyles.roundedContainer : null,
        ]}
      >
        {label && (
          <Text style={InputStyles.label}>
            {label}
            {required && <Text style={InputStyles.required}>*</Text>}
          </Text>
        )}

        <ModalDropdown
          ref={forwardedRef}
          options={items}
          onSelect={handleSelect}
          defaultIndex={initialOption.index}
          renderButtonComponent={TouchableHighlight}
          renderButtonProps={{ activeOpacity: 0.95 }}
          renderRow={(option, index) => (
            <Text key={index} style={DropDownStyles.item}>
              {option.label}
            </Text>
          )}
          isFullWidth
        >
          <View style={[InputStyles.textInput, DropDownStyles.button]}>
            <Text style={DropDownStyles.title}>{title}</Text>
            <Text style={DropDownStyles.buttonText}>
              {selectedOption?.label || language.placeholders.pleaseSelect}
            </Text>
            <Icon name='chevron-thin-down' size={20} color='black' style={{ marginLeft: 'auto' }} />
          </View>
        </ModalDropdown>
      </View>
    );
  },
);
