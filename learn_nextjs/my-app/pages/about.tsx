import Link from "next/link"
import Layout from '@/components/layout' 
import {Button} from 'semantic-ui-react'

export async function getStaticProps() {
    const sqlite3 = require('sqlite3')
    const db = new sqlite3.Database('db.sqlite3')
    const sql = `SELECT a from T`
    let data: any[] = [];
    db.all(sql, [], (err: any, rows: any) => {
        if(err) {
            data.push(err)
        }
        rows.forEach((row: any) => data.push(row))
    })
    return {
        props: {
            data
        }
    }
}

function About(props : {data: any[]}) {
    return <Layout currentPage="about">
        <h1>About</h1>
        <pre>
        Data = {
            JSON.stringify(props.data)
        }
        </pre>
        <Button primary>Semantic UI Button</Button>
    </Layout>
}

export default About