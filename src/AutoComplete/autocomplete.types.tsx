import { MouseEventHandler, ReactNode } from "react";

export interface AutocompleteProps {
    options: Array<object>;
    label?: string;
    autoComplete?: boolean;
    autoHighlight?: boolean;
    autoSelect?: boolean;
    blurOnSelect?: 'mouse' | 'touch' | boolean;
    chipProps?: object;
    classes?: object;
    clearIcon?: ReactNode;
    clearOnBlue?: boolean;
    clearOnEscape?: boolean;
    clearText?: string;
    closeText?: string;
    componentsProps?: { clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object };
    defaultValue?: any;
    disableClearable?: boolean;
    disableCloseOnSelect?: boolean;
    disabled?: boolean;
    disabledItemsFocusable?: boolean;
    disableListWrap?: boolean;
    disablePortal?: boolean;
    className?: string;
    filterOptions?: any;
    filterSelectedOptions?: boolean;
    forcePopupIcon?: 'auto' | boolean;
    freeSolo?: boolean;
    fullWidth?: boolean;
    getLimitTagsText?: any;
    getOptionDisabled?: any;
    getOptionLabel?: any;
    groupBy?: any;
    handleHomeEndKeys?: boolean;
    id?: string;
    includeInputInList?: boolean;
    inputValue?: string;
    isOptionEqualToValue?: any;
    limitTags?: number;
    ListBoxComponent?: any;
    ListBoxProps?: object;
    loading?: boolean;
    loadingText?: ReactNode;
    multiple?: boolean;
    noOptionsText?: ReactNode;
    onChange?: any;
    onClose?: any;
    onHighlightChange?: any;
    onInputChange?: any;
    onOpen?: any;
    open?: boolean;
    openOnFocus?: boolean;
    openText?: string;
    PaperComponent?: any;
    PopperComponent?: any;
    popupIcon?: ReactNode;
    readOnly?: boolean;
    renderGroup?: any;
    renderOption?: any;
    renderTags?: any;
    selectOnFocus?: boolean;
    size?: 'small' | 'medium';
    slotProps?: { clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object };
    sx?: any;
    value?: any;
    tmAutoComplete?: boolean;
    placeholder?: string;
    popperwidth?: string;
    error?: boolean;
    onMouseDown?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    placement?: 'auto-end'
    | 'auto-start'
    | 'auto'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
    setSearchPlaceholder?: boolean;
}