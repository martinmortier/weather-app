import React from 'react'
type SearchInputProps = {
    setCityName: Function
}
const SearchInput = ({setCityName} : SearchInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="City..." onChange={e => handleChange(e)}/>
        </div>
    )
}

export default SearchInput
