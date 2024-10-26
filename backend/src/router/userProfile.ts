// userProfile.js
import express from 'express';
import UserProfileController from '../controllers/userProfile';

const userProfile = (router: express.Router) => {
    router.post('/api/get-preferences', UserProfileController.getPreference);
    router.post('/api/user-profile', UserProfileController.createProfileAndGeneratePath);
    router.post('/api/user-profile/new', UserProfileController.insertTrackInLearningPath);
    router.get('/api/user-profile/:userId', UserProfileController.getProfile);
    router.put('/api/user-profile/:userId/preferences', UserProfileController.updatePreferences);
    router.delete('/api/user-profile/:userId', UserProfileController.deleteProfile);
    
    // Learning path routes
    router.post('/api/user-profile/:userId/learning-path/subject', UserProfileController.addSubject);
    router.get('/api/user-profile/:userId/learning-path', UserProfileController.getLearningPath);
    router.put('/api/user-profile/:userId/learning-path/subject', UserProfileController.updateSubject);
    router.delete('/api/user-profile/:userId/learning-path/subject', UserProfileController.removeSubject);
    
    // Module routes
    router.post('/api/user-profile/:userId/learning-path/:subjectName/module', UserProfileController.addModule);
    router.put('/api/user-profile/:userId/learning-path/:subjectName/module/:moduleName', UserProfileController.updateModule);
    router.delete('/api/user-profile/:userId/learning-path/:subjectName/module/:moduleName', UserProfileController.removeModule);
    router.get('/user/:userId/subject/:subjectName/module/:moduleId', UserProfileController.getModuleById);
    
    // Difficulty level route
    router.put('/api/user-profile/:userId/difficulty', UserProfileController.updateDifficulty);
};

export default userProfile;
