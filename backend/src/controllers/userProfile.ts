import { Request, Response } from 'express';
import {
    createUserProfile,
    getUserProfile,
    updateUserProfilePreferences,
    deleteUserProfile,
    addSubjectToLearningPath,
    getLearningPath,
    updateSubjectInLearningPath,
    removeSubjectFromLearningPath,
    addModuleToSubject,
    updateModuleInSubject,
    removeModuleFromSubject,
    updateDifficultyLevel
} from '../db/userProfile'; // Adjust the import path as necessary
import axios from 'axios';
import { generateLearningPath } from '../Llama';

class UserProfileController {
    // Create a new user profile
    static async createProfile(req: Request, res: Response) {
        const { userId, preferences } = req.body;
        try {
            const newUserProfile = await createUserProfile(userId, preferences);
            return res.status(201).json(newUserProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async createProfileAndGeneratePath(req: Request, res: Response) {
        const { userId, preferences, subject, } = req.body; // Get user ID, preferences, and answers
        try {
            // Step 1: Create the user profile
            const newUserProfile = await createUserProfile(userId, preferences);

            // Step 2: Send data to Llama model to generate learning path
            const response = await generateLearningPath(subject, preferences.pace, preferences.style );

            // Step 3: Update user profile with the generated learning path
            newUserProfile.learningPath = response.learningPath;
            await newUserProfile.save();

            return res.status(201).json(newUserProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Get user profile by user ID
    static async getProfile(req: Request, res: Response) {
        const { userId } = req.params;
        try {
            const userProfile = await getUserProfile(userId);
            if (!userProfile) {
                return res.status(404).json({ message: 'User profile not found' });
            }
            return res.status(200).json(userProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Update user profile preferences
    static async updatePreferences(req: Request, res: Response) {
        const { userId } = req.params;
        const newPreferences = req.body;
        try {
            const updatedProfile = await updateUserProfilePreferences(userId, newPreferences);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Delete user profile
    static async deleteProfile(req: Request, res: Response) {
        const { userId } = req.params;
        try {
            const deletedProfile = await deleteUserProfile(userId);
            if (!deletedProfile) {
                return res.status(404).json({ message: 'User profile not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Add a subject to the learning path
    static async addSubject(req: Request, res: Response) {
        const { userId } = req.params;
        const { subjectName } = req.body;
        try {
            const updatedProfile = await addSubjectToLearningPath(userId, subjectName);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Get the learning path of the user
    static async getLearningPath(req: Request, res: Response) {
        const { userId } = req.params;
        try {
            const learningPath = await getLearningPath(userId);
            if (!learningPath) {
                return res.status(404).json({ message: 'Learning path not found' });
            }
            return res.status(200).json(learningPath);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Update a subject in the learning path
    static async updateSubject(req: Request, res: Response) {
        const { userId } = req.params;
        const { oldSubjectName, newSubjectName } = req.body;
        try {
            const updatedProfile = await updateSubjectInLearningPath(userId, oldSubjectName, newSubjectName);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile or subject not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Remove a subject from the learning path
    static async removeSubject(req: Request, res: Response) {
        const { userId } = req.params;
        const { subjectName } = req.body;
        try {
            const updatedProfile = await removeSubjectFromLearningPath(userId, subjectName);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile or subject not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Add a module to a subject
    static async addModule(req: Request, res: Response) {
        const { userId, subjectName } = req.params;
        const moduleData = req.body;
        try {
            const updatedProfile = await addModuleToSubject(userId, subjectName, moduleData);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile or subject not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Update a module in a subject
    static async updateModule(req: Request, res: Response) {
        const { userId, subjectName, moduleName } = req.params;
        const updateData = req.body;
        try {
            const updatedProfile = await updateModuleInSubject(userId, subjectName, moduleName, updateData);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile, subject, or module not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Remove a module from a subject
    static async removeModule(req: Request, res: Response) {
        const { userId, subjectName, moduleName } = req.params;
        try {
            const updatedProfile = await removeModuleFromSubject(userId, subjectName, moduleName);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile, subject, or module not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Update the difficulty level
    static async updateDifficulty(req: Request, res: Response) {
        const { userId } = req.params;
        const { newDifficulty } = req.body;
        try {
            const updatedProfile = await updateDifficultyLevel(userId, newDifficulty);
            if (!updatedProfile) {
                return res.status(404).json({ message: 'User profile not found' });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default UserProfileController;
