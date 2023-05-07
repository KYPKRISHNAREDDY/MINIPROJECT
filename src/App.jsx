import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import DSA from './components/index.jsx'
import { Reacteroids } from './components/NotFound/Reacteroids.jsx'

function App({ fetchData }) {
    const [data, setData] = useState(fetchData)

    useEffect(() => {
        localStorage.setItem('A2Z_Archive', JSON.stringify(data))
    }, [data])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DSA
                        data={data}
                        setData={setData}
                        isHomeScreen={true}
                        isTopicScreen={false}
                        selectedSubjectIndex={0}
                        selectedContentIndex={0}
                    />
                }
            />
            {data.data.content.map((contentData, index) => {
                console.log('hello', index)
                return (
                    <Route
                        key={index}
                        path={contentData.SubjectPath}
                        element={
                            <DSA
                                data={data}
                                setData={setData}
                                isHomeScreen={false}
                                isTopicScreen={true}
                                selectedSubjectIndex={index}
                                selectedContentIndex={0}
                            />
                        }
                    />
                )
            })}
            <Route
                path={'/play'}
                element={
                    <Flex w={'100vw'} h={'100vh'}>
                        <Reacteroids />
                    </Flex>
                }
            />
        </Routes>
    )
}

export default App
