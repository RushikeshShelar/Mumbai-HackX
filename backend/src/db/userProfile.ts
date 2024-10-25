import { Schema, model, Document, Types } from 'mongoose';
import UserModel from './users';

// Interfaces
interface Module extends Document {
    moduleName: string;
    difficulty: number;
    status: 'not started' | 'in progress' | 'completed';
    performance: {
        attemptDate: Date;
        success?: boolean;
        score?: number;
    }[];
    description?: string;
    lastAttemptedAt?: Date;
    feedback?: string[]; // Changed feedback to an array
}

interface Subject extends Document {
    subject: string;
    modules: Types.DocumentArray<Module>;
}

interface UserProfile extends Document {
    user: Types.ObjectId; // Reference to the User model
    learningPreferences: {
        style: 'audio' | 'visual' | 'reading';
        pace: 'fast' | 'moderate' | 'slow';
    };
    learningPath: Types.DocumentArray<Subject>;
    currentDifficultyLevel: number;
    feedback: {
        moduleName: string;
        feedbackData: {
            wasFast: boolean;
            easyToUnderstand: boolean;
            relevantContent: boolean;
            relevantAssignments: boolean;
        };
    }[];
    lastUpdated: Date;
}

// Schemas
const ModuleSchema = new Schema<Module>({
    moduleName: { type: String, required: true },
    difficulty: { type: Number, required: true },
    status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
    performance: [
        {
            attemptDate: { type: Date, required: true },
            success: { type: Boolean },
            score: { type: Number }
        }
    ],
    description: String,
    lastAttemptedAt: Date,
    feedback: [String] // Changed feedback to an array of strings
});

const SubjectSchema = new Schema<Subject>({
    subject: { type: String, required: true },
    modules: [ModuleSchema]
});

const UserProfileSchema = new Schema<UserProfile>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    learningPreferences: {
        style: { type: String, enum: ['audio', 'visual', 'reading'], required: true },
        pace: { type: String, enum: ['fast', 'moderate', 'slow'], required: true }
    },
    learningPath: [SubjectSchema],
    currentDifficultyLevel: { type: Number, default: 1 },
    feedback: [
        {
            moduleName: { type: String, required: true },
            feedbackData: {
                wasFast: { type: Boolean, default: false },
                easyToUnderstand: { type: Boolean, default: false },
                relevantContent: { type: Boolean, default: false },
                relevantAssignments: { type: Boolean, default: false }
            }
        }
    ],
    lastUpdated: { type: Date, default: Date.now }
});

// Model
const UserProfileModel = model<UserProfile>('UserProfile', UserProfileSchema);

export default UserProfileModel;

// User Profile Functions
export const createUserProfile = async (userId: string, preferences: { style: string; pace: string }) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const newUserProfile = new UserProfileModel({
            user: user._id,
            learningPreferences: preferences,
            learningPath: [],
            currentDifficultyLevel: 1,
            feedback: [],
            lastUpdated: new Date()
        });
        return await newUserProfile.save();
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw new Error('Could not create user profile');
    }
};

export const getUserProfile = async (userId: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }

        // Now use the user's ObjectId to find the user profile
        return await UserProfileModel.findOne({ user: user._id }).populate('user').exec();
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw new Error('Could not fetch user profile');
    }
};

export const updateUserProfilePreferences = async (userId: string, newPreferences: { style?: string; pace?: string }) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        return await UserProfileModel.findOneAndUpdate(
            { user: user._id },
            { $set: { learningPreferences: newPreferences, lastUpdated: new Date() } },
            { new: true }
        );
    } catch (error) {
        console.error('Error updating user profile preferences:', error);
        throw new Error('Could not update user profile preferences');
    }
};

export const deleteUserProfile = async (userId: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        return await UserProfileModel.findOneAndDelete({ user: user._id });
    } catch (error) {
        console.error('Error deleting user profile:', error);
        throw new Error('Could not delete user profile');
    }
};

