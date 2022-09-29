import mongoose from 'mongoose';


const workSchema = mongoose.Schema(
    {
        id: Number,
        name: String,
        smallImageUrl: String,
        bigImageUrl: String,
        techStack: [String],
        gitRepo: String,
        liveSite: String,
        architecture: String,
        description: [String]
    }
);

const Work = mongoose.model("WorkSchema", workSchema);


export default Work;






