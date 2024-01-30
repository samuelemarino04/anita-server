const { Schema, model } = require("mongoose");

const creationSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Il nome è obbligatorio.'],
        },
        description: {
            type: String,
            required: [true, 'La descrizione è obbligatoria.'],
        },
        imageUrl: {
            type: String,
            required: [true, 'L\'immagine è obbligatoria.']
        }
    },
    {
        timestamps: true
    }
)