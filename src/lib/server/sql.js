import postgres from 'postgres'

const sql = postgres({debug: true}) // will use psql environment variables

export default sql