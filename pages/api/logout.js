// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { applySession } from "next-session";

export default async function logout(req, res) {
    await applySession(req, res, {name: 'auth'});
    req.session.destroy()
    res.redirect("/")
  }
  