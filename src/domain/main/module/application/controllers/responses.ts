import { Request, Response } from "express";

export const getRequest = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: "get response",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact administrator",
    });
  }
};

export const postRequest = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;

    return res.status(200).json({
      ok: true,
      msg: "post response",
      id,
      name
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact administrator",
    });
  }
};

export const putRequest = async (req: Request, res: Response) => {
  try {
    // body
    const { id: bodyId, name: bodyName } = req.body;
    // params
    const { id: paramsId } = req.params;
    // query
    const { something: queryParam, optional = 10, optional2 = 50 } = req.query;
    // headers
    const headerParam = req.header("headerParam");

    return res.status(200).json({
      ok: true,
      msg: "put response",
      bodyId,
      bodyName,
      paramsId,
      queryParam,
      optional,
      optional2,
      headerParam
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact administrator",
    });
  }
};

export const deleteRequest = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: "delete response",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact administrator",
    });
  }
};
