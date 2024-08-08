import { json } from '@sveltejs/kit';
import sql from '$lib/server/sql.js'

export async function GET({params}) {
    const {table, limit=100} = params
    const res = await sql`
        SELECT * FROM ${sql(table)} LIMIT ${limit}
    `

    return json(res);
}

export async function POST({ params, request}) {
    const {table} = params
    const data = await request.json();

    const id = await sql`
        INSERT INTO ${sql(table)} ${sql(data)} RETURNING id
    `

    return json({ id }, { status: 201 });
}
