# Gather Town WebSocket Integration – Auto-Muting Decision System

## 📌 Project Overview

This project is a **WebSocket-based auto-muting decision system** built using **Node.js** for **Gather Town**.

The system connects to a Gather Town space in real time, listens to player movement events, and **decides when a user should be muted or unmuted** based on their proximity to other players.  
It demonstrates **real-time event handling**, **low-latency interaction**, and **proximity-based logic** using WebSockets.


---

## 🎯 Key Features

- Real-time WebSocket connection with Gather Town  
- Live tracking of player movement events  
- Proximity-based mute/unmute decision logic  
- Low-latency, event-driven architecture  
- Clean and modular Node.js implementation  

---

## 🛠️ Technologies Used

- Node.js  
- JavaScript  
- WebSockets  
- @gathertown/gather-game-client  

---

## 📂 Project Structure

Gather-Town-WebSocket-Integration/
│
├── index.js # Handles WebSocket connection and events
├── voiceController.js # Proximity-based mute/unmute logic
├── config.js # Space ID and API key configuration
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

- Node.js (LTS version)
- A Gather Town account
- An active Gather Town space

---

### 2️⃣ Install Dependencies

```bash
npm install @gathertown/gather-game-client
