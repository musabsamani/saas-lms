import axios, { AxiosError } from "axios";
import { Request, Response } from "express";

export const forwardRequest = (SERVICE_URL: string) => {
  return async (req: Request, res: Response) => {
    try {
      const { method, body, params } = req;
      const response = await axios({
        method,
        url: `${SERVICE_URL}/api/${req.path}`,
        data: body,
        params,
      });
      return res.status(response.status).json(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return res.status(error.response?.status || 500).json(error.response?.data || { message: "Error forwarding request", error });
      } else {
        return res.status(500).json({ message: "Error forwarding request", error });
      }
    }
  };
};
