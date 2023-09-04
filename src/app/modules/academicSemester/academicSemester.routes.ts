import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemeterController } from './academicSemster.controller';
import { AcademicSemesterValidation } from './academicSemster.validation';
const router = express.Router();

router.get('/', AcademicSemeterController.getAllAcademicSemester)
router.get('/:id', AcademicSemeterController.getAcademicSemesterById)
router.post(
    '/',
    validateRequest(AcademicSemesterValidation.create),
    AcademicSemeterController.createAcademicSemester
)

router.patch(
    '/:id',
    validateRequest(AcademicSemesterValidation.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicSemeterController.updateAcademicSemester
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicSemeterController.deleteAcademicSemester
);

export const AcademicSemeterRoutes = router;