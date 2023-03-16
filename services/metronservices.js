import Comment from "../models/comment.js";
import Work from "../models/work.js";

async function saveWork(request, response) {
    const body = request.body;
    const oldWork = await Work.find();
    const oldWorkCount = oldWork.length;
    const newId = oldWorkCount + 1;
    const newWork = new Work({...body, id: newId});
    console.log(newWork)
    try {
        await newWork.save();
        response.status(201).json("Work saved");
    } catch (error) {
        response.status(404).json(
            {
                message: error.message
            }
        )
    }
}

async function saveComment(request, response) {
    const body = request.body;
    const oldComment = await Comment.find();
    const oldCommentCount = oldComment.length;
    const newId = oldCommentCount + 1;
    const newComment = new Comment({...body, id: newId});
    console.log(newComment)
    try {
        await newComment.save();
        response.status(201).json("Comment saved");
    } catch (error) {
        response.status(404).json(
            {
                message: error.message
            }
        )
    }
}


async function getWork(request, response) {
    try{
        const works = await Work.find();
        response.status(200).json(works)
    } catch(error) {
        response.status(404).json(
            {
                message: error
            }
        )
    }
}


async function getComment(request, response) {
    try{
        const comments = await Comment.find();
        response.status(200).json(comments)
    } catch(error) {
        response.status(404).json(
            {
                message: error
            }
        )
    }
}

async function trial(request, response) {
    console.log("This got here");
    try{
        const mide = {
            id: 1,
            name: "Liam"
        }
        response.send("This is Adrian");
        // response.status(200).json(mide);
    } catch(error){

    }
}



export {getWork, saveWork, saveComment, getComment, trial} 


