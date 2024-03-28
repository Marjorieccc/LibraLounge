import { Request, Response } from "express";
import Reservation from "../models/reservationModel";

async function postReservation(req: Request, res: Response) {
  try {
    const { userID, resourceID, mediumID } = req.body;
    console.log(`Making reservation:  ${userID}`);
    const revTime = new Date();
    const reservation = new Reservation({
      userID,
      resourceID,
      mediumID,
      time: revTime,
    });

    await reservation.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Reservation Failed" });
  }
}

export { postReservation };
