import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    genre_ids: [{ type: Number, required: true }],
    orginal_language: { type: String, maxlength: 2 },
    original_title: { type: String, required: true, maxlength: 50 },
    overview: { type: String },
    popularity: { type: Number, required: true },
    release_date: { type: String, required: true },
    title: { type: String, required: true, maxlength: 50 },
    video: { type: Boolean, required: true, default: false },
    vote_average: { type:Number, required: true},
    vote_count: { type: Number, required: true},
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
