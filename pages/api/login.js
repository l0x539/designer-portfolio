// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { applySession } from "next-session";
import excuteQuery from "../../lib/db";

const bcrypt = require('bcrypt');

export default async function login(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: "Not Found" })
    }
    await applySession(req, res, { name: 'auth' });
    if (req.session.user) return res.redirect("/admin")
    else {
        if (req.body.username && req.body.password) {
            try {
                const result = await excuteQuery({
                    query: 'SELECT * FROM users LIMIT 1',
                });
                console.log("result: ", result);
                if (result.length) {
                    return res.json({ password: req.body.password, hash: result[0].hash })
                    if (bcrypt.compareSync(req.body.password, result[0].hash)) { // true
                        const result = await excuteQuery({
                            query: 'SELECT * FROM users LIMIT 1;',
                        });
                        req.session.user = result[0]
                        return res.redirect("/admin")
                    } else {
                        return res.json({ redirect: "/login" })

                        return res.redirect("/login")
                    }
                } else {
                    const hash = bcrypt.hashSync(req.body.password, 10)
                    const result = await excuteQuery({
                        query: 'INSERT INTO users (username, hash, created_at, last_login) VALUES (?, ?, NOW(), NOW())',
                        values: [req.body.username, hash]
                    });
                    req.session.user = { username: req.body.username, hash }
                    return res.redirect("/admin")

                }
            } catch (error) {
                console.log("error: ", error);
                return res.json({ error })

            }
            return res.redirect("/login")
        }
        return res.redirect("/login")
    }

}