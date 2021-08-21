// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { applySession } from "next-session";
import excuteQuery from "../../lib/db";

export default async function logout(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({message: "Not Found"})
    }
    await applySession(req, res, {name: 'auth'});
    if (req.session.user) {
        const socials = await excuteQuery({
            query: 'SELECT * FROM socials',
        });


        if (!socials?.length) {
            await excuteQuery({
                query: 'INSERT INTO socials (instagram, vimeo, dribble, behance, fiverr) VALUES ("https://www.instagram.com/", "https://vimeo.com/", "https://dribbble.com/", "https://www.behance.net", "https://www.fiverr.com/")',
            });
        }
        if (req.body.instagram) {
            await excuteQuery({
                query: 'UPDATE socials SET instagram=?',
                values: [req.body.instagram]
            });
        }
        if (req.body.vimeo) {
            await excuteQuery({
                query: 'UPDATE socials SET vimeo=?',
                values: [req.body.vimeo]
            });
        }
        if (req.body.dribble) {
            await excuteQuery({
                query: 'UPDATE socials SET dribble=?',
                values: [req.body.dribble]
            });
        }
        if (req.body.behance) {
            await excuteQuery({
                query: 'UPDATE socials SET behance=?',
                values: [req.body.behance]
            });
        }
        if (req.body.fiverr) {
            await excuteQuery({
                query: 'UPDATE socials SET fiverr=?',
                values: [req.body.fiverr]
            });
        }

        if (req.body.name) {
            await excuteQuery({
                query: 'UPDATE users SET name=?',
                values: [req.body.name]
            });
        }
        if (req.body.description) {
            await excuteQuery({
                query: 'UPDATE users SET description=?',
                values: [req.body.description]
            });
        }
        if (req.body.image) {
            await excuteQuery({
                query: 'UPDATE users SET image=?',
                values: [req.body.image]
            });
        }
        if (req.body.first_video) {
            const videos = await excuteQuery({
                query: 'SELECT * from videos',
            });
            if (videos?.length) {
                await excuteQuery({
                    query: 'UPDATE videos SET url=? where id=1',
                    values: [req.body.first_video]
                });
            } else {
                await excuteQuery({
                    query: 'INSERT INTO videos (id, url, title) VALUES (?, ?, ?)',
                    values: [1, req.body.first_video, "first video"]
                });
            }
        }
        if (req.body.video) {
            try {
                const result = await excuteQuery({
                    query: 'INSERT INTO videos (url, title) VALUES (?, ?)',
                    values: [req.body.video, "video"]
                });
                return res.status(200).json({message: "Successfully added"})
            } catch {
                return res.status(500).json({message: "Error"})
    
            }
        }
        return res.status(200).json({message: "Success"})
    } else {
        return res.status(404).json({message: "Not Found"})
    }
  }
  