import './ProgressBar.css'

import { Flex, Grid } from '@chakra-ui/react'

import SingleCategory from './SingleCategory.jsx'
import SingleSubject from './SingleSubject.jsx'
import SingleTopic from './SingleTopic.jsx'

const Content = ({
    data,
    setData,
    isHomeScreen,
    isTopicScreen,
    selectedSubjectIndex,
    selectedContentIndex,
    searchValue,
}) => {
    const isDarkMode = data.data.header.darkMode
    const listOfTopics = data.data.content
    const listOfSubjectSubTopics = data.data.content[selectedSubjectIndex].subjectContent
    const listOfCategoryInSubTopics =
        data.data.content[selectedSubjectIndex].subjectContent[
            selectedContentIndex
        ].categoryList
    // console.log('hello')
    console.log(isHomeScreen)
    console.log(isTopicScreen)
    // isHomeScreen = false
    // isTopicScreen = false
    return (
        <Flex
            className={'content'}
            my={2}
            w={'90vw'}
            flexGrow={'1'}
            flexDirection={'column'}
            borderColor={
                isHomeScreen
                    ? 'transparent'
                    : isDarkMode
                    ? 'borderColor_dark'
                    : 'borderColor'
            }
            borderWidth={'2px'}
            borderRadius={'6px'}
            p={2}
            overflowY={'scroll'}
            overflowX={'hidden'}
        >
            {isHomeScreen ? (
                <>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                        }}
                        gap={4}
                    >
                        {listOfTopics.map((contentData, index) => {
                            return (
                                <SingleSubject
                                    data={data}
                                    selectedContentIndex={index}
                                    key={index}
                                />
                            )
                        })}
                    </Grid>
                </>
            ) : isTopicScreen ? (
                <>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                        }}
                        gap={4}
                    >
                        {listOfSubjectSubTopics.map((contentData, index) => {
                            return (
                                <SingleTopic
                                    data={data}
                                    SubjectIndex={selectedSubjectIndex}
                                    selectedContentIndex={index}
                                    key={index}
                                />
                            )
                        })}
                    </Grid>
                </>
            ) : (
                listOfCategoryInSubTopics.map((categoryData, index) => {
                    return <h1 key={index}>hello world </h1>
                })
            )}
        </Flex>
    )
}

export default Content
