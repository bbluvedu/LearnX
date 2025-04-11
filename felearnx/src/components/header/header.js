import React, { useState } from 'react'
import '../../css/header/header-dark.css'
import '../../css/font/lato.css'
import '../../css/font/poppins.css'
import { FaSearch, FaUser } from 'react-icons/fa'
import Search from './search'

function Header() {
    const [search, setSearch] = useState(false);

    const activeSearch = () => {
        setSearch(!search)
    }

    return (
        <div className='h-container' data-theme='dark'>
            <div className='h-box'>
                <div className='h-logo poppins-bold'>
                    LearnX
                </div>
                <div className='h-features-box'>
                    <div className='h-feature poppins-medium'>
                        Courses
                    </div>
                    <div className='h-feature poppins-medium'>
                        AI ChatBox
                    </div>
                    <div className='h-feature poppins-medium'>
                        Blogs
                    </div>
                    <div className='h-feature poppins-medium'>
                        Support
                    </div>
                    <div className='h-feature poppins-medium' onClick={activeSearch}>
                        <FaSearch className='h-search-icon' />
                    </div>
                    <div className='h-feature poppins-medium'>
                        <FaUser className="h-user-icon" />
                    </div>
                </div>
            </div>
            {search ? <Search closeSearch={activeSearch} /> : ''}
        </div>
    )
}

export default Header