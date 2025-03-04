import { Response } from 'express';
import HttpStatus from 'http-status-codes';

import * as clincService from '@/services/clinic';

export async function createPatient(req: any, res: Response) {
  const { name, typeOfCheckup, email } = req.body;

  await clincService.createPatient(name, email, typeOfCheckup);

  res.status(HttpStatus.CREATED).json({
    message: 'Patient added successfully',
  });
}
