import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidations } from './building.validations';

const router = express.Router();

router.get('/', BuildingController.getAllBuilding);
router.get('/:id', BuildingController.getBuilding);

router.post(
    '/',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    validateRequest(BuildingValidations.create),
    BuildingController.createBuilding);


router.patch(
    '/:id',
    validateRequest(BuildingValidations.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    BuildingController.updateBuilding
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    BuildingController.deleteBuilding
);

export const BuildingRoutes = router;