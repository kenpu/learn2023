import Link from "next/link"
import Layout from '@/components/layout' 
import {Button} from 'semantic-ui-react'
import {
    GetServerSideProps
} from 'next'

import useSWR from 'swr'
import React from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            data: context.req.url
        }
    }
}

function About(props : {data: any}) {
    const [fileList, setFileList] = React.useState<any>()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    function handleClick() {
        if(isLoading) {
            return
        }
        setFileList({})
        setIsLoading(true)
        fetch('/api/hello').then(res => {
            let data = res.json()
            data.then(value => {
                setFileList(value)
                console.log("Ding.", value)
                setIsLoading(false)
    
            })
        })
    }

    return <Layout currentPage="about">
        <h1>About</h1>
        <pre>
        Data = {
            JSON.stringify(fileList, null, 2)
        }
        </pre>

        <Button primary onClick={handleClick}>
            {isLoading && "Is Loading"}
            {!isLoading && "Load"}
        </Button>
    </Layout>
}

export default About