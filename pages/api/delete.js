// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { applySession } from "next-session";
import excuteQuery from "../../lib/db";

export default async function logout(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({message: "Not Found"})
    }
    await applySession(req, res, {name: 'auth'});
    if (req.session.user) {
        try {
            const result = await excuteQuery({
                query: 'DELETE FROM videos where id=?',
                values: [req.body.id]
            });
            return res.status(200).json({message: "Successfully deleted"})
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Error deleting"})

        }

    } else {
        return res.status(404).json({message: "Not Found"})
    }
  }
  