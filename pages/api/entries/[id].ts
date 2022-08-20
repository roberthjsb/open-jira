
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry } from '../../../models';
import { IEntry } from '../../../models/Entry';

type Data =
    | { message: String }
    | IEntry[]
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'el id no es valido' })
    }
    switch (req.method) {
        case 'GET':{
            return getEntry(req,res);
        }
        case 'PUT': {
            return putEntry(req, res)
        }
        default:
            break;
    }
}

async function putEntry(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    await db.connect()

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(400).json({ message: 'No hay entradas con ese ID: ' + id })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
        await db.disconnect()
        res.status(200).json(updatedEntry!)
    } catch (error:any) {
        await db.disconnect()
        res.status(200).json({message: error.errors.status.message})
    }
}

async function getEntry(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    await db.connect()

    const entryFound = await Entry.findById(id);

    if (!entryFound) {
        await db.disconnect();
        return res.status(400).json({ message: 'No hay entradas con ese ID: ' + id })
    }
    res.status(200).json(entryFound)
}