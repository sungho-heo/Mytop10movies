import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    adult: { type: Boolean, required: true, default: false },
    genre_ids: [{ type: Number, required: true }],
    orginal_language: { type: String, required: true, maxlength: 2 },
    original_title: { type: String, required: true, maxlength: 50 },
    overview: { type: String },
    popularity: { type: mongoose.Types.Decimal128, required: true },
    release_date: { type: Date, required: true },
    title: { type: String, required: true, maxlength: 50 },
    video: { type: Boolean, required: true, default: false },
    vote_average: { type: mongoose.Types.Decimal128, required: true },
    vote_count: { type: Number, required: true }
});

const Video = mongoose.model("Viode", videoSchema);

export default Video;
