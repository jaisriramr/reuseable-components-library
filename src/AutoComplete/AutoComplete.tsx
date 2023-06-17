import React, { FC } from "react"
import Autocomplete from '@mui/material/Autocomplete'
import { AutocompleteProps } from './autocomplete.types'
import TextField from "@mui/material/TextField";
import Popper from '@mui/material/Popper'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AutoComplete: FC<AutocompleteProps> = ({
    options,
    label,
    autoComplete,
    autoHighlight,
    autoSelect,
    blurOnSelect,
    chipProps,
    classes,
    clearIcon,
    clearOnBlue,
    clearOnEscape,
    clearText,
    closeText,
    componentsProps,
    defaultValue,
    disableClearable,
    disableCloseOnSelect,
    disabled,
    disabledItemsFocusable,
    disableListWrap,
    disablePortal,
    className,
    filterOptions,
    filterSelectedOptions,
    forcePopupIcon,
    freeSolo,
    fullWidth,
    getLimitTagsText,
    getOptionDisabled,
    getOptionLabel,
    groupBy,
    handleHomeEndKeys,
    id,
    includeInputInList,
    inputValue,
    isOptionEqualToValue,
    limitTags,
    ListBoxComponent,
    ListBoxProps,
    loading,
    loadingText,
    multiple,
    noOptionsText,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open,
    openOnFocus,
    openText,
    PaperComponent,
    popupIcon,
    readOnly,
    renderGroup,
    renderOption,
    renderTags,
    selectOnFocus,
    size,
    slotProps,
    sx,
    value,
    tmAutoComplete,
    placeholder,
}) => {

    return (
        <div>
            <Autocomplete
                sx={
                    tmAutoComplete ? {
                    borderRadius: '0 !important' ,
                     fontSize: '14px !important',
                     height: '41px !important',
                     '& .MuiOutlinedInput-notchedOutline': {
                       border: '1px solid transparent !important',
                     },
                     '&:hover': {
                       border: '1px solid #979797 !important'
                     },
                     '&:focus': {
                       border: '1px solid #979797 !important'
                     },
                     
                   } : sx
                 }
                options={options}
                renderInput={params => <TextField {...params} label={label} placeholder={placeholder} />}
                autoComplete={autoComplete}
                autoHighlight={autoHighlight}
                autoSelect={autoSelect}
                blurOnSelect={blurOnSelect}
                ChipProps={chipProps}
                classes={classes}
                clearIcon={clearIcon}
                clearOnBlur={clearOnBlue}
                clearOnEscape={clearOnEscape}
                clearText={clearText}
                closeText={closeText}
                componentsProps={componentsProps}
                defaultValue={defaultValue}
                disableClearable={disableClearable}
                disableCloseOnSelect={disableCloseOnSelect}
                disabled={disabled}
                disabledItemsFocusable={disabledItemsFocusable}
                disableListWrap={disableListWrap}
                disablePortal={disablePortal}
                className={className}
                filterOptions={filterOptions}
                filterSelectedOptions={filterSelectedOptions}
                forcePopupIcon={forcePopupIcon}
                freeSolo={freeSolo}
                fullWidth={fullWidth}
                getLimitTagsText={getLimitTagsText}
                getOptionDisabled={getOptionDisabled}
                getOptionLabel={getOptionLabel}
                groupBy={groupBy}
                handleHomeEndKeys={handleHomeEndKeys}
                id={id}
                includeInputInList={includeInputInList}
                inputValue={inputValue}
                isOptionEqualToValue={isOptionEqualToValue}
                limitTags={limitTags}
                ListboxComponent={ListBoxComponent}
                ListboxProps={ListBoxProps}
                loading={loading}
                loadingText={loadingText}
                multiple={multiple}
                noOptionsText={noOptionsText}
                onChange={onChange}
                onClose={onClose}
                onHighlightChange={onHighlightChange}
                onInputChange={onInputChange}
                onOpen={onOpen}
                open={open}
                openOnFocus={openOnFocus}
                openText={openText}
                PaperComponent={PaperComponent}
                PopperComponent={(props) => (
                    <Popper sx={tmAutoComplete ? {
                        marginTop: '12px !important',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15) !important',
                        '& ::-webkit-scrollbar': {
                            width: '10px'
                          },
                           
                          '& ::-webkit-scrollbar-thumb': {
                            'background': '#EEEEEE',
                            height: '100px',
                            'border-radius': '10px'
                          },
                          
                          '& ::-webkit-scrollbar-thumb:hover': {
                            background: '#DDDDDD' 
                          }
                    } : {}} {...props}>
                      {props.children}
                    </Popper>
                  )}
                popupIcon={<KeyboardArrowDownIcon />}
                readOnly={readOnly}
                renderGroup={renderGroup}
                renderOption={renderOption}
                renderTags={renderTags}
                selectOnFocus={selectOnFocus}
                size={size}
                slotProps={slotProps}
                
                value={value}
            />
        </div>
    );
};

export default AutoComplete;
