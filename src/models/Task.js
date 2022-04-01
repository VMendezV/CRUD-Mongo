import {Schema, model} from 'mongoose';

const TaskSchema = Schema (
    {
    cantidad:{
        type: Number,
        require: true,
        trim: true,
    },
    done:{
        type: Boolean,
        default: false
    }
    },

    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Task", TaskSchema);