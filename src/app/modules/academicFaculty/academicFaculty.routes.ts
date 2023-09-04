import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.contoller';
import { AcademicFacultyValidation } from './academicFaculty.validation';


const router = express.Router();

router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:id', AcademicFacultyController.getAcademicFaculty);

router.post(
    '/',
    validateRequest(AcademicFacultyValidation.create),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.createAcademicFaculty
);

router.patch(
    '/:id',
    validateRequest(AcademicFacultyValidation.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.updateAcademicFaculty
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.deleteAcademicFaculty
);

export const AcademicFacultyRoutes = router;