# RPG Character Management API

## Overview

A fantasy realm requires a centralized system for managing heroes, quests, skills, and equipment.

Your team is responsible for building the backend platform used by adventurers and guild administrators.

The system will grow over several development iterations.

New requirements will be introduced during the project.

---

# Sprint 1 Scope

Implement CRUD operations for:

* Characters
* Quests
* Skills
* Items

---

# Domain Model

## Character

| Field      | Type   |
| ---------- | ------ |
| id         | UUID   |
| name       | string |
| class      | string |
| level      | number |
| experience | number |

Rules:

* Name required
* Level >= 1
* Experience >= 0

---

## Quest

| Field      | Type   |
| ---------- | ------ |
| id         | UUID   |
| title      | string |
| difficulty | number |
| rewardXp   | number |

Rules:

* Difficulty between 1 and 10
* Reward XP >= 0

---

## Skill

| Field    | Type   |
| -------- | ------ |
| id       | UUID   |
| name     | string |
| manaCost | number |
| damage   | number |

Rules:

* Mana Cost >= 0
* Damage >= 0

---

## Item

| Field  | Type   |
| ------ | ------ |
| id     | UUID   |
| name   | string |
| rarity | string |
| value  | number |

Rules:

* Name required
* Value >= 0

---

# API Requirements

CRUD endpoints for all entities.

Example:

GET /characters

POST /characters

GET /characters/{id}

PUT /characters/{id}

DELETE /characters/{id}

---

# Testing Requirements

Required:

* Unit Tests
* Validation Tests
* Service Layer Tests

Coverage Goal:

80%

---

# Continuous Integration

Pull Requests must execute:

* npm run lint
* npm run test
* npm run build

Pipeline failures block merges.

---

# Future Iterations

Future requirements may include:

* Inventory management
* Character progression
* Skill trees
* Equipment bonuses
* Quest completion
* Combat simulation
* Party management
