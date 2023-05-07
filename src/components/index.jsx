import { Flex } from '@chakra-ui/react'
import { useState } from 'react'

import Content from './content/Content.jsx'
import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'

const DSA = ({
    data,
    setData,
    isHomeScreen,
    isTopicScreen,
    selectedSubjectIndex,
    selectedContentIndex,
}) => {
    let [searchValue, setSearchValue] = useState('')
    const isDarkMode = data.data.header.darkMode
    // console.log(selectedSubjectIndex)
    return (
        <Flex
            className={'app'}
            w={'100vw'}
            h={'100vh'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            bg={isDarkMode ? 'fullPageColor_dark' : 'fullPageColor'}
        >
            <Header
                data={data}
                setData={setData}
                isHomeScreen={isHomeScreen}
                isTopicScreen={isTopicScreen}
                selectedContentIndex={selectedContentIndex}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Content
                data={data}
                setData={setData}
                isHomeScreen={isHomeScreen}
                isTopicScreen={isTopicScreen}
                selectedSubjectIndex={selectedSubjectIndex}
                selectedContentIndex={selectedContentIndex}
                searchValue={searchValue}
            />
            <Footer data={data} />
        </Flex>
    )
}

export default DSA
