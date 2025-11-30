# 2048 Game - DevOps CI/CD Project
A small clone of [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024), based on [Saming's 2048](http://saming.fr/p/2048/) (also a clone). 2048 was indirectly inspired by [Threes](https://asherv.com/threes/).

Made just for fun. [Play it here!](http://gabrielecirulli.github.io/2048/)

The official app can also be found on the [Play Store](https://play.google.com/store/apps/details?id=com.gabrielecirulli.app2048) and [App Store!](https://itunes.apple.com/us/app/2048-by-gabriele-cirulli/id868076805)


This repository hosts a modernized, containerized version of the classic [2048 game](https://github.com/gabrielecirulli/2048), transformed into a **Node.js application** and deployed via a fully automated **DevOps pipeline**.

This project was realized as part of the **Engineering DevOps & Cloud Computing** curriculum.

## 👥 Authors
* **Mohamed KOUBAA**
* **Ala BOUSSARSAR**

---

## 🚀 Project Overview

The goal of this project was to industrialize a legacy static application by applying modern DevOps practices:
1.  **Application Transformation:** Converted static HTML/JS into a Node.js (Express) web app.
2.  **Containerization:** Dockerized the application for consistent deployment.
3.  **Infrastructure as Code (IaC):** Automated AWS provisioning using Ansible.
4.  **CI/CD Pipeline:** Automated Build, Test, and Deploy processes using Jenkins.

## 🛠️ Tech Stack

* **Cloud Provider:** AWS (EC2, ECR, VPC, Security Groups)
* **Infrastructure as Code:** Ansible
* **CI/CD:** Jenkins
* **Containerization:** Docker
* **Application Runtime:** Node.js (v16)
* **Version Control:** Git & GitHub

## 📂 Project Structure

```text
├── ansible/            # Ansible playbooks and roles for AWS provisioning
├── jenkins/            # Jenkinsfile defining the CI/CD pipeline
├── src/                # Source code of the 2048 Node.js application
├── rapport/            # Final project report (PDF)
├── Dockerfile          # Docker configuration
└── README.md           # Project documentation