// Learning path functions
export const addSubjectToLearningPath = async (userId: string, subjectName: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        if (userProfile) {
            userProfile.learningPath.push({ subject: subjectName, modules: [] });
            await userProfile.save();
            return userProfile;
        }
        return null;
    } catch (error) {
        console.error('Error adding subject to learning path:', error);
        throw new Error('Could not add subject to learning path');
    }
};

export const getLearningPath = async (userId: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        return userProfile ? userProfile.learningPath : null;
    } catch (error) {
        console.error('Error fetching learning path:', error);
        throw new Error('Could not fetch learning path');
    }
};

export const updateSubjectInLearningPath = async (userId: string, oldSubjectName: string, newSubjectName: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        if (userProfile) {
            const subject = userProfile.learningPath.find(s => s.subject === oldSubjectName);
            if (subject) {
                subject.subject = newSubjectName;
                await userProfile.save();
                return userProfile;
            }
        }
        return null;
    } catch (error) {
        console.error('Error updating subject in learning path:', error);
        throw new Error('Could not update subject in learning path');
    }
};

export const removeSubjectFromLearningPath = async (userId: string, subjectName: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        if (userProfile) {
            userProfile.learningPath.pull({ subject: subjectName });
            await userProfile.save();
            return userProfile;
        }
        return null;
    } catch (error) {
        console.error('Error removing subject from learning path:', error);
        throw new Error('Could not remove subject from learning path');
    }
};

// Modules functions
export const addModuleToSubject = async (userId: string, subjectName: string, moduleData: { moduleName: string; difficulty: number }) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        if (userProfile) {
            const subject = userProfile.learningPath.find(s => s.subject === subjectName);
            if (subject) {
                subject.modules.push({
                    moduleName: moduleData.moduleName,
                    difficulty: moduleData.difficulty,
                    status: 'not started',
                    performance: [],
                    feedback: [] // Initialize feedback as an empty array
                });
                await userProfile.save();
                return userProfile;
            }
        }
        return null;
    } catch (error) {
        console.error('Error adding module to subject:', error);
        throw new Error('Could not add module to subject');
    }
};

export const updateModuleInSubject = async (userId: string, subjectName: string, moduleName: string, updateData: { difficulty?: number; status?: 'not started' | 'in progress' | 'completed' }) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        if (userProfile) {
            const subject = userProfile.learningPath.find(s => s.subject === subjectName);
            const module = subject?.modules.find(m => m.moduleName === moduleName);
            if (module) {
                if (updateData.difficulty !== undefined) module.difficulty = updateData.difficulty;
                if (updateData.status) module.status = updateData.status;
                await userProfile.save();
                return userProfile;
            }
        }
        return null;
    } catch (error) {
        console.error('Error updating module in subject:', error);
        throw new Error('Could not update module in subject');
    }
};

export const removeModuleFromSubject = async (userId: string, subjectName: string, moduleName: string) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const userProfile = await UserProfileModel.findOne({ user: user._id });
        if (userProfile) {
            const subject = userProfile.learningPath.find(s => s.subject === subjectName);
            if (subject) {
                subject.modules.pull({ moduleName });
                await userProfile.save();
                return userProfile;
            }
        }
        return null;
    } catch (error) {
        console.error('Error removing module from subject:', error);
        throw new Error('Could not remove module from subject');
    }
};

export const updateDifficultyLevel = async (userId: string, newDifficulty: number) => {
    try {
        // First, find the user by username
        const user = await UserModel.findOne({ username: userId });
        if (!user) {
            throw new Error('User not found');
        }
        return await UserProfileModel.findOneAndUpdate(
            { user: user._id },
            { $set: { currentDifficultyLevel: newDifficulty, lastUpdated: new Date() } },
            { new: true }
        );
    } catch (error) {
        console.error('Error updating difficulty level:', error);
        throw new Error('Could not update difficulty level');
    }
};
