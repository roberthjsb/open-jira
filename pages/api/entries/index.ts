import { NewEntry } from './../../../components/ui/NewEntry';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import Entry, { IEntry } from '../../../models/Entry';

type Data =
    | { message: string }
    | IEntry[]
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getEntries(res);
        case 'POST':
            return postEntry(req, res);
        default:
            res.status(400).json({ message: 'No implementado' });
    }
}

async function getEntries(res: NextApiResponse<Data>) {
    await db.connect()
    console.log('getEntries connected')
    const entries: IEntry[] = await Entry.find().sort({ createdAt: 'ascending' })
    await db.disconnect()
    return res.status(200).json(entries)
}



async function postEntry(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { description = '' } = req.body
    const NewEntry = new Entry({
        description,
        createAt: Date.now()
    });
    try {
        await db.connect();
        await NewEntry.save()
        await db.disconnect()
        return res.status(201).json(NewEntry);
    } catch (error) {

        await db.disconnect()
        return res.status(500).json({ message: 'error server' });
    }

}


