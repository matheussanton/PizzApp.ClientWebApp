import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

import { MdSearch, MdOutlineClose } from 'react-icons/md'
import { IconContext } from 'react-icons'

export function SearchBar({ data }) {
    const [inputSearch, setInputSearch] = useState("")
    const [filterSearch, setFilterSearch] = useState([])

    const handleFilter = (event) => {
        setInputSearch(event.target.value)

        const newFilter = data.filter(value => {
            return value.title.toLowerCase().includes(inputSearch.toLowerCase())
        })

        setFilterSearch(newFilter)

    }

    useEffect(() => {

        if (inputSearch === "") {
            setFilterSearch([])
        }

    }, [inputSearch])

    function handleClickAutoComplete(value) {
        setInputSearch(value.title)
        setFilterSearch([])
    }

    function clearText() {
        setInputSearch("")
        setFilterSearch([])
    }

    return (
        <div className={styles.search} >

            <div className={styles.searchInputs} >
                <IconContext.Provider value={{ color: "#B8B8B8", size: "40px" }}>
                    <MdSearch />

                    <input type="text" placeholder='Pesquisar...' value={inputSearch} onChange={handleFilter} />

                    {inputSearch !== "" ? <MdOutlineClose onClick={clearText} /> : ""}
                </IconContext.Provider>
            </div>

            {filterSearch.length !== 0 &&
                <div className={styles.dataResult}>
                    {filterSearch.slice(0, 15).map(value => (
                        <div key={value.id} className={styles.dataItem} onClick={() => handleClickAutoComplete(value)}>
                            <IconContext.Provider value={{ color: "#B8B8B8", size: "22px" }}>
                                <MdSearch />
                            </IconContext.Provider>
                            <p>{value.title}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
