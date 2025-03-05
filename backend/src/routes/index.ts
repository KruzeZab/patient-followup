import { Router } from 'express';

import clinicRoutes from '../routes/clinic';

const router = Router();

router.use('/', clinicRoutes);

export default router;
