# Personal Portfolio Website (v1.0)

[Live Demo](https://portfolio-github-io-seven-gamma.vercel.app)

## Overview

This is my personal developer portfolio website — a modern, fully responsive platform built using **Next.js** and **Tailwind CSS**. It showcases my journey as a **Full Stack Developer**, featuring my projects, technical skills, resume, and contact information in a visually engaging and performant design.

---

## Problem Statement

Many developers struggle to present their work in a professional, scalable, and SEO-friendly way. Static portfolios often lack interactivity, performance optimization, and proper deployment pipelines for continuous updates.

---

## Objectives

- Build a dynamic and scalable portfolio using **Next.js App Router**.
- Ensure **SEO optimization** and rich metadata for social sharing.
- Implement smooth **animations** using **Framer Motion**.
- Make it **responsive** across all device sizes.
- Deploy using **CI/CD pipelines** for continuous updates.
- Integrate **Docker** for consistent development environments.
- Add **unit and integration testing** using **Jest** and **React Testing Library**.

---

## Tech Stack

- **Next.js 15** (App Router)
- **React.js 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Docker**
- **Jest**
- **React Testing Library**
- **Prettier**
- **ESLint**
- **Husky**
- **GitHub Actions (CI/CD)**
- **Vercel Deployment**

---

## Version Control

**Current Version:** 1.0

---

## Deployment

The website is deployed on **Vercel** for fast and scalable hosting.

[View Live Portfolio](https://portfolio-github-io-seven-gamma.vercel.app)

---

## Docker Setup (Reference Only)

You can use Docker to run the portfolio locally. Check commands on your system instead of copy-pasting.

### 1️⃣ Build Docker Image

`docker build -t saqibyounas/portfolio:1.0 .`

> Replace with proper syntax on your terminal. The image will be tagged as 1.0.

### 2️⃣ Push Image to Docker Hub

`docker push saqibyounas/portfolio:1.0`

> Upload the image to your Docker Hub account.

### 3️⃣ Pull Image from Docker Hub

`docker pull saqibyounas/portfolio:1.0`

> Download image on any machine.

### 4️⃣ Run Container Locally

`docker run -d -p 3000:3000 --name portfolio-app saqibyounas/portfolio:1.0`

> Start the container and map port 3000. Open `http://localhost:3000` in browser.

### 5️⃣ Stop & Remove Container

`docker stop portfolio-app && docker rm portfolio-app`

> Stop and clean up the running container.

### 6️⃣ Clean Unused Images

`docker system prune -a`

> Free disk space by removing unused images, containers, and cache.

---

## Contact Form

A fully functional **contact form** is available on the portfolio website UI.  
Users can send messages via the form, but the backend implementation is hidden for security purposes.

---

## Note

This is my **personal portfolio project** and is **not open-source**.
