import {json} from '@sveltejs/kit';
import sql from '$lib/server/sql.js'

export async function DELETE({params}) {
    const {id, table} = params;

    await sql`
        DELETE FROM ${sql(table)} WHERE id=${id}
    `

    return new Response(null, { status: 204 });
}

export async function GET({params}) {
    const {id, table} = params
    const res = await sql`
        SELECT * FROM ${sql(table)} WHERE id=${id}
    `

    return json(res);
}

export async function PUT({params, request}) {
    const {id, table} = params;
    const data = await request.json();

    await sql`
        UPDATE ${sql(table)} SET ${sql(data)} WHERE id=${id}
    `

    return new Response(null, { status: 204 });
}