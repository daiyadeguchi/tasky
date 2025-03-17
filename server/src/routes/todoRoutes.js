"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const items = [
    { id: 1, status: 0, title: "laundry", description: "do laundry. dont forget to bring quarters" },
    { id: 2, status: 1, title: "workout", description: "push day" },
    { id: 3, status: 2, title: "study", description: "math" }
];
router.get("/todos", (req, res) => {
    res.json(items);
});
exports.default = router;
