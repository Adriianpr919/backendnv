//Create table for Subcategory
import mongoose from 'mongoose';

const subcategorySchema = new mongoose.Schema({
    checked: { type: Boolean, required: true },
    titlesubcategory: { type: String, required: true },
}, {
    timestamps: true //for date
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);
export default Subcategory;