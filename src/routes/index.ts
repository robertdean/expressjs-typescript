import * as express from "express";
import { open } from 'sqlite';
import sqlite3 from 'sqlite3'

export const register = (app: express.Application) => {
    // home page
    app.get("/", async (req: any, res) => {
        const dbx = sqlite3.verbose();
        const db = new dbx.Database('./src/chinook.db', (err) => {
            if (err) {
              console.log(err);
            }
            console.log('Connected to the chinook database.');
          });
  
        const result = await db.all('SELECT PlaylistId id, Name name FROM playlists');
        console.log(result);
        res.render("index");
    });
    // about page
    app.get("/about", async (req: any, res) => {
        res.render("about");
    });
};
