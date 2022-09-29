import mongoose from "mongoose"


const commentSchema = mongoose.Schema(
    {
        id: Number,
        comment: String,
        name: String,
        occupation: String
    }
);

const Comment = mongoose.model("CommentSchema", commentSchema);


export default Comment;








