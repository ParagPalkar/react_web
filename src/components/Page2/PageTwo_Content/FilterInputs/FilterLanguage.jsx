import React from 'react'
import Select from 'react-select'

const FilterLanguage = () => {
    const options = [
        { value: "Hindi", label: "Hindi" },
        { value: "English", label: "English" },
        { value: "Marathi", label: "Marathi" },
        { value: "Tamil", label: "Tamil" },
        { value: "Telgu", label: "Telgu" },
      ];
  return (
    <>
        <div className="inputblock">

        <Select 
        
        defaultValue={options[0]}
        theme={(theme) => ({
            ...theme,
            borderRadius: 8,
                colors: {
                  ...theme.colors,
                  primary25: '#CFEBCF',
                  primary: '#3A643B',
                },
              })}
        options={options} />
            </div>
    </>
  )
}

export default FilterLanguage