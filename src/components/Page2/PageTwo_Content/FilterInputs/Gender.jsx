import React from 'react'
import Select from 'react-select'

const Gender = () => {
    const options = [
        { value: "Male", label: "Male" },
        { value: "female", label: "Female" },
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

export default Gender