import React from 'react'
import express from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';

import { App } from '../client/App';

const data = {
    questions: [{
        questionId: "Q1",
        content: "Question 1"
    }],
    answers: [{
        answerId: "A1",
        questionId: "Q1",
        upvotes: 2,
        content: "Answer 1"
    }]
}

const app = new express();

app.use(express.static("dist"));

app.get('/', async (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf8`);
    const rendered = renderToString(<App {... data}/>);
    res.send(index.replace("{{rendered}}", rendered));
})

app.listen(7777);

console.info('Server is listening.');