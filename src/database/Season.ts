import { Document, Schema } from 'mongoose';
import { connection } from '../database';

export interface ISeason extends Document {
    guildId: string;
    name: string;
    startDate: Date;
    endDate?: Date;
}

const seasonSchema = new Schema({
    guildId: { type: String, required: true },
    name: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: Date,
});

export const Season = connection.model('Season', seasonSchema);
