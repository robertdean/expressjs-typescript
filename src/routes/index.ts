import * as express from "express";
import { stringify } from "querystring";
import { open } from 'sqlite';
import sqlite3 from 'sqlite3'
sqlite3.verbose()
export async function openDb () {
    return open({
      filename: './src/chinook.db',
      driver: sqlite3.Database
    })
  }
export const register = (app: express.Application) => {
    // home page
    app.get("/", async (req: any, res) => {
        const db = await openDb();
        const result = await db.all('SELECT * FROM Playlists');
        console.log(result);
        res.render("index", { sqldata: result });
    });
    // about page
    app.get("/about", async (req: any, res) => {
        res.render("about");
    });



};
