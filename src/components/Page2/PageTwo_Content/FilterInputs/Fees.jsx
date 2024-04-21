import React from 'react'
import Select from 'react-select'

const Fees = () => {
    const options = [
        { value: "Rs. 300", label: "Rs. 300" },
        { value: "Rs. 400", label: "Rs. 300" },
        { value: "Rs. 500", label: "Rs. 500" },
        { value: "Rs. 700", label: "Rs. 700" },
        { value: "Rs. 800", label: "Rs. 800" },
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

export default Fees