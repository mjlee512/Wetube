import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true, minLength:2, maxLength:25},
    description: {type: String, required: true, maxLength:300},
    createdAt: {type: Date, required: true, default: Date.now},
    hashtags: [{type: String, trim: true}],
    meta: {
        views:{type:Number, default: 0, requried: true},
        rating:{type:Number, default: 0, requried: true},
    },
});

videoSchema.static('formatHashtags', function(hashtags) {
    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
})

const Video = mongoose.model("Video", videoSchema);

export default Video;