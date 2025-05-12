import asyncHandler from  "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getTopics = asyncHandler(async (req, res) => {
    const searchQuery = req.query.search;
    const sortParam = req.query.sort;

    if (!searchQuery || typeof searchQuery !== 'string') {
    throw new ApiError(400, 'Invalid search query');
  }

  try {
    const filePath = path.join(__dirname, '../data/topics.json');
    const data = await readFile(filePath, 'utf-8');
    const topics = JSON.parse(data);

    // Filter topics based on the search query
    const filteredTopics = topics.filter(topic =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort by name if requested
    if (sortParam === 'name') {
      filteredTopics.sort((a, b) => a.name.localeCompare(b.name));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, 'Topics retrieved successfully', filteredTopics));
    } catch (error) {
        throw new ApiError(500, 'Internal server error');
    }
});

export { getTopics };
