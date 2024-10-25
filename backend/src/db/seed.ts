// seed.ts
import mongoose from 'mongoose';
import UserModel, { createUser } from './users';
import { authentication, random } from '../helpers'; // Adjust the path as necessary
import UserProfileModel from './userProfile';

// Connect to the MongoDB database
const connectDB = async () => {
    try {
        const MONGO_URL = process.env.MONGODB_URL;
        mongoose.Promise = Promise;

        mongoose.connect(MONGO_URL)
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));

    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Function to seed the database
const seedUsers = async () => {
    await UserModel.deleteMany({}); 
    const users = [
        {
            username: 'admin',
            email: 'admin@gmail.com',
            password: 'admin', // Use a secure password
        },
        {
            username: 'user2',
            email: 'user2@example.com',
            password: 'password2',
        },
        {
            username: 'user3',
            email: 'user3@example.com',
            password: 'password3',
        },
    ];

    for (const userData of users) {
        const { username, email, password } = userData;
        const salt = random();
        const hashedPassword = authentication(salt, password);

        await createUser({
            username,
            email,
            authentication: {
                salt,
                password: hashedPassword,
            },
        });
        console.log(`User ${username} created`);
    }
};

const seedUserProfiles = async () => {
    const users = await UserModel.find(); // Fetch existing users from the database
    const userProfiles = users.map(user => ({
        user: user._id, // Reference the user ID
        learningPreferences: {
            style: 'visual', // Example learning style
            pace: 'moderate', // Example learning pace
        },
        learningPath: [], // Start with an empty learning path
        currentDifficultyLevel: 1, // Default difficulty level
        feedback: [], // Start with an empty feedback array
        lastUpdated: new Date(), // Set current date as last updated
    }));

    await UserProfileModel.insertMany(userProfiles); // Insert all user profiles at once
    console.log(`${userProfiles.length} user profiles created`);
};

const runSeeder = async () => {
    await connectDB();
    await seedUsers();
    await seedUserProfiles();
    mongoose.disconnect();
};

runSeeder().catch((error) => {
    console.error('Error seeding database:', error);
});