# Robot Society API

## Overview

Several centuries in the future, robots have achieved autonomy and established their own civilization.

Robot communities manage jobs, resources, upgrades, governance, and social status. As technology evolves, robots seek additional rights and opportunities to participate in society.

Your team has been hired to develop the backend platform used to manage Robot Society.

The platform must support a growing number of features and business rules that will be introduced over multiple development iterations.

The primary objective of this project is to build maintainable software capable of adapting to change while following modern engineering practices.

---

# Project Scope - Sprint 1

The first iteration focuses on establishing the system foundation and implementing the core domain entities.

CRUD operations must be implemented for:

* Robots
* Communities
* Jobs
* Upgrades

---

# Domain Model

## Robot

Represents an autonomous individual.

| Field         | Type   |
| ------------- | ------ |
| id            | UUID   |
| serialNumber  | string |
| name          | string |
| generation    | number |
| humanityScore | number |

Business Rules:

* Serial Number must be unique
* Name is required
* Generation must be greater than zero
* Humanity Score cannot be negative

---

## Community

Represents a robot settlement.

| Field      | Type   |
| ---------- | ------ |
| id         | UUID   |
| name       | string |
| region     | string |
| population | number |

Business Rules:

* Name required
* Population >= 0

---

## Upgrade

Represents a hardware or software enhancement.

| Field      | Type   |
| ---------- | ------ |
| id         | UUID   |
| name       | string |
| version    | string |
| energyCost | number |

Business Rules:

* Name required
* Energy Cost > 0

---

## Job

Represents work available to robots.

| Field              | Type   |
| ------------------ | ------ |
| id                 | UUID   |
| name               | string |
| requiredGeneration | number |
| rewardCredits      | number |

Business Rules:

* Name required
* Required Generation > 0
* Reward Credits >= 0

---

# Functional Requirements

The API must provide CRUD operations for all entities.

Example:

GET /robots

GET /robots/{id}

POST /robots

PUT /robots/{id}

DELETE /robots/{id}

Equivalent endpoints must exist for all modules.

---

# Testing Requirements

The system must contain automated tests.

Required:

* Service layer tests
* Validation tests
* Repository tests (optional)

Coverage Goal:

80%

---

# Continuous Integration

Every Pull Request must execute:

* npm run lint
* npm run test
* npm run build

Merges are blocked if the pipeline fails.

---

# Future Iterations

Future requirements may include:

* Job assignment
* Upgrade installation
* Community membership
* Robot reputation
* Credit economy
* Upgrade compatibility rules
* Rights petitions
* Community elections
* Humanity score progression
* Governance system

The architecture should support the introduction of new business rules with minimal disruption to existing modules.