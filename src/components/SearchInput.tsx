import React from 'react'
type SearchInputProps = {
    setCity: Function
}
const SearchInput = ({setCity} : SearchInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="City..." onChange={e => handleChange(e)}/>
        </div>
    )
}

export default SearchInput
