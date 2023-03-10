import { unprocessableError } from "@middlewares/errorMiddleware";
import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const messageError: string[] = error.details.map(
        (err: any) => err.message
      );

      throw unprocessableError(messageError);
    }

    next();
  };
}
