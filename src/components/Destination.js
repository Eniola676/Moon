import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Moon from "./Moon";
import Europa from "./Europa";
import Mars from "./Mars";
import Titan from "./Titan";

export default function Destination() {
    const [destination, setDestination] = useState("");
    return <>
        <Routes>
            <Route path="/" element={<Moon setDestination={setDestination} />} />
            <Route path="/europa" element={<Europa setDestination={setDestination} />} />
            <Route path="/mars" element={<Mars setDestination={setDestination} />} />
            <Route path="/titan" element={<Titan setDestination={setDestination} />} />
        </Routes>
    </>
}