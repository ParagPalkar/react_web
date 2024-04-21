import React from 'react'
import Select from 'react-select'

const Expertise = () => {
    const options = [
        { value: "Dr. Ashok Vaidya", label: "Panchakarma, Kshara Sutra" },
        { value: "Dr. Madhavi Sharma", label: "Stree Rog Chikitsa (Women's health)" },
        { value: "Dr. Vijay Singh", label: "Shalya & Shalakya (Surgery & ENT)" },
        { value: "Dr. Sunita Devi", label: "Bala Rog Chikitsa (Pediatrics)" },
        { value: "Dr. Rajendra Prasad", label: "Manasa Chikitsa (Psychology)" }
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

export default Expertise