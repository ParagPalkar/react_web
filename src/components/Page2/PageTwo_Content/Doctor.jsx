import React from 'react'
import Select from 'react-select'

const Doctor = () => {
    const options = [
        { value: "Dr. Ashok Vaidya", label: "Dr. Ashok Vaidya : Panchakarma, Kshara Sutra" },
        { value: "Dr. Madhavi Sharma", label: "Dr. Madhavi Sharma : Stree Rog Chikitsa (Women's health)" },
        { value: "Dr. Vijay Singh", label: "Dr. Vijay Singh : Shalya & Shalakya (Surgery & ENT)" },
        { value: "Dr. Sunita Devi", label: "Dr. Sunita Devi : Bala Rog Chikitsa (Pediatrics)" },
        { value: "Dr. Rajendra Prasad", label: "Dr. Rajendra Prasad : Manasa Chikitsa (Psychology)" }
      ];
  return (
    <>

      
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
    </>
  )
}

export default Doctor