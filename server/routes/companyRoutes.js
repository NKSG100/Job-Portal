import express from 'express';
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, resgisterCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middleware/authMiddleware.js';

const router = express.Router();

//Resgister a company
router.post('/register',upload.single('image') ,resgisterCompany);

//Company login
router.post('/login', loginCompany);

//Get Company data
router.get('/company', protectCompany, getCompanyData);

//Post a Job
router.post('/post-job', protectCompany, postJob);

//Get Applicants Data of Company
router.get('/applicants', protectCompany, getCompanyJobApplicants);

//Get Company Job List
router.get('/list-jobs', protectCompany, getCompanyPostedJobs);

//Change Application Status
router.post('/change-status', protectCompany, ChangeJobApplicationStatus);

//Change Applications Visibility
router.post('/change-visibility', protectCompany, changeVisibility);


export default router;