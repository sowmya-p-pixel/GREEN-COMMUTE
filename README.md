# Green Commute

## Project Overview

Green Commute is a web-based application designed to help users understand the environmental impact of their daily transportation choices. The application calculates estimated carbon dioxide (CO₂) emissions based on the selected mode of transportation and travel distance.

The project aims to promote awareness of sustainable transportation and encourage users to make environmentally responsible commuting choices.

## Features

* Calculate estimated CO₂ emissions based on travel distance.
* Support multiple transportation modes.
* Compare estimated emissions across different transportation methods.
* Provide a simple and user-friendly interface.
* Process commute calculations through a backend API.
* Store and process commute-related data.

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript
* React.js
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Development Tools

* Visual Studio Code
* Postman
* Git
* GitHub

## Transportation Modes and Emission Factors

| Transportation Mode | Estimated CO₂ Emission Factor |
| ------------------- | ----------------------------: |
| Car                 |                    0.21 kg/km |
| Bus                 |                    0.10 kg/km |
| Train               |                    0.05 kg/km |
| Bicycle             |                    0.00 kg/km |
| Walking             |                    0.00 kg/km |

## CO₂ Emission Calculation

The application uses the following formula:

**CO₂ Emission = Distance × Emission Factor**

For example, for a 10 km journey by car:

```text
10 × 0.21 = 2.1 kg CO₂
```

The result represents the estimated CO₂ emission for the selected journey.

## System Workflow

1. The user selects a transportation mode.
2. The user enters the travel distance.
3. The frontend sends the input data to the backend.
4. The backend processes the CO₂ emission calculation.
5. The calculated result is returned to the frontend.
6. The user can view the estimated environmental impact of the journey.

## Project Structure

```text
GREEN-COMMUTE/
│
├── backend/
│   ├── routes/
│   │   └── commute.js
│   └── ...
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── ...
│
├── .gitignore
└── README.md
```

## API

The backend provides an API endpoint for calculating commute emissions.

```text
POST /api/calculate
```

The API accepts the transportation mode and travel distance and returns the estimated CO₂ emission.

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/sowmya-p-pixel/GREEN-COMMUTE.git
```

### Step 2: Navigate to the Project

```bash
cd GREEN-COMMUTE
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 4: Start the Backend

```bash
node server.js
```

### Step 5: Run the Frontend

Open the frontend application using the appropriate local development setup and access it through your browser.

## Project Objectives

* Increase awareness of transportation-related carbon emissions.
* Encourage sustainable commuting practices.
* Provide an accessible CO₂ estimation tool.
* Demonstrate full-stack web development skills.
* Apply software development concepts to an environmental sustainability problem.

## Sustainable Development Goals

The Green Commute project aligns with the following United Nations Sustainable Development Goals:

* **SDG 3:** Good Health and Well-being
* **SDG 7:** Affordable and Clean Energy
* **SDG 11:** Sustainable Cities and Communities
* **SDG 13:** Climate Action

## Future Enhancements

* Add user authentication and personalized commute history.
* Add graphical visualization of CO₂ emissions.
* Provide recommendations for lower-emission transportation options.
* Integrate map-based distance calculation.
* Add route and transportation information.
* Generate weekly and monthly emission reports.

## Developer

**Sowmya P**
B.E. Computer Science and Engineering
Panimalar Engineering College
